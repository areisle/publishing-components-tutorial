# Creating A Component
for our component, we'll be creating a simple
styled button.

### open the repo
```bash
cd my-component-library
code .
```

### create a folder for the component
```bash
mkdir ./src/components/Button
```

### create component files
each component generally has quite a few files.
normally this would also include testing files,
but that won't be covered in this tutorial.

```bash
touch ./src/components/index.tsx
touch ./src/components/Button.tsx
touch ./src/components/Button.scss
touch ./src/components/Button.notes.md
touch ./src/components/Button.stories.tsx
```

### add Button component code
the button will support 3 different colors: 
* primary (blue)
* secondary (red)
* and default (grey)

 ```tsx
 // Button.tsx
 import './Button.scss';

 import React from 'react';

 interface ButtonProps {
     /**
      * the label/title for the button
      */
     children: string;
     /**
      * click handler for the button
      */
     onClick?: () => void;
     /**
      * The color of the component.
      * @default 'default'
      */
     color?: 'primary' | 'secondary' | 'default'
 }

 /**
  * reusable button component
  */
 function Button(props: ButtonProps) {
     const { 
         color = 'default',
         children, 
         onClick,
      } = props;

      return (
          <button
              className={`button button--${color}`}
              onClick={onClick}
          >
              {children}
          </button>  
      );
 };

 export { Button };
 ```

### add content to `index.tsx`
 ```tsx
 import { Button } from './Button';

 export default Button;
 ```

### add styles files
 ```scss
  // Button.scss
  .button {
     border: none;
     border-radius: 5px;
     color: white;
     outline: none;
     padding: 10px;
     text-transform: uppercase;

     &--default {
         background-color: grey;

         &:hover {
             background-color: darken(grey, 10);
         }
     }

     &--primary {
         background-color: darkblue;

         &:hover {
             background-color: darken(darkblue, 10);
         }
     }

     &--secondary {
         background-color: darkred;

         &:hover {
             background-color: darken(darkred, 10);
         }
     }
 }
  ```
  
### add markdown description
this is what will be included in our stories
for the `notes` addon for storybook
 ```markdown
 <!-- Button.notes.nd -->
 # Button Component
 reusable button component

 ## Requirements
 <!-- todo -->
   
 ## Usage
 <!-- todo -->
 ```

### add stories
these are examples of using the component
that can be viewed / interacted with using storybook
```tsx
// Button.stories.tsx
import React from 'react';
import { action } from '@storybook/addon-actions';

import { Button } from './Button';
import markdown from './Button.notes.md';

export default {
    title: 'Button',
    component: 'Button',
    parameters: {
        notes: { markdown },
    }
}

export const Default = () => (
    <Button
        onClick={action('onClick')}
    >
        default button
    </Button>
)

export const Primary = () => (
    <Button
        color='primary'
        onClick={action('onClick')}
    >
        primary button
    </Button>
)

export const Secondary = () => (
    <Button
        color='secondary'
        onClick={action('onClick')}
    >
        secondary button
    </Button>
)

export const Stressed = () => (
    <Button
        onClick={action('onClick')}
    >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum tempore amet suscipit tempora dicta consequatur necessitatibus
    </Button>
)
```