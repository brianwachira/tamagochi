import { TamaGochi } from './../src/js/tamagochi.js';

describe('TestGochi', () => {

  jest.useFakeTimers();
  let testGochi;

  beforeEach(function(){
    testGochi = new TamaGochi("TestGochi");
    testGochi.setHunger();
    testGochi.setBoredom();
    testGochi.setSleep();

  });

  afterEach(function(){
    jest.clearAllTimers();
  });


  test('should have a name and food level,food levelfood level of 10 when created',()=>{
    expect(testGochi.name).toEqual("TestGochi");
    expect(testGochi.foodLevel).toEqual(10);
    expect(testGochi.playLevel).toEqual(10);
    expect(testGochi.awakeLevel).toEqual(10);
  });

  // 1 minute is 60000 milliseconds
  test('should have food level of 7 after 180000 milliseconds (3 minutes)', ()=>{
    jest.advanceTimersByTime(180000);
    expect(testGochi.foodLevel).toEqual(7);
  });

  test('Should have play level of 5 after 300000 milliseconds (5 minutes)',()=>{
    jest.advanceTimersByTime(300000);
    expect(testGochi.playLevel).toEqual(5);
  });

  test('Should have awake level of 3 after 420000 (7 minutes)', ()=>{
    jest.advanceTimersByTime(420000);
    expect(testGochi.awakeLevel).toEqual(3);
  })
});