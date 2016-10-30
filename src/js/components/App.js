var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AddNoteForm = require(‘./AddNoteForm.js’);

function getAppState() {
  return {

  }
}


var App = React.createClass({
  getInitialState: function() {
    return getAppState();
  },

  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState(getAppState());
  },

  render(){
    return(
      <div>
        <div className="off-canvas-wrapper">
          <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
            <div className="off-canvas position-left reveal-for-large" data-off-canvas data-position="left">
              <div className="row colum">
                <br/>
                 <AddNoteForm />
              </div>
            </div>
            <div className="off-canvas-content" data-off-canvas-content>
              NoteList
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = App;
