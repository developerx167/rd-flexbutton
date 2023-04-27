import React from "react"
import { FlexButtonProps } from './type'
const FlexButton = ({content,disabledOverlayElement,containerClassName,buttonProps} : FlexButtonProps) => {
  return (
    <div className={containerClassName} style={{position : "relative"}}>
      <button {...buttonProps} disabled={(disabledOverlayElement || buttonProps?.disabled) ? true : false}>{content}</button>
      {disabledOverlayElement && disabledOverlayElement}
    </div>
  )
}
export default FlexButton