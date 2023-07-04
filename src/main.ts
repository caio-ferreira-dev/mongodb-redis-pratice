import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  // Swagger
  const config = new DocumentBuilder()
  .setTitle('MongoDb and Redis - API')
  .setDescription('An Nest JS API that integrates the data with Redis and MongoDB ')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  //
  await app.listen(3030);
}
bootstrap();
