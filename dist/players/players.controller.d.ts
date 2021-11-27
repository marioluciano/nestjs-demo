import { CreatePlayerDto } from './dtos/create.dto';
export declare class PlayersController {
    createPlayer(createPlayerDto: CreatePlayerDto): Promise<string>;
}
