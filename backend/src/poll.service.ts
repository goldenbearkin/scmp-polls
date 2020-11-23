import { Injectable } from '@nestjs/common';

export interface IPollResult {
  id: number;
  amount: number;
}

@Injectable()
export class PollService {
  pollResult = [];

  getPollsResult(): IPollResult[] {
    return this.pollResult;
  }

  setPollResult(id: number) {
    const index = this.pollResult.findIndex((result) => result.id === id);
    if (index === -1) {
      this.pollResult.push({ id, amount: 1 });
    } else {
      this.pollResult[index].amount++;
      return this.pollResult;
    }
  }
}
