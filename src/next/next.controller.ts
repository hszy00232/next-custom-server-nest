import { Controller, Req, Res, Get } from "@nestjs/common";
import { NextRequest, NextResponse } from "./types";

@Controller()
export class NextController {
    @Get("*")
    allHandler(@Req() req:NextRequest, @Res() res:NextResponse){
        return res.nextRequestHandler(req,res)
    }
}