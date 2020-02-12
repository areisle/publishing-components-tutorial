import React from 'react';

import { Button } from '@scope/basic-component-library';

const App = () => {
  return (
    <div className="App">
        <Button
            color='primary'
            onClick={() => alert('monkeys')}
        >
            blargh
        </Button>
    </div>
  );
}

export default App;
