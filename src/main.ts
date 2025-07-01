import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from './config/swagger.config';
import { GlobalExceptionsFilter, PORT, SWAGGER_DOCS } from './common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const documentFactory = () =>
    SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(`${SWAGGER_DOCS}`, app, documentFactory);
  app.useGlobalFilters(new GlobalExceptionsFilter());
  await app.listen(PORT);
}
bootstrap()
  .then(() => {
    console.log(`Appication Started on ${PORT}`);
  })
  .catch((error) => {
    console.error('Error starting app:', error);
  });
