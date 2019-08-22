class User:

    @staticmethod
    @property
    def default():
        return {
            "admin": UserAdmin.default or {},
            "inventory": UserInventory.default or {}
        }

    def __init__(self, id : str):
        self.id = id
        self.data = User.default
    
    def _patch(self, data : User.default = {}):
        pass

    @property
    def admin(self) -> UserAdmin:
        return UserAdmin(self)
    
    @property
    def inventory(self) -> UserInventory:
        return UserInventory(self)

class UserAdmin:
    
    @staticmethod
    @property
    def default():
        return {}
    
    def __init__(self, user : User):
        self.user = user

    @property
    def data(self):
        return self.user.data['user']

class UserInventory:
    
    @staticmethod
    @property
    def default():
        return {}
    
    def __init__(self, user : User):
        self.user = user

    @property
    def data(self):
        return self.user.data['inventory']

    def _patch(self, data):
        pass

    def _patch_item(self, id : str, amount : int):
        pass

    def get(self, item):
        pass
    
    def has(item, amount : int = 1):
        pass
    
    async def add(id : str, amount : int):
        pass
    
    async def remove(id : str, amount : int):
        pass

    async def set(id : str, amount : int):
        pass
    
    async def clear(id : str):
        pass