import React, {Component} from "react";
import PureC from "./PureC";
import RegComp from "./RegComp";

class ParentC extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"Chinmay"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Chinmay'
            })
        },2000)
    }
    render(){
        console.log("Parent component render **********************")
        return(
            <div>
                <RegComp name = {this.state.name}/>
                <PureC name =   {this.state.name}/>
            </div>
        )
    }
}

export default ParentC