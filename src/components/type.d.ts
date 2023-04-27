export type ContentType = JSX.Element | string
export interface FlexButtonProps {
    content : ContentType,
    containerClassName? : string,
    disabledElement? : JSX.Element,
    buttonProps? : React.ButtonHTMLAttributes<HTMLButtonElement> 
}