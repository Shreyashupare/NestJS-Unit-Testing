import { Module } from '@nestjs/common';
import { AutoMockTestsService } from './auto-mock-tests.service';

@Module({
  providers: [AutoMockTestsService]
})
export class AutoMockTestsModule {}
