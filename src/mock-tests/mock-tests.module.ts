import { Module } from '@nestjs/common';
import { MockTestsService } from './mock-tests.service';

@Module({
  providers: [MockTestsService]
})
export class MockTestsModule {}
