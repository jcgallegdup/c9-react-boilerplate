import React from 'react';
import classNames from 'classnames';

export default React.createClass({
  
  click: function(){ this.props.onClick(this.props.index); },
  
  render: function(){

    var classes = classNames({
      'todo-item': true,
      'done': this.props.done,
    });
  
    return(
      <div className={classes} onClick={this.click}>
        {this.props.task}
      </div>
    );
  },
});