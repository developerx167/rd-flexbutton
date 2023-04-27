FlexButton Component
========================

The FlexButton Component is a customizable and reusable button component for React applications. It can be easily integrated into any project, providing a flexible and user-friendly interface.

Installation
------------

To use the Red FlexButton Component in your React project, you can install it via npm:


```
npm install rd-flexbutton
```

Usage
-----

To use the Red FlexButton Component in your React application, simply import the component and pass in the required props:

```
import { FlexButton } from 'rd-flexbutton'

function MyComponent() { 
      return ( 
            <FlexButton        
                  label={"my button"}
                  buttonProps={{
                        onClick : ()=>window.alert("button"),
                        disabled : false,
                        className : "button"
                  }}
                  <!-- disabledElement={<div>disabled</div>-->
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
    
*   `disabledElement` (optional): The element to be displayed when the button is disabled. If this prop is provided, the button is automatically considered as disabled.
    
*   `containerClassName` (optional): The class name for the container element of the button.


Contribution
------------

Contributions are welcome and appreciated! If you find any issues or have suggestions for improvement, please submit a pull request or create an issue on the [GitHub repository](https://github.com/yourusername/rd-flexbutton/issues).

License
-------

The FlexButton Component is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

Thanks
------

Thank you for using the FlexButton Component! We hope it helps make your React development easier and more efficient.