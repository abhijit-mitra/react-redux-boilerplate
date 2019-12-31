import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {updateTodo, deleteTodo} from '../../../actions';
import {Button, Checkbox, TextArea} from '../../atoms';

class ToDo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      disabled:true
    };
  }
  componentDidMount() {
    const {id} = this.props;
    const elm = document.getElementById(id);
    elm.scrollIntoView({behavior: "smooth"});
  }
  handleChange = (e)=>{
    const {value} = e.target;
    const {id}=this.props;
    this.props.updateTodo({
      id,
      name:value
    })
  }

  handleCheckbox = ()=>{
    const {id, data}=this.props;
    this.props.updateTodo({
      id,
      done: !data.done
    })
  }

  handleDelete = ()=>{
    const {id} = this.props;
    this.props.deleteTodo(id);
  }

  handleDoubleClick = ()=>{
  }

  render() {
    const {data, id}=this.props;
    if(!data){
      return(<React.Fragment></React.Fragment>)
    }
    return (
        <div className="to-do row mb-5" id={id}>
          <div className="col-md-12">
            <TextArea
              onDoubleClick={this.handleDoubleClick}
              prepend={<Checkbox onChange={this.handleCheckbox} checked={data.done}/>}
              append={<Button
                        label={'x'}
                        type='danger'
                        onClick={this.handleDelete}
                        />}
              value={data.name}
              onChange={this.handleChange}
              />
          </div>
        </div>
    );
  }

}

const mapStateToProps = ({todoPage:{todos:{data}}}, ownProps)=>({
  data: (data && data[ownProps.id])
})

export default connect(mapStateToProps,{updateTodo, deleteTodo})(ToDo);
