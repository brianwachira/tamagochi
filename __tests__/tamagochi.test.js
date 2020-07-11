import { TamaGochi } from './../src/js/tamagochi.js';

import { TamaGochis } from './../src/js/tamagochi.js';

describe('TestGochi', () => {

  jest.useFakeTimers();
  let testGochi;
  let testGochi2;
  let testGochis;

  beforeEach(function(){
    testGochi = new TamaGochi("TestGochi");
    testGochi.setHunger();
    testGochi.setBoredom();
    testGochi.setSleep();

    testGochi2 = new TamaGochi("TestGochi2");

    testGochis = new TamaGochis();
    
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
  });

  test('Should die if food level,play level or awake level drops below zero',()=>{

    testGochi.foodLevel = 0;
    testGochi.playLevel = 0;
    testGochi.awakeLevel = 0;
    expect(testGochi.didYouDie()).toEqual(true);
  });

  test('Should die if 10 minutes pass without eating, sleeping or resting',()=>{

    jest.advanceTimersByTime(600600)
    expect(testGochi.didYouDie()).toEqual(true);
  });

  test('Should have a food level, play level or rest level of 10 if it feeds, plays or rests',()=>{
    jest.advanceTimersByTime(540000);
    testGochi.feed();
    testGochi.play();
    testGochi.sleep();
    expect(testGochi.foodLevel).toEqual(10);
  });

  test('Game is over after tamagochi is dead', ()=>{
    jest.advanceTimersByTime(600600);
    expect(testGochi.didYouDie()).toEqual(true);
  });

  test('Game is locked after game is over',()=>{
    jest.advanceTimersByTime(600600);
    expect(testGochi.didYouDie()).toEqual(true);
    expect(testGochi.feed()).toEqual(false);
  });  
  
  test('Should be able to have multiple tamagochis',()=>{
    testGochis.addTamagochi(testGochi);
    testGochis.addTamagochi(testGochi2);

    expect(testGochis.showTamagochis()).toEqual(testGochi.name + testGochi2.name);
  });
});