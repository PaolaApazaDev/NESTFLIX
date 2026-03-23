import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Series } from './entities/series.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(Series)
    private readonly seriesRepository: Repository<Series>,
  ) {}

  async create(createSeriesDto: CreateSeriesDto) {
    const nuevaSerie = this.seriesRepository.create(createSeriesDto);
    return await this.seriesRepository.save(nuevaSerie);
  }

  async findAll() {
    return await this.seriesRepository.find();
  }

  async findOne(id: number) {
    const series = await this.seriesRepository.findOneBy({ id });
    if (!series) {
      throw new NotFoundException(`Serie con id ${id} no encontrada`);
    }
    return series;
  }

  async update(id: number, updateSeriesDto: UpdateSeriesDto) {
    return await this.seriesRepository.update(id, updateSeriesDto);
  }

  async remove(id: number) {
    const series = await this.findOne(id);
    return await this.seriesRepository.remove(series);
  }
}
