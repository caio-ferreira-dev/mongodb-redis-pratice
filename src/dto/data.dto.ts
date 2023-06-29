import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber } from "class-validator";

export class DataDTO {

    @ApiProperty({
        description : 'string data',
        example : 'some text'
    })
    @IsString()
    stringTest : string

    @ApiProperty({
        description : 'number data',
        example : '1'
    })
    @IsNumber()
    numberTest : number
}