import { Module } from '@nestjs/common';
import { TareasModule } from './tareas/tareas.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.URL_DATABASE_MONGO),
    TareasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
