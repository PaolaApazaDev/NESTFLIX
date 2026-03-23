import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({ type: 'int' })
  estreno: number;

  @Column({ type: 'float' })
  calificacion: number;

  @Column()
  plataforma: string;
}
