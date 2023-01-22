import { Test, TestingModule } from '@nestjs/testing';
import { AutoMockTestsService } from './auto-mock-tests.service';
import { createMock } from '@golevelup/ts-jest';

describe('AutoMockTestsService', () => {
  let service: AutoMockTestsService;
  const mockEmployee = {
    name: 'shreyas',
    age: 23,
  };
  // createMock function is a factory function that receives a token as a parameter and returns a complete mock of said token. token is nothing but depenency

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutoMockTestsService],
    })
      .useMocker(createMock)
      .compile();

    service = module.get<AutoMockTestsService>(AutoMockTestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return employee details', async () => {
    const mockgetemployee = createMock<AutoMockTestsService>();

    mockgetemployee.getEmployee = jest
      .fn()
      .mockReturnValue({ name: 'shreyas', age: 23 });
    expect(mockgetemployee.getEmployee(1)).toEqual(mockEmployee);
    expect(mockgetemployee.getEmployee).toHaveBeenCalledWith(1);
  });
});
