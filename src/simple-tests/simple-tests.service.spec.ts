import { Test, TestingModule } from '@nestjs/testing';
import { SimpleTestsService } from './simple-tests.service';

// this test cases are with 0 dependencies
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

  describe('createTweet', () => {
    it('should be defined', () => {
      expect(service.createTweet).toBeDefined();
    });

    it('should create tweet', () => {
      service.tweets = [];
      const payload = 'This is my tweet';
      const tweet = service.createTweet(payload);
      expect(tweet).toBe(payload);
      expect(service.tweets).toHaveLength(1);
    });

    it('should prevent tweets created which are over 100 characters', () => {
      const payload =
        'This is a long tweet over 100 characters This is a long tweet over 100 characters This is a long tweet over 100 characters This is a long tweet over 100 characters';
      const tweet = () => {
        return service.createTweet(payload);
      };
      expect(tweet).toThrowError(`Tweet too long`);
    });
  });

  describe('deleteTweet', () => {
    it('shoud be defined', () => {
      expect(service.deleteTweet).toBeDefined();
    });

    it('should throw error tweet not exist', () => {
      service.tweets = [];
      service.createTweet('added tweet');
      const dt = () => {
        return service.deleteTweet(1);
      };
      expect(dt).toThrowError(`This Tweet does not exist`);
    });

    it('should delete the tweet', () => {
      service.tweets = [];
      const payload = ['added tweet 2, id = 1'];
      service.createTweet('added tweet 1, id = 0');
      service.createTweet('added tweet 2, id = 1');
      const deletedTweet = service.deleteTweet(1);
      //do not use toBe to check array/object
      expect(deletedTweet).toStrictEqual(payload);
      expect(service.tweets).toHaveLength(1);
    });
  });
});
