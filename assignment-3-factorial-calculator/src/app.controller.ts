import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('assignment-3-factorial-calculator/:number')
  getFactorial(@Param('number') number: string): string {
    const num = parseInt(number, 10);
    if (isNaN(num) || num < 0) {
      return 'Please provide a valid non-negative integer.';
    }

    const factorialResult = this.calculateFactorial(num);
    return `Factorial of ${num} is ${factorialResult}`;
  }

  private calculateFactorial(num: number): number {
    if (num === 0 || num === 1) return 1;
    return num * this.calculateFactorial(num - 1);
  }
}



  
