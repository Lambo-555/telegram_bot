import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: 'TELEGRAM_BOT_TOKEN', // BotFather
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
