import { Episodio } from 'src/episodios/entities/episodio.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Series {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  genero: string;

  @Column()
  sinopsis: string;

  @Column()
  urlPortada: string;

  @OneToMany(() => Episodio, (episodio) => episodio.series)
  episodios: Episodio[];
}
