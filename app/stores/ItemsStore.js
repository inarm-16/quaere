import BaseStore from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';

class ItemsStore extends BaseStore {

  emitChange() {
    this.emit(ITEMS_UPDATED);
  }

  addChangeListener(callback) {
    this.on("const", callback);
  }

  removeChangeListener(callback) {
    this.removeListener("const", callback);
  }
}

let store = new ItemsStore();

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case "const":
      store.setAll(action.items);
      break;
    default:
  }
});

export default store;
