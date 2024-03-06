import React, { Component } from "react";
class LifeB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "vishwas"
        }
        console.log("constructor - 1b")
    }
    static getDerivedStateFromProps(props, state) {
        // this keyword cannot be used ---- static
        console.log("getDerivedStateFromProps - 2b")

    }
    componentDidMount() {
        console.log("component did mount -4b")

    }
    render() {
        console.log("render-3b")
        return (
            <div>hello</div>
        )

    }

}
export default LifeB