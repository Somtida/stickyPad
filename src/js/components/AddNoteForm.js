var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var AddNoteForm = React.createClass({
  render(){
    return(
      <div>
        <h5>Add A Note</h5>
        <form action="">
          <div className="row">
            <div className="large-12 columns">
              <label htmlFor="">Note Text
                <input type="text" ref="text" placeholder="Enter Text..."/>
              </label>
              <button className="button">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
})

module.exports = AddNoteForm;
