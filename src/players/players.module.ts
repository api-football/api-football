import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerEntity } from './entities/player.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'players', schema: PlayerEntity }]),
  ],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class PlayersModule {}
