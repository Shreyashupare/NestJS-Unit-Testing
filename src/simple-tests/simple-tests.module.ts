import { Module } from '@nestjs/common';
import { SimpleTestsService } from './simple-tests.service';

@Module({
  providers: [SimpleTestsService],
})
export class SimpleTestsModule {}
