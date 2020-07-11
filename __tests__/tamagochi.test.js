import { TamaGochi } from './../src/js/tamagochi.js';

describe('TestGochi', () => {

  jest.useFakeTimers();
  let testGochi;

  beforeEach(function(){
    testGochi = new TamaGochi("TestGochi");
    testGochi.setHunger();

  });

  afterEach(function(){
    jest.clearAllTimers();
  });


  test('should have a name and food level,food levelfood level of 10 when created',()=>{
    expect(testGochi.name).toEqual("TestGochi");
    expect(testGochi.foodLevel).toEqual(10);
    expect(testGochi.playLevel).toEqual(10);
    expect(testGochi.sleepLevel).toEqual(10);
  });

  // 1 minute is 60000 milliseconds
  test('should have food level of 7 after 180000 milliseconds (3 minutes)', ()=>{
    jest.advanceTimersByTime(180000);
    expect(testGochi.foodLevel).toEqual(7);
  });
});