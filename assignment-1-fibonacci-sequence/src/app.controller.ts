import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('assignment-1-fibonacci-sequence/:count')
  getFibonacciSequence(@Param('count') count: string): string {
    const num = parseInt(count, 10);
    if (isNaN(num) || num < 0) {
      return 'Please provide a valid non-negative integer.';
    }

    const sequence = this.generateFibonacci(num);
    return `Fibonacci sequence up to ${num} Numbers: ${sequence.join(', ')}`;
  }

  private generateFibonacci(count: number): number[] {
    if (count === 0) return [];
    if (count === 1) return [0];
    
    const sequence = [0, 1];
    for (let i = 2; i < count; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }
}
