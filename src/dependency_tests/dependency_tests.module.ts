import { Module } from '@nestjs/common';
import { DependencyTestsService } from './dependency_tests.service';

@Module({
  providers: [DependencyTestsService],
})
export class DependencyTestsModule {}
