import { Controller, Get, Post, Body, Patch, Param, Delete, ConflictException, NotFoundException, HttpCode } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';


//* 43 me quede en el tema de validar los controladores

@Controller('tareas')
export class TareasController {
  constructor(private readonly tareasService: TareasService) {}

  @Post()
  async create(@Body() createTareaDto: CreateTareaDto) {
    try {
      return await this.tareasService.create(createTareaDto);
    } catch (error) {
        if(error.code === 11000){
            throw new ConflictException("La tarea  ya existe");
        }
        throw new Error("Error en la creación de la tarea");
    }
  }

  @Get()
  findAll() {
    return this.tareasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const tarea = await this.tareasService.findOne(id);
      if(!tarea){
          throw new NotFoundException("Tarea no encontrada");
      }
      return tarea;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTareaDto: UpdateTareaDto) {
    const tareaActualizar = await this.tareasService.update(id, updateTareaDto);
      if(!tareaActualizar){
         throw new NotFoundException("tarea a actualizar no encotrada");
      }
    return tareaActualizar;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const tareaAEliminar = await this.tareasService.remove(id);
      if(!tareaAEliminar){
        throw new NotFoundException("tarea a eliminar no encontrada");
      }
      return tareaAEliminar;
  }

}
