import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import WithLoader from './WithLoader';

class ToDoList extends PureComponent {
  render() {
    return <WithLoader {...this.props}/>
  }

}

const mapStateToProps = ({todoPage:{todos}})=>({
      todos:todos.data,
});

export default connect(mapStateToProps)(ToDoList);
