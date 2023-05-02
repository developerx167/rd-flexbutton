FlexButton - A Flexible and Unstyled Button Component for React
========================

FlexButton is a highly flexible and unstyled button component for React that allows you to create custom buttons with ease. With its simple design, FlexButton can adapt to various use cases and design needs, making it a perfect choice for any project that requires customizable buttons.

Installation
------------

To use the Red FlexButton Component in your React project, you can install it via npm:


```
npm install rd-flexbutton
```

Usage
-----

To use the Red FlexButton Component in your React application, simply import the component and pass in the required props:

```js
import FlexButton from 'rd-flexbutton'

function MyComponent() { 
      return ( 
            <FlexButton        
                  label={"my button"}
                  buttonProps={{
                        onClick : ()=>window.alert("button"),
                        disabled : false,
                        className : "button"
                  }}
                  <!-- disabledOverlayElement={<div>disabled</div>-->
                  containerClassName='container'
                  />
            );
} 
```

Props
-----

The FlexButton Component supports the following props:

*   `content` (required): The content or text of the button.
    
*   `buttonProps` (optional): It is the object of default HTML button attributes, such as `onClick`, `disabled`, and `className`. The type of this prop is `React.ButtonHTMLAttributes<HTMLButtonElement> | undefined`.
    
*   `disabledOverlayElement` (optional): The element to be displayed when the button is disabled. If this prop is provided, the button is automatically considered as disabled.
    
*   `containerClassName` (optional): The class name for the container element of the button.


Contribution
------------

Contributions are welcome and appreciated! If you find any issues or have suggestions for improvement, please submit a pull request or create an issue on the [GitHub repository](https://github.com/developerx167/rd-flexbutton/issues).

License
-------

The FlexButton Component is open source and available under the [MIT License](https://github.com/developerx167/rd-flexbutton/blob/main/LICENSE).

Thanks
------

Thank you for using the FlexButton Component! We hope it helps make your React development easier and more efficient.