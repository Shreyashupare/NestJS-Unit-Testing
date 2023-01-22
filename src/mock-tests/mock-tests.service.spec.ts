import { Test, TestingModule } from '@nestjs/testing';
import { MockTestsService } from './mock-tests.service';
import { HttpService } from '@nestjs/axios';

describe('MockTestsService', () => {
  let service: MockTestsService;
  const mockEmployee = {
    name: 'shreyas',
    age: 23,
  };
  // custom providers ( for dependencies )
  const mockService = {
    getEmployee: jest.fn().mockReturnValueOnce({
      name: 'shreyas',
      age: 23,
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MockTestsService,
        {
          provide: HttpService,
          useValue: mockService,
        },
      ],
    }).compile();

    service = module.get<MockTestsService>(MockTestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return employee', async () => {
    expect(mockService.getEmployee(1)).toEqual(mockEmployee);
    expect(mockService.getEmployee).toHaveBeenCalledWith(1);
  });
});
