function sum() {
    let ourSum = 0
    for (i=0; i<arguments.length; i++){
        ourSum += arguments[i]
    }
    return ourSum
}

function sumSpread(...args) {
    let ourSum = 0
    for (i=0; i<args.length; i++){
        ourSum += args[i]
    }
    return ourSum
}

Function.prototype.myBind = function(context){
    // debugger
    let that = this;
    // debugger
    let args = Array.from(arguments).slice(1)
    // debugger
    return function() {
        // debuger
        let callArgs = Array.from(arguments)
        // debugger
        return that.apply(context, args.concat(callArgs))
    }
}

class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  
  markov.says("meow", "Ned");
  // Markov says meow to Ned!
  // true
  
  // bind time args are "meow" and "Kush", no call time args
  markov.says.myBind(pavlov, "meow", "Kush")();
  // Pavlov says meow to Kush!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "a tree"
  markov.says.myBind(pavlov)("meow", "a tree");
  // Pavlov says meow to a tree!
  // true
  
  // bind time arg is "meow", call time arg is "Markov"
  markov.says.myBind(pavlov, "meow")("Markov");
  // Pavlov says meow to Markov!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "me"
  const notMarkovSays = markov.says.myBind(pavlov);
  notMarkovSays("meow", "me");
  // Pavlov says meow to me!
  // true