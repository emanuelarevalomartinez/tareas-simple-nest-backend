import { Injectable } from '@nestjs/common';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tarea } from './schemas/tarea.schema';

@Injectable()
export class TareasService {

constructor(
     @InjectModel(Tarea.name) private tareasModelo: Model<Tarea>){

}


  async create(createTareaDto: CreateTareaDto) {
    const nuevaTarea = new this.tareasModelo(createTareaDto);

    return nuevaTarea.save();
  }

  async findAll() {
   return this.tareasModelo.find();
  }

  async findOne(id: string) {
    return this.tareasModelo.findById(id);
  }

  async update(id: string, updateTareaDto: UpdateTareaDto) {
    return this.tareasModelo.findByIdAndUpdate(id,updateTareaDto);
  }

  async remove(id: string) {
    return this.tareasModelo.findByIdAndDelete(id);
  }
}
