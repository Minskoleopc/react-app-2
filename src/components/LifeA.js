import React, { Component } from "react";
import LifeB from "./LifeB";


class LifeA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "vishwas"
        }
        console.log("constructor - 1")
    }
    static getDerivedStateFromProps(props, state) {
        // this keyword cannot be used ---- static
        console.log("getDerivedStateFromProps - 2")

    }
    componentDidMount() {
        console.log("component did mount -4")

    }
    render() {
        console.log("render-3")
        return (
            <div>
                    <div>hello</div>
                    <LifeB/>
            </div>
           
        )

    }

}
export default LifeA