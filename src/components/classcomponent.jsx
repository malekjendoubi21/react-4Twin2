import { Component } from "react";
export default  class Classcomponent extends Component{
/*state={
 etat1:"test",
etat2:3
}*/
constructor(props){
    super(props)
    console.log(this)
    this.state={
        etat1:"test",
       etat2:3,
       etat4:{
        etat25:396

       }

       }
}
    render(){
        return <h1> hello {this.props.name} class  component 
<br/>{this.state.etat1} {this.state.etat2}
<br/>
{this.state.etat4.etat25}
    
    
    
    </h1>
    }
}


