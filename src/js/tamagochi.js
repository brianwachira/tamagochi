export class TamaGochis{
  constructor(){
    this.tamagochis = [];
    this.id = 0;
  }

  addTamagochi(tamagochi){
    tamagochi.id = this.setId();
    this.tamagochis.push(tamagochi);
  }

  setId(){
    this.id+=1;

    return this.id;
  }

  showTamagochis(){
    let names = "";
    this.tamagochis.forEach(function(tamagochi){

      names+=tamagochi.name;
    });

    return names;
  }
  
}

export class TamaGochi{
  constructor(name){
    this.name = name;
    this.foodLevel = 10;
    this.playLevel = 10;
    this.awakeLevel = 10;
    this.id = 0;
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
      if(this.foodLevel <=0 || this.playLevel <=0 || this.awakeLevel <= 0){
        this.isDead = true;
      }
    }
    return this.isDead;
  }

  feed(){
    if(!this.isDead){
      this.foodLevel = 10;
    }else{
      return false;
    }
  }

  play(){
    if(!this.isDead){
      this.playLevel = 10;
    }else{
      return false;
    }
  }

  sleep(){
    if(!this.isDead){
      this.awakeLevel = 10;
    }else{
      return false;
    }
  }
}