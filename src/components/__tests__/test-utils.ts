import { render } from "@testing-library/react";
import { ContentType } from "../type";
export function getTextContentOfALabel(label : ContentType){
    if(typeof label === "string"){
        return label;
    }else{
        const {textContent} = render(label).container;
        return textContent ? textContent : "";
    }
}