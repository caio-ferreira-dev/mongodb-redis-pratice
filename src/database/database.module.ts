import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TestSchema } from './mongodb/test.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "test", schema: TestSchema}]),
  ],
  providers: [
    DatabaseService
  ],
  exports: [
    DatabaseService
  ]
})
export class DatabaseModule {}
