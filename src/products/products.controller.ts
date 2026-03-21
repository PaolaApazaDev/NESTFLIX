import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import type { Request } from 'express';
import type { FileFilterCallback } from 'multer';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('upload-image')
  @UseInterceptors(
    FileInterceptor('image', {
      dest: './uploads/products',
      fileFilter: (
        _req: Request,
        file: { mimetype: string },
        cb: FileFilterCallback,
      ) => {
        if (file.mimetype.startsWith('image/')) {
          cb(null, true);
          return;
        }
        cb(
          new BadRequestException('Solo se permiten archivos de imagen'),
          false,
        );
      },
    }),
  )
  uploadImage(
    @UploadedFile() file: { filename: string } | undefined,
    @Req() req: Request,
  ) {
    if (!file) {
      throw new BadRequestException('Debes subir una imagen en el campo image');
    }

    const baseUrl = `${req.protocol}://${req.get('host')}`;

    return {
      image: `${baseUrl}/uploads/products/${file.filename}`,
    };
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }
}
