import { Module } from '@nestjs/common';
import { SimpleTestsModule } from './simple-tests/simple-tests.module';
import { MockTestsModule } from './mock-tests/mock-tests.module';
import { AutoMockTestsModule } from './auto-mock-tests/auto-mock-tests.module';

@Module({
  imports: [SimpleTestsModule, MockTestsModule, AutoMockTestsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
