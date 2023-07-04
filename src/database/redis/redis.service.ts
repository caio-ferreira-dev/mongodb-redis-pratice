import { Injectable } from "@nestjs/common";
import { Redis } from "ioredis";

@Injectable()
export class RedisService extends Redis {
    constructor() {
        super()

        super.on('error', (e) => {
            console.log('Erro no Redis');
            console.log(e);
            process.exit(1);
        });

        super.on('connect', () => {
            console.log('Redis conectado!');
        });
    }
}