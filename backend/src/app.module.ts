import { Module } from '@nestjs/common';

import { PollService } from './poll.service';
import { PollsDescriptionController } from './polls-description/polls-description.controller';
import { PollResultController } from './polls-result/polls-result.controller';

@Module({
  imports: [],
  controllers: [PollsDescriptionController, PollResultController],
  providers: [PollService],
})
export class AppModule {}
