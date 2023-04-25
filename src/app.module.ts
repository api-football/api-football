import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:n0FgA6wNI7ziEtuW@cluster0.olxcwek.mongodb.net/api-football?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
    PlayersModule,
  ],
  providers: [],
})
export class AppModule {}
