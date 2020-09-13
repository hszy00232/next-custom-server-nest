import next from 'next'
import { FactoryProvider } from '@nestjs/common'
import { NextServer, NextServerOptions} from './types'
export const NextServerToken = "NextServerToken"
export const createNextServer = (nextServerOptions: NextServerOptions): FactoryProvider<Promise<NextServer>>=>({
    provide: NextServerToken,
    useFactory: async ()=>{
        const nextServer = next(nextServerOptions)
        await nextServer.prepare()
        return nextServer
    }
})