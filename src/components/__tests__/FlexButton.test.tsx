import React from "react";
import {getByRole, render} from "@testing-library/react"
import FlexButton from "../FlexButton"
import { ContentType } from "../type"
import { getTextContentOfALabel } from "./test-utils";
import '@testing-library/jest-dom';

const contentWithoutJsx : ContentType = "my content";
const contentWithJsx : ContentType = <div>button</div>
const disabledElementTestId = "disbaledElement"
const disabledOverlayElement = <div data-testid={disabledElementTestId}>disabled</div>
const containerStyle = {position : "relative"}
const containerClassName = "container"
const buttonClassName = "button"
const buttonId = "buttonId"

describe("render test",()=>{
    let container : HTMLElement;
    beforeEach(()=>{
        container = render(<FlexButton content={contentWithoutJsx}/>).container;
    })
    test("check if renders",()=>{
        expect(container).toHaveTextContent(contentWithoutJsx);
    })
    test("check if tree is correct",()=>{
        expect(container.children).toHaveLength(1);
        expect(container.children[0]).toHaveStyle(containerStyle);
        expect(container.children[0].children).toHaveLength(1);
        expect(container.children[0].children[0]).toHaveTextContent(contentWithoutJsx);
    })
    test("check if button exist",()=>{
        const button = getByRole(container,"button");
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(contentWithoutJsx);
    })
    test("check button exist with id",()=>{
        container = render(<FlexButton content={contentWithoutJsx} buttonProps={{id : buttonId}}/>).container;
        const button = getByRole(container,"button");
        expect(button).toHaveAttribute("id",buttonId);
    })
    describe("test without className",()=>{
        let container : HTMLElement;
        beforeEach(()=>{
            container = render(<FlexButton content={contentWithoutJsx}/>).container;
        })
        test("conatiner should not have className",()=>{
            expect(container.children[0]).not.toHaveClass(containerClassName);
        })
        test("button should not have className",()=>{
            expect(container.children[0].children[0]).not.toHaveClass(buttonClassName);
        })
    })
    describe("test with classNames",()=>{
        let container : HTMLElement;
        beforeEach(()=>{
            container = render(<FlexButton content={contentWithoutJsx} containerClassName={containerClassName} buttonProps={{className : buttonClassName}}/>).container;
        })
        test("conatiner should not have className",()=>{
            expect(container.children[0]).toHaveClass(containerClassName);
        })
        test("button should not have className",()=>{
            expect(container.children[0].children[0]).toHaveClass(buttonClassName);
        })
    })
    describe("test with disabled",()=>{
        test("check if button is not disabled",()=>{
            container = render(<FlexButton content={contentWithoutJsx} buttonProps={{disabled : false}}/>).container;
            expect(container.children[0].children).toHaveLength(1);
            const button = getByRole(container,"button");
            expect(button).not.toBeDisabled();
        })
        test("check if button is disabled",()=>{
            container = render(<FlexButton content={contentWithoutJsx} buttonProps={{disabled : true}}/>).container;
            expect(container.children[0].children).toHaveLength(1);
            const button = getByRole(container,"button");
            expect(button).toBeDisabled();
        })
    })
    describe("test if disabledOverlayElement renders",()=>{
        test("check if disabledOverlayElement doesn't renders",()=>{
            container = render(<FlexButton content={contentWithoutJsx}/>).container;
            expect(container.children[0].children).toHaveLength(1);
            const button = getByRole(container,"button");
            expect(button).not.toBeDisabled();
        })
        test("check if disabledOverlayElement renders",()=>{
            container = render(<FlexButton content={contentWithoutJsx} disabledOverlayElement={disabledOverlayElement}/>).container;
            const button = getByRole(container,"button");
            expect(button).toBeDisabled();
            expect(container.children[0].children[1]).toHaveAttribute("data-testid",disabledElementTestId);
            expect(container.children[0].children[1]).toHaveTextContent(getTextContentOfALabel(disabledOverlayElement));
        })
    })
    test("text if jsx content render correctly",()=>{
        container = render(<FlexButton content={contentWithJsx}/>).container;
        const button = getByRole(container,"button");
        expect(button).toHaveTextContent(getTextContentOfALabel(contentWithJsx));
    })
})
describe("test click events",()=>{
    test("check if click works when not disabled",()=>{
        let click = jest.fn(()=>{
            return "clicked";
        });
        let container = render(<FlexButton content={contentWithoutJsx} buttonProps={{onClick : click}}/>).container;
        const button = getByRole(container,"button");
        button.click();
        expect(click.mock.results).toHaveLength(1);    
    })
    test("check if doesn't click when disabled",()=>{
        let click = jest.fn(()=>{
            return "clicked";
        });
        let container = render(<FlexButton content={contentWithoutJsx} buttonProps={{disabled : true, onClick : click}}/>).container;
        const button = getByRole(container,"button");
        button.click();
        expect(click.mock.results).toHaveLength(0);    
    })
    test("check if doesn't click when disabledOverlayElement",()=>{
        let click = jest.fn(()=>{
            return "clicked";
        });
        let container = render(<FlexButton content={contentWithoutJsx} disabledOverlayElement={disabledOverlayElement} buttonProps={{onClick : click}}/>).container;
        const button = getByRole(container,"button");
        button.click();
        expect(click.mock.results).toHaveLength(0);    
    })
})
