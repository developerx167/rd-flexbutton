export type ContentType = JSX.Element | string
export interface FlexButtonProps {
    content : ContentType,
    containerClassName? : string,
    disabledOverlayElement? : JSX.Element,
    buttonProps? : React.ButtonHTMLAttributes<HTMLButtonElement> 
}