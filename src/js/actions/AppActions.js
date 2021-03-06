var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  addNote(note) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_NOTE,
      note
    });
  },

  receiveNotes(notes) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_NOTES,
      notes
    });
  },

  removeNote(noteId) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.REMOVE_NOTE,
      noteId
    });
  },

}


module.exports = AppActions;
