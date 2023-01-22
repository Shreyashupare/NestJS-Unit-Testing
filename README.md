Unit Testing 

There are 4 Test Suites in this project:

Simple-tests -
  Test cases on class with 0 dependency. Easy & straightforward

Dependency-tests -
  Dependency has to be resolved using custom provider or using mock

  1. in dependency-test module, actual api is used for test cases which is time consuming and not required in cases of testing so mocking is used.
  2. Mocking make the dummpy function which behave same as actual function

#auto mocking

  createMock from is mock factory from '@golevelup/ts-jest' help mocking all dependencies instead of manually providing


  ####

Reference - https://docs.nestjs.com/fundamentals/testing
Jest Reference - https://jestjs.io/docs/getting-started

What is Unit Testing ?

A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. Main objective of unit testing is to determine the code if it works as intended. If it isdone correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.


describe('SimpleTestsService', () => {
  let service: SimpleTestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SimpleTestsService],
    }).compile();

    service = module.get<SimpleTestsService>(SimpleTestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

descrube() - to group related test cases in a block, we can run multiple test inside this with it(), it() is nothing but test()

beforeEach - hook handles any setup work that needs to happen before running each test.
            similarly, afterEach(), beforeAll(), afterAll()

createTestingModule() - This returns a TestingModule instance. It takes module metadata object as it's arguments ( {imports:[], controllers:[], providers:[])


.toBe() - do not use toBe() to check object/array, it work as Object.is(). 
          Instead use .toStrictEqual() or .toEqual()

#Mock

  const module: TestingModule = await Test.createTestingModule({
      providers: [AutoMockTestsService],
    })
      .useMocker(createMock)
      .compile();

createMock returns a complete mock of all dependencies

Refer Jest Documentation for mock methods

THANK YOU.
