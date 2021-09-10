class Wallet {

  constructor(initialBalance) {
      this.ballance = initialBalance;
      this.CAPACITY = 30.0;
  }
  
  getBallance() {
      return this.ballance;
    }
  
  deposit(amount) {
    if ((this.ballance + amount) > this.CAPACITY) {
        return "Too many coins!";
        }
      this.ballance += amount;
      return this.ballance;  
   }
   withdraw(amount){
        if (amount > this.ballance) {
            return "Not enough cash!";
        }

       this.ballance -= amount;
       return this.ballance; 
    }

    
}

module.exports = Wallet;