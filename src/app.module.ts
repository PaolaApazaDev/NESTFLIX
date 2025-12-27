import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeriesModule } from './series/series.module';
import { EpisodiosModule } from './episodios/episodios.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'user_crud',
      password: 'root',
      database: 'db_nestflix',
      autoLoadEntities: true,
      synchronize: true,
    }),
    SeriesModule,
    EpisodiosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
