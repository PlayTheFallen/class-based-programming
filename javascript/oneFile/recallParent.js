class User {
  /**
   * @param {string} id Primary key of record
   */
  constructor(id) {
    this.id = id;
    this.data = {
      admin: {},
      inventory: {}
    }
  }
  
  /**
   * @param {User.default} data
   */
  _patch(data) {
    data.admin && this.admin._patch(data.admin);
    data.inventory && this.inventory._patch(data.inventory);
  }
  
  get admin() {
    return new UserAdmin(this);
  }
  
  get inventory() {
    return new UserInventory(this);
  }
  
  static get default() {
    return {
      id: "", // UUID - database won't allow this if it already exists
      admin: Admin.default,
      inventory: UserInventory.default
    }
  }
}

class UserAdmin {
  /**
   * @param {User} user
   */
  constructor(user) {
    this.user = user;
  }
  
  get data() {
    return this.user.data.admin;
  }
  
  static get default() {
    return {};
  }
}

class UserInventory {
  /**
   * @param {User} user
   */
  constructor(user) {
    this.user = user;
  }
    
  get data() {
    this.user.data.inventory;
  }
    
  /**
   * @param {UserInventory.default}
   * @returns {void}
   */
  _patch(data) {
    Object.entries(data).forEach(([id, amount]) => {
      this._patchItem(id, amount);
    });
  }
  
  /**
   * @param {string} id
   * @param {number} amount
   * @returns {void}
   */
  _patchItem(id, amount) {
  
  }
  
  get(item) {
  
  }
  
  has(item, amount = 1) {
  
  }
  
  async add(id, amount) {
  
  }
  
  async remove(id, amount) {
  
  }
  
  async set(id, amount) {
  
  }
  
  async clear(id) {
  
  }
  
  static get default() {
    return [];
    // unknown item format (object item id mapping or array iterable to Map class)
    // further unknown with item meta (store as:
    // a. [UUID, number] where 'UUID' is an item id and 'number' is the amount held in the inventory
    // b. [UUID, {}]
    // c. InventoryItem[] where 'InventoryItem' is an interface holding various meta data about the rest of the item (amount, effects, custom name, etc.)
    // ... and the list goes on ... it could exist as another class altogether.
    // )
  }
}

module.exports = User;
