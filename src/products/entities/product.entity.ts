import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

type ProductRating = {
  rate: number;
  count: number;
};

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('text')
  description: string;

  @Column()
  category: string;

  @Column()
  image: string;

  @Column({ type: 'jsonb' })
  rating: ProductRating;
}
