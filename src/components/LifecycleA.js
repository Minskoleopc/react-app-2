import React , {Component} from "react"
class LifecyleA extends Component{

    // Mounting  ----- contructor  , getDerivedStateFromProps , render ,componentDidMount
    constructor(){
        super()
        this.state = {
            name:"vishwas"
        }
        console.log("Life cycle 1st method called - constructor")
    }

    static  getDerivedStateFromProps(props, state){
        console.log("Life cycle 2st method called - getDerivedStateFromProps ")
        return null
    }
    componentDidMount(){
        console.log("This last method called -componentDidMount")
    }

    render(){
        console.log('This is render 3rd method called - render()')
        return(
           
            <div>
                <h1> This is called</h1>
            </div>
        )
       
    }


}

export default LifecyleA


