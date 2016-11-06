var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Note = require('./Note');

var NoteList = React.createClass({
  render(){
    return(
      <div className="row small-up-2 medium-up-3 large-up-4">
        {
          this.props.notes.map((note, i) => {
            return (
              <Note note={note} key={i} />
            )
          })
        }
      </div>
    )
  }
})

module.exports = NoteList;
