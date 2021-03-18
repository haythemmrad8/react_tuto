import React , {Component} from 'react';

class LifeCycleExp extends Component {

constructor(props){
    super(props);
    this.state = {
        time :new  Date 
    }
}

componentDidMount(){
    setInterval(()=>{
        this.setState({
            time : new Date
        });
    },1000)
}

render(){
    return <div>
        time is : {this.state.time.toLocaleTimeString() + this.state.time.toLocaleDateString()}
    </div> ;
}

}
 export default LifeCycleExp;