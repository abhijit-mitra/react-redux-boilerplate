import React, { PureComponent } from 'react';
import {connect} from 'react-redux';

import {Button, Input} from '../../atoms';
import {ToDoList} from '../../templates';
import {addTodo} from '../../../actions';

class ToDoPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      'value':''
    };
  }
  handleClick = ()=>{
    const {value} = this.state;
    this.props.addTodo(value);
    this.setState({'value':''});
  }
  handleChange = (e)=>{
    const {value} = e.target;
    this.setState({
      value
    })
  }
  render() {
    const {value} = this.state;
    return (
      <div className='todo full-height-v p-30'>
        <div className='row'>
          <center className="col-md-12">
              <h2>My To Do List</h2>
          </center>
        </div>
        <div className="row">
          <div className="col-md-12 mb-3">
            <Input
              value={value}
              onChange={this.handleChange}
              placeholder={'Title..'}
              append={
                <Button
                label='Add ToDo'
                onClick={this.handleClick}
                disabled={!Boolean(value)}
                />}
            />
          </div>
        </div>
        <ToDoList/>
      </div>
    );
  }

}

export default connect(null,{addTodo})(ToDoPage);
