var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  addNote(note) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_NOTE,
      note
    });
  },
}


module.exports = AppActions;
