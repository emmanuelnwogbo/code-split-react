import React from 'react';

const Page3 = ({ onRouteChange }) => {
  return (
    <div className="App">
      Hello from Page3
      <button onClick={() => onRouteChange('page1')}>Page1</button>
      <button onClick={() => onRouteChange('page2')}>Page2</button>
    </div>
  )
}

export default Page3;