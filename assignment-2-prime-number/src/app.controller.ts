import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class AppController {

  @Get('assignment-2-prime-number/:num')
  checkPrime(@Param('num') num: string): string {
    const number = parseInt(num, 10);
    if (isNaN(number)) {
      return 'Please provide a valid number.';
    }

    if (this.isPrime(number)) {
      return `${number} is a prime number.`;
    } else {
      return `${number} is not a prime number.`;
    }
  }

  private isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
}
