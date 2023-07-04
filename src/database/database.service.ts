import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Test } from './mongodb/mongo-db.class';
import { DataDTO } from 'src/dto/data.dto';
import { RedisService } from './redis/redis.service';

@Injectable()
export class DatabaseService {
    constructor(
        @InjectModel('test') private readonly testModel: Model<Test>,
        private readonly redis: RedisService
    ) {}

    async getAllData() {
        return await this.testModel.find().exec();
    }

    async getById(id: string) {
        const cache = await this.redis.get(id);
        if(cache) {
            console.log('Encontrado no Cache!');
            return cache;
        }
        console.log('Encontrado no MongoDB');
        
        const dbData = await this.testModel.findById(id).exec();
        await this.redis.set(dbData.id, JSON.stringify(dbData), 'EX', 120);

        return dbData;
    }

    async saveData(data: DataDTO) {
        const softData = new this.testModel(data);
        return await softData.save();
    }

    async updateData(id: string, data: DataDTO) {
        await this.testModel.updateOne({_id: id}, data).exec();
        await this.redis.set(id, JSON.stringify(data), 'EX', 120);

        return 'atualizado';
    }

    async deleteData(id: string) {
        await this.testModel.deleteOne({_id: id}).exec();
        await this.redis.del(id);

        return 'deletado';
    }
}
