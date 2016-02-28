import React from 'react';

export default React.createClass({

  getInitialState: function(){
    return {
      value: 'Go ahead.. '
    };
  },

  onChange: function(event){
    this.setState({
       value: event.target.value, 
    });
  },
  
  onKeyDown: function(event){
    if(event.key == 'Enter'){
      var value = this.state.value;
      this.props.onSubmit(value);
      this.setState({value: ''});
    }
  },
  
  onClick: function(){
    this.setState({
       value: '', 
    });
  },

  render : function(){
    return (
      <input 
        value={this.state.value}
        onClick={this.onClick}
        onKeyDown={this.onKeyDown}
        onChange={this.onChange} 
        
      />
    );  
  },

});