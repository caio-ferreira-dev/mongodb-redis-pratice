import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Test } from './mongodb/test.class';
import { DataDTO } from 'src/dto/data.dto';

@Injectable()
export class DatabaseService {
    constructor(
        @InjectModel('test') private readonly testModel: Model<Test>
    ) {}

    async getAllData() {
        return await this.testModel.find().exec();
    }

    async getById(id: string) {
        console.log(id);
        
        return await this.testModel.findById(id).exec();
    }

    async saveData(data: DataDTO) {
        const softData = new this.testModel(data);
        return await softData.save()
    }

    async updateData(id: string, data: DataDTO) {
        await this.testModel.updateOne({_id: id}, data).exec();

        return 'atualizado';
    }

    async deleteData(id: string) {
        await this.testModel.deleteOne({_id: id}).exec();
        return 'deletado';
    }
}
