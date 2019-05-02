import React from 'react';

const Page2 = ({ onRouteChange }) => {
  return (
    <div className="App">
      Hello from Page2
      <button onClick={() => onRouteChange('page1')}>Page1</button>
      <button onClick={() => onRouteChange('page3')}>Page3</button>
    </div>
  )
}

export default Page2;