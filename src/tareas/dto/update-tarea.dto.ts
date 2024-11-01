import { PartialType } from '@nestjs/mapped-types';
import { CreateTareaDto } from './create-tarea.dto';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateTareaDto extends PartialType(CreateTareaDto) {

    @IsString()
    @IsOptional()
    titulo:string;

    @IsString()
    @IsOptional()
    descripcion?:string;

    @IsBoolean()
    @IsOptional()
    hecha?:boolean;
}
