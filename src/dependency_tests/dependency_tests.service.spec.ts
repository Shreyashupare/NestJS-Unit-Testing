import { Test, TestingModule } from '@nestjs/testing';
import { DependencyTestsService } from './dependency_tests.service';
import { HttpModule } from '@nestjs/axios';
import { BadRequestException } from '@nestjs/common';

describe('DependencyTestsService', () => {
  let service: DependencyTestsService;
  const mockEmployee = {
    id: 1,
    name: 'shreyas',
    age: 23,
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [DependencyTestsService],
    }).compile();

    service = module.get<DependencyTestsService>(DependencyTestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  // Here actual api is being called
  describe('test api by actual calling api', () => {
    it('should return employee details', async () => {
      // async method
      const employee = service.getEmployee(1);
      expect(employee).resolves.toStrictEqual(mockEmployee);

      // OR
      const employee_d = await service.getEmployee(1);
      expect(employee_d).toStrictEqual(mockEmployee);
    });

    it('should throw bad request exception', async () => {
      const employee = service.getEmployee(0);
      expect(employee).rejects.toBeInstanceOf(BadRequestException);
    });
  });
});
