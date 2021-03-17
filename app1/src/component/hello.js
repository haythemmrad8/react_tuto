import React , {Component} from 'react';

class Hello extends Component{

    state ={
        user : {
            age:23,
            gender:'male',
            name:'haythem'
        },
        classe : 21

     }
     levelDown = () => {
         this.setState({classe: this.state.classe - 1 });
         }
         dobleIT (){
            this.setState({classe: this.state.classe * 2 });
            }
    render(){
        return(
            <div>hello from {this.props.name} 
                <p>{'classe : '+ this.state.classe }</p> 
                <button onClick={()=>{this.setState({classe: this.state.classe + 1})}}>level UP </button>
                <button onClick={this.levelDown}>level down</button>
                <button onClick={this.dobleIT.bind(this)}>Double It</button>

            </div>
        );
    }
}

export default Hello ;