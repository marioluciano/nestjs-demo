import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create.dto';

@Controller('api/v1/players')
export class PlayersController {

    @Post()
    async createPlayer(@Body() createPlayerDto: CreatePlayerDto) {
        const { email } = createPlayerDto
        return JSON.stringify(`{
            "email": ${email}
        }`)
    }
}
