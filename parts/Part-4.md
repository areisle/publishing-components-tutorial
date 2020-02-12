# Using the published component
to test out using our published component,
we'll need to create another app to install it install

### create an app
```bash
npx create-react-app usage --template typescript
```

### remove unnecessary files
since this app is only for testing our components,
there's still a number of files that would be necessary
for a regular app that we won't require

### add `.npmrc` to app

### install you component package
```bash
npm i -S @scope/basic-component-library
```

### use component in `./App.tsx`
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
now try adding the `color` prop to your component
and (if you're using vscode) you should 
see all the options for `color` due to having the
declaration files pop up