import { IsNumber, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {

    @IsNumber()
    @IsPositive()
    @Min(0)
    no: number;

    @IsString()
    @MinLength(3)
    name: string;
}
