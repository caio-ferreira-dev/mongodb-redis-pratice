import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TestSchema } from './mongodb/mongo-db.schema';
import { RedisService } from './redis/redis.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "test", schema: TestSchema}])
  ],
  providers: [
    DatabaseService,
    RedisService
  ],
  exports: [
    DatabaseService
  ]
})
export class DatabaseModule {}
