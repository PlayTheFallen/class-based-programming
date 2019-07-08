class UserInventory {
  /**
   * @param {import('./User')}
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
    if(data instanceof Array) {
      // [ ID as string, number ]
      for(let [id, amount] of data) {
        this._patchItem(id, amount)
      }
      // data.forEach(([item, amount]) => {...})
    } else if (data instanceof Object) {
      // { [id: string]: number }
      Object.entries(data).forEach(([id, amount]) => {
        this._patchItem(id, amount);
      });
      // for (let [id, item] of Object.entries(data)) {...}
    } else {
      // result:InventoryItem[] -> instanceof Array
    }
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
