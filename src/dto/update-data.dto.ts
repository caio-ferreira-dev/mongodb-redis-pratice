import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsObject } from "class-validator";
import { DataDTO } from "./data.dto";

export class UpdateDataDTO {

    @ApiProperty({
        description : 'database field id',
        example : '27838'
    })
    @IsString()
    id : string

    @ApiProperty({
        description : 'data',
        example : {
            "stringTest": "some text",
            "numberTest": 12345
        }
    })
    @IsObject()
    data : DataDTO
}