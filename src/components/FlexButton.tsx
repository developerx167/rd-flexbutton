import React from "react"
import { FlexButtonProps } from './type'
const FlexButton = ({content,disabledElement,containerClassName,buttonProps} : FlexButtonProps) => {
  return (
    <div className={containerClassName} style={{position : "relative"}}>
      <button {...buttonProps} disabled={(disabledElement || buttonProps?.disabled) ? true : false}>{content}</button>
      {disabledElement && disabledElement}
    </div>
  )
}
export default FlexButton