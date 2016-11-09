var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Note = require('./Note');

var NoteList = React.createClass({
  render(){
    return(
      <div className="mybg">
        <div className="row small-up-1 medium-up-2 large-up-3">
          {
            this.props.notes.map((note, i) => {
              return (
                <Note note={note} key={i} />
              )
            })
          }
        </div>

      </div>
    )
  }
})

module.exports = NoteList;
