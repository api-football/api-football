import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './interface/player.interface';

@Injectable()
export class PlayersService {
  constructor(
    @InjectModel('players') private readonly playerModel: Model<Player>,
  ) {}

  async create(createPlayerDto: CreatePlayerDto) {
    const newPlayer = new this.playerModel(createPlayerDto);

    return await newPlayer.save();
  }

  async findAll(): Promise<Player[]> {
    return await this.playerModel.find().exec();
  }

  async findOne(email: string): Promise<Player> {
    const findOnePlayer = await this.playerModel
      .findOne({ email: email })
      .exec();

    if (!findOnePlayer) {
      throw new NotFoundException(`Jogado com e-mail: ${email} não encontrado`);
    }

    return findOnePlayer;
  }

  async update(email: string, updatePlayerDto: UpdatePlayerDto) {
    const findPlayer = await this.playerModel.findOneAndUpdate(
      {
        email: email,
      },
      { $set: updatePlayerDto },
    );

    return findPlayer;
  }

  async remove(email: string): Promise<any> {
    return await this.playerModel.deleteOne({ email: email }).exec();
  }
}
