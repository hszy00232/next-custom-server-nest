import { Module, NestModule, DynamicModule } from "@nestjs/common";
import { NextMiddleware } from "./next.middleware";
import { NextServerOptions } from "./types";
import { createNextServer } from "./next-server.provider";
import { NextController } from "./next.controller";

@Module({})
export class NestNextModule implements NestModule {
    static forRoot(nextServerOptions:NextServerOptions): DynamicModule{
        const nextServer = createNextServer(nextServerOptions)
        return {
            module: NestNextModule,
            controllers: [NextController],
            providers: [nextServer],
            exports: [nextServer]
        }
    }
    configure(consumer){
        consumer.apply(NextMiddleware).forRoutes('*')
    }
}