import { UseFilters, UseGuards, UseInterceptors } from '@nestjs/common';
import {
  Help,
  InjectBot,
  On,
  Message,
  Start,
  Update,
  Command,
} from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';
// import { AdminGuard } from '../common/guards/admin.guard';
// import { TelegrafExceptionFilter } from '../common/filters/telegraf-exception.filter';
import { Context } from './telegram/interfaces/context.interface';

@Update()
// @UseInterceptors(ResponseTimeInterceptor)
// @UseFilters(TelegrafExceptionFilter)
export class TelegramUpdate {
  constructor(
    @InjectBot('telegram-tests')
    private readonly bot: Telegraf<Context>,
  ) {}

  @Start()
  async onStart(): Promise<string> {
    const me = await this.bot.telegram.getMe();
    return `Hey, I'm ${me.first_name}`;
  }

  @Help()
  async onHelp(): Promise<string> {
    return 'Send me any text';
  }

  @Command('admin')
//   @UseGuards(AdminGuard)
  onAdminCommand(): string {
    return 'Welcome judge';
  }

  @On('text')
  onMessage(
    @Message('text') textMessage: string,
  ): string {
    return textMessage;
  }
}