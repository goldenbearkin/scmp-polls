import { Controller, Get } from '@nestjs/common';
import * as pollsDescription from './poll.json';

@Controller('polls-description')
export class PollsDescriptionController {
  @Get()
  getAll() {
    return pollsDescription.polls;
  }
}
