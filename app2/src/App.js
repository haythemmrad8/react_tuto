import React , {Component} from 'react'

function Task(props) {
  const todo = props.todo;
  const index = props.index;
  const DoneTask = props.DoneTask;
  return (
  <li>
    {todo.text }
    <button onClick ={()=>DoneTask(index)}>Done</button>
  </li>
  );
}

class App extends Component {
  state = {
     todos : [
      {text : 'task nb 1 '},
      {text : 'task nb 2 '},
      {text : 'task nb 3 '}
    ] 
  }
  DoneTask = (index)=>{
    const todos = [...this.state.todos];
    todos.splice(index,1);
    this.setState({todos});

    //console.log(index);
  }
  Addtask = ()=>{
    const todos = [...this.state.todos];
    todos.push({
     text: this.state.newTask 

    });
    this.setState({
      todos,
       newTask :''
      });
  }
  updateTask = (event)=>{
    this.setState({
      newTask : event.target.value 
    })
  }
  render(){

    return(
      <div> 
        {this.state.todos.map((todo , index) => <Task todo ={todo} key ={index} DoneTask={this.DoneTask} />)}

        <input value ={this.state.newTask} onChange = {this.updateTask}/>
        <button onClick={this.Addtask}>add new task </button>
      </div>
    );
  }


}

export default App;