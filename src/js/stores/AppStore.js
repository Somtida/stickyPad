var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/appAPI.js');

var CHANGE_EVENT = 'change';

var _notes = [];

var AppStore = assign({}, EventEmitter.prototype, {
  addNote(note) {
    _notes.push(note);
  },
  setNote(notes) {
    _notes = notes;
  },
  getNote() {
    return _notes;
  },
  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(callback) {
    this.on('change', callback);
  },
  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case AppConstants.ADD_NOTE:
      console.log('Adding Note...');

      //Store Save
      AppStore.addNote(action.note);

      //API Save
      AppAPI.addNote(action.note);

      //Emit Change
      AppStore.emit(CHANGE_EVENT);

      break;

    case AppConstants.RECEIVE_NOTES:
      console.log('Receivinging Notes...');

      //Store Save
      AppStore.setNote(action.notes);

      //API Save
      // AppAPI.setNote(action.notes);

      //Emit Change
      AppStore.emit(CHANGE_EVENT);

      break;
  }


  return true;
});

module.exports = AppStore;
