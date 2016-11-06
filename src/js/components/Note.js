var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Note = React.createClass({
  render(){
    return(
      <div className="column">
        <div className="note">
          <div>
            {this.props.note.text}

          </div>
        </div>
      </div>
    )
  }
})

module.exports = Note;
