# Creating A Component
1. open the repo
   ```bash
   cd my-component-library
   code .
   ```
2. create a folder for the component
   ```bash
   mkdir ./src/components/Button
   ```
3. create component files
   ```bash
   touch ./src/components/index.tsx
   touch ./src/components/Button.tsx
   touch ./src/components/Button.scss
   touch ./src/components/Button.notes.md
   touch ./src/components/Button.stories.tsx
   ```
4. add Button component code
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
5. add content to `index.tsx`
   ```tsx
   import { Button } from './Button';

   export default Button;
   ```
6. add styles files
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
7. add markdown description
   ```markdown
   <!-- Button.notes.nd -->
   # Button Component
   reusable button component

   ## Requirements
   <!-- todo -->
     
   ## Usage
   <!-- todo -->
   ```
8. add stories
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