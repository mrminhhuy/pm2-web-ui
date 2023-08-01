import {NestFactory} from '@nestjs/core';
import {
    FastifyAdapter,
    NestFastifyApplication,
} from '@nestjs/platform-fastify';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {AppModule} from './app.module';
import {ValidationPipe} from '@nestjs/common';
import * as helmet from 'helmet';
import * as rateLimit from 'fastify-rate-limit';
import * as compression from 'compression';
import 'reflect-metadata';
import * as cookieParser from 'cookie-parser';
import {useContainer} from "class-validator";
const fAdapt = new FastifyAdapter();

fAdapt.register(require('fastify-multipart'), {
    addToBody: true,
    sharedSchemaId: 'MultipartFileType',
});

fAdapt.register(rateLimit, {
    timeWindow: process.env.RATE_LIMIT_TIME_WINDOW,
    max: process.env.RATE_LIMIT_MAX,
});

async function bootstrap(): Promise<any> {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        fAdapt,
    );

    //use DI in custom validation
    useContainer(app.select(AppModule), {fallbackOnErrors: true});

    app.use(cookieParser());

    app.enableCors({
        origin: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });
    app.use(helmet());

    const options = new DocumentBuilder()
        .addBearerAuth()
        .setTitle('Service')
        .setDescription('Service API description')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup('v1', app, document);

    app.use(compression());

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            whitelist: true,
            validationError: {
                target: true,
                value: true,
            },
        }),
    );

    await app.listen(+process.env.SERVICE_PORT, '0.0.0.0');
}

bootstrap();
