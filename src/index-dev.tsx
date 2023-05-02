import React from 'react'
import {createRoot} from "react-dom/client"
import "../styles/index.css"
import FlexButton from './components'
const App = () => {
  return (
    <div className='main'>
        <FlexButton
            content={"my button"}
            buttonProps={{
                id : "button",
                className : "button"
            }}
            containerClassName='button-container'
        />
        <FlexButton
            content={"my button"}
            buttonProps={{
                id : "disabled",
                className : "button",
                disabled : true
            }}
            containerClassName='button-container'
        />
        <FlexButton
            content={"my button"}
            buttonProps={{
                id : "disabled",
                className : "button",
            }}
            containerClassName='button-container'
            disabledOverlayElement={<div className='disabledEl'> <div className='loader'></div> </div>}
        />
    </div>
  )
}

const root = createRoot(document.getElementById("root")!);
root.render(<App/>)