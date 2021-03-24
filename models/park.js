
const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosuarsCollection = [];

    Park.prototype.getName = function(){
        return this.name
    }

    Park.prototype.getTicketPrice = function(){
        return this.ticketPrice;
    }

    Park.prototype.getDinoColSize = function(){
        return this.dinosuarsCollection.length
    }

    Park.prototype.addDino = function(dino){
        this.dinosuarsCollection.push(dino)
    }

    Park.prototype.removeDino = function(){
        this.dinosuarsCollection.splice(0,1)
    }

    Park.prototype.mostVisitors = function() {
        let numVis = this.dinosuarsCollection[5]

        for(dino of this.dinosuarsCollection){
            if(dino.guestsAttractedPerDay > numVis.guestsAttractedPerDay){
                numVis = dino
            }
            return numVis
        }
    }

    Park.prototype.allOfParticularSpecies = function (species) {
      let newArr = [];

      for (dino of this.dinosuarsCollection) {
        if (dino.species === species) {
          newArr.push(dino);
        }
      }
      return newArr;
    };

    Park.prototype.totalNumVis = function () {
      let total = 0;

      for (dino of this.dinosuarsCollection) {
          total += dino.guestsAttractedPerDay;
      }
        return total;
    };

    Park.prototype.totalNumVisYear = function () {
        return this.totalNumVis() * 365
    }

    Park.prototype.totalRevenueYear = function (){ 
        return this.totalNumVisYear() * this.ticketPrice
    }

    Park.prototype.removeCertainSpeices = function (speices){
        let newArr = []
        for(dino of this.dinosuarsCollection){
            if(dino.species != speices){
                newArr.push(dino)
            }
        
        }
        return this.dinosuarsCollection = newArr
    }

    Park.prototype.dietAndNumbers = function (){
        dietByNum = {}

        for(let dino of this.dinosuarsCollection){
            if(dietByNum[dino.diet]){
                dietByNum[dino.diet] += 1
            }
            else{
                dietByNum[dino.diet] = 1
            } 
        }  
        return dietByNum

    }

        

    
           

    

}
module.exports = Park;