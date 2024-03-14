import React from "react";

let students = [
    {   
        "id":1,
        "firstName":"chinmay",
        "lastName":"deshpande"

    },
    {
        "id":2,
        "firstName":"poorva",
        "lastName":"vyas"

    },
    {
        "id":3,
        "firstName":"anil",
        "lastName":"deshpande"

    }

]

function NameList(){
    const names = ["sarika","poorva","ninad","milind","poorva"]
    const namesList = names.map((el,index)=><h2 key ={index}>{el}</h2>)
    return <div>{namesList}</div>

}

export default NameList