import { Series } from 'src/series/entities/series.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Episodio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  duracion: number;

  @Column()
  numeroCapitulo: number;

  @ManyToOne(() => Series, (series) => series.episodios)
  @JoinColumn({ name: 'seriesId' })
  series: Series;
}
