var AppActions = require('../actions/AppActions');

//set apiKey
let myAPIkey = 'rbl9eu1d2ttVKYczQkc-ueSrdqKNmiA9';

module.exports = {
  addNote(note) {
    $.ajax({
      url: `https://api.mlab.com/api/1/databases/stickypad/collections/notes?apiKey=${myAPIkey}`,
      data: JSON.stringify(note),
      type: 'POST',
      contentType: 'application/json',
    })
  }

}
