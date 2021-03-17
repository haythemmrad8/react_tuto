import React , {Component} from 'react';

class Hello extends Component{

    state ={
        user : {
            age:23,
            gender:'male',
            name:'haythem'
        },
        classe : '2dni'

     }
    render(){
        return(
            <div>hello from {this.props.name} 
                <p>{'age : '+ this.state.user.age +'gender :'+this.state.user.gender+'name : '+this.state.user.name}</p> 
            </div>
        );
    }
}

export default Hello ;