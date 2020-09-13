import { NestMiddleware, Injectable, Inject } from "@nestjs/common";
import { NextRequest,NextResponse,NextServer } from './types'
import { NextServerToken } from "./next-server.provider";
@Injectable()
export class NextMiddleware implements NestMiddleware<NextRequest,NextResponse>{
    constructor(@Inject(NextServerToken) private nextServer:NextServer){}
    use(req:NextRequest,res:NextResponse,next:Function):void{
        res.nextServer = this.nextServer
        res.nextRender = this.nextServer.render.bind(this.nextServer,req,res)
        res.nextRequestHandler = this.nextServer.getRequestHandler()
        next()
    }
}