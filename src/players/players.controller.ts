import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './interface/player.interface';
import { PlayersService } from './players.service';
import { PlayerValidationParams } from './pipes/players-pipe';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createPlayerDto: CreatePlayerDto) {
    await this.playersService.create(createPlayerDto);
  }

  @Get()
  findAll(): Promise<Player[]> {
    return this.playersService.findAll();
  }

  @Get(':email')
  findOne(@Param('email') email: string): Promise<Player> {
    return this.playersService.findOne(email);
  }

  @Patch(':email')
  update(
    @Param('email') email: string,
    @Body() updatePlayerDto: UpdatePlayerDto,
  ) {
    return this.playersService.update(email, updatePlayerDto);
  }

  @Delete(':email')
  remove(@Param('email', PlayerValidationParams) email: string) {
    return this.playersService.remove(email);
  }
}
