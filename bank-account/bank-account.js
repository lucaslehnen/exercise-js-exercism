//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { exception } from "console";

export class BankAccount {

  constructor() {
    this._balance = 0;
    this._opened = false;
  }

  open() {
    if (this._opened){
      throw new ValueError();
    }
    this._balance = 0;
    this._opened = true;
  }

  close() {
    if (!this._opened){
      throw new ValueError();
    }
    this._balance = 0;
    this._opened = false;    
  }

  deposit(value) {
    if (this._opened && (value > 0)){      
      this._balance = this._balance + value;
    }else{
      throw new ValueError();
    }
    
  }

  withdraw(value) {
    if (this._opened && (value > 0) && (value <= this._balance)){
      this._balance = this._balance - value;
    }else{
      throw new ValueError();
    }
    
  }

  get balance() {
    if (!this._opened){
      throw new ValueError();
    }
    return this._balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
