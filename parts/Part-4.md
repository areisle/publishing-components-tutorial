# Using the published component
1. create an app to install the component in
   ```bash
   npx create-react-app usage --template typescript
   ```
2. remove unnecessary files
3. add `.npmrc` to app
4. install you component package
   ```bash
   npm i -S @scope/basic-component-library
   ```
5. use component in `./App.tsx`
   ```tsx
   // ./App.tsx
   import React from 'react';

   import { Button } from '@scope/basic-component-library';

   const App = () => {
     return (
       <div className="App">
           <Button>blargh</Button>
       </div>
     );
   }

   export default App;
   ```