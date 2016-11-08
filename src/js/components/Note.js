var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Note = React.createClass({
  removeNote(i, j){
    AppActions.removeNote(i.$oid);

  },
  render(){
    let {note} = this.props;
    // console.log("note", note);
    return(
      <div className="column">
        <div className="note">
          <div onDoubleClick={this.removeNote.bind(this, note._id)}>
            {note.text}

          </div>
        </div>
      </div>
    )
  }
})

module.exports = Note;
