import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class IdDTO {

    @ApiProperty({
        description : 'database field id',
        example : '27838'
    })
    @IsString()
    id : string
}