export class TamaGochi{
  constructor(name){
    this.name = name;
    this.foodLevel = 10;
    this.playLevel = 10;
    this.awakeLevel = 10;

    this.isDead = false;
  }

  setHunger(){
    if(!this.isDead){
      setInterval(()=>{
        this.foodLevel--;
      },60000);
    }else{
      return false;
    }
  }


  setBoredom(){
    if(!this.isDead){
      setInterval(()=>{
        this.playLevel--;
      },60000);
    }else{
      return false;
    }
  }

  setSleep(){
    if(!this.isDead){
      setInterval(()=>{
        this.awakeLevel--;
      },60000);
    }else{
      return false;
    }
  }

  didYouDie(){
    if(!this.isDead){
      if(this.foodLevel <=0){
        this.isDead = true;
      }
    }
    return this.isDead;
  }
}