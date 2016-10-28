var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

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
        <div class="off-canvas-wrapper">
          <div class="off-canvas-wrapper-inner" data-off-canvas-wrapper>
            <div class="off-canvas position-left reveal-for-large" data-off-canvas data-position="left">
              <div className="row colum">
                <br/>
                {/*  Add Note Form */}
              </div>
            </div>
            <div class="off-canvas-content" data-off-canvas-content>
              {/* NoteList */}
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = App;
