import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CreateTareaDto {

    @IsString()
    @IsNotEmpty()
    titulo:string;

   @IsString()
   @IsOptional()
   descripcion?:string;

   @IsBoolean()
   @IsOptional()
   hecha?:boolean;

}
