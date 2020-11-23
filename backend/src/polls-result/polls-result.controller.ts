import { Body, Controller, Get, Put } from '@nestjs/common';
import { PollService, IPollResult } from 'src/poll.service';

@Controller('polls-result')
export class PollResultController {
  constructor(private pollService: PollService) {}
  @Get()
  getPollsResult(): IPollResult[] {
    return this.pollService.getPollsResult();
  }

  @Put()
  setPollResult(@Body() { id }: { id: number }) {
    this.pollService.setPollResult(id);
    return this.pollService.getPollsResult();
  }
}
