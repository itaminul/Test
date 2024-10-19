import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const microservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.RMQ,
      options: {
        urls: ["amqp://localhost:5672"],
        queue: "service1_queue",
        queueOptions: {
          durable: false,
        },
      },
    });
  // await app.listen();
  await app.listen(3000); // Specify the port for the HTTP server
  await microservice.listen();
  // Log the URLs for the services
  console.log(`HTTP server is running on: http://localhost:3000`);
  console.log(`Microservice is listening for messages...`);
}
bootstrap();
