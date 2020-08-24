import React from 'react';
import lottie from 'lottie-web';
import animationData from './data.json';
import './App.css';

function App() {
  const animationRef = React.useRef(null);

  React.useEffect(() => {
    lottie.loadAnimation({
      container: animationRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData,
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div ref={animationRef} />
      </header>
    </div>
  );
}

export default App;
