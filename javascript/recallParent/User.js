const Admin = require('./UserAdmin');
const Inventory = require('./UserInventory');

class User {
  /**
   * @param {string} id
   */
  constructor(id) {
    this.id = id;
    this.data = User.default;
  }
  
  _patch(data = {}) {
    // Partials are accepted here
    // packet a: { admin: { } }
    // packet b: { inventory: [ ] }
    // if it exists, it is passed through to the next patch method
    data.admin && this.admin._patch(data.admin);
    data.inventory && this.inventory._patch(data.inventory);
  }
  
  get admin() {
    return new Admin(this);
  }
  
  get inventory() {
    return new Admin(this);
  }
  
  static get default() {
    return {
      // id: "",
      admin: Admin.default,
      inventory: Inventory.default
    }
  }
}

module.exports = User;
