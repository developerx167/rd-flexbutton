export type ContentType = JSX.Element | string
export interface FlexButtonProps {
    content : ContentType,
    conatinerClassName? : string,
    disabledElement? : JSX.Element,
    buttonProps? : React.ButtonHTMLAttributes<HTMLButtonElement> 
}