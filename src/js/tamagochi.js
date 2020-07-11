export class TamaGochi{
  constructor(name){
    this.name = name;
    this.foodLevel = 10;
    this.playLevel = 10;
    this.sleepLevel = 10;git s

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


}