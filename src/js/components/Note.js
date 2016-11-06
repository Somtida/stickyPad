var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Note = React.createClass({
  render(){
    return(
      <div>
        Note
        {/* {this.props.note} */}
      </div>
    )
  }
})

module.exports = Note;
