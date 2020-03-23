'use strict';

const Cryptr = require('cryptr');

class Utility {
  #secretKey = process.env.SECRET_KEY;
  #cryptr = new Cryptr(this.#secretKey);

  constructor() {
    if (!Utility.instance) {
      Utility.instance = this;
    }
    return Utility.instance;
  }

  decrypt(value) {
    try {
      if (value !== null) {
        return this.#cryptr.decrypt(value);
      }
    } catch (error) {
      return value;
    }
    return null;
  }

  encrypt(value) {
    if (value !== null) {
      return this.#cryptr.encrypt(value);
    }
    return null;
  }
}

const instance = new Utility();
Object.freeze(instance);

module.exports = instance;
