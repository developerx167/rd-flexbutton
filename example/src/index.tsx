import React from 'react'
import ReactDom from "react-dom"
import FlexButton from "../../src/index"
import "./styles.css"
const Button = () => {
  return (
    <FlexButton 
        label={"my button"}
        buttonProps={{
            onClick : ()=>window.alert("button"),
            disabled : false,
            className : "button"
        }}
        disabledElement={<div>disabled</div>}
        conatinerClassName='container'
    />
  )
}

ReactDom.render(<Button/>, document.getElementById("root"));