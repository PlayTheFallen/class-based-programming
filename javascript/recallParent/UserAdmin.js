class UserAdmin {
  /**
   * @param {import('./User')}
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

module.exports = UserAdmin;
