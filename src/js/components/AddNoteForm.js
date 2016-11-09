var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var AddNoteForm = React.createClass({
  onSubmit(e) {
    e.preventDefault();
    // console.log(this.refs.text.value);
    var note = {
      text: this.refs.text.value.trim()
    }
    AppActions.addNote(note);
  },
  render(){
    return(
      <div className="content">
        <h5>Add A Note</h5>
        <form onSubmit={this.onSubmit}>
          <div className="row">

            <div className="columns">
              <label>Note Text</label>
              <input type="text" ref="text" placeholder="Enter Text..."/>

              <button className="button expand">
                Add
              </button>
            </div>
          </div>
        </form>
        <span className="alert round label">Double Click on sticky Note to Remove</span>
      </div>
    )
  }
})

module.exports = AddNoteForm;
