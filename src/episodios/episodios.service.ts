import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEpisodioDto } from './dto/create-episodio.dto';
import { UpdateEpisodioDto } from './dto/update-episodio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Episodio } from './entities/episodio.entity';
import { Repository } from 'typeorm';
import { Series } from 'src/series/entities/series.entity';

@Injectable()
export class EpisodiosService {
  constructor(
    @InjectRepository(Episodio)
    private readonly episodioRepository: Repository<Episodio>,

    @InjectRepository(Series)
    private readonly seriesRepository: Repository<Series>,
  ) {}

  async create(createEpisodioDto: CreateEpisodioDto) {
    const series = await this.seriesRepository.findOneBy({
      titulo: createEpisodioDto.nombreSerie,
    });
    if (!series) {
      throw new BadRequestException('Serie no encontrada');
    }
    const nuevoEpisodio = this.episodioRepository.create({
      ...createEpisodioDto,
      series,
    });
    return await this.episodioRepository.save(nuevoEpisodio);
  }

  async findAll() {
    const episodios = await this.episodioRepository.find({
      relations: ['series'],
    });
    return episodios;
  }

  async findOne(id: number) {
    return await this.episodioRepository.findOneBy({ id });
  }

  async update(id: number, updateEpisodioDto: UpdateEpisodioDto) {
    return await this.episodioRepository.update(id, updateEpisodioDto);
  }

  async remove(id: number) {
    return await this.episodioRepository.delete(id);
  }
}
