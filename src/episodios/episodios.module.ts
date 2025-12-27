import { Module } from '@nestjs/common';
import { EpisodiosService } from './episodios.service';
import { EpisodiosController } from './episodios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Episodio } from './entities/episodio.entity';
import { SeriesModule } from 'src/series/series.module';

@Module({
  imports: [TypeOrmModule.forFeature([Episodio]), SeriesModule],
  controllers: [EpisodiosController],
  providers: [EpisodiosService],
})
export class EpisodiosModule {}
