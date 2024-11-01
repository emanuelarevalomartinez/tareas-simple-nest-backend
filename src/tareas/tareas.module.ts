import { Module } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { TareasController } from './tareas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tarea, TareaSchema } from './schemas/tarea.schema';

@Module({
  imports:[
   MongooseModule.forFeature([
    {
      name:Tarea.name,
      schema: TareaSchema,
     }
   ]),
  ],
  controllers: [TareasController],
  providers: [TareasService],
})
export class TareasModule {}
