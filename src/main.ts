import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   app.enableCors({
    allowedHeaders: '*',
    credentials: true,
    origin: [
    'http://127.0.0.1:3000',
    'http://localhost:3000',
    ],
    methods: ["GET", "POST","PUT","DELETE"],
    });
  await app.listen(8000);
}
bootstrap();
