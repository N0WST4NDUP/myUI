import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [imageURL, setImageURL] = useState("https://lh3.googleusercontent.com/d/17MNJDm6_HW7XEdcwavNQRkBXw6PACVU-");
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length < 3 ? prev + "." : "");
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo"
              style={{
                backgroundImage: `url(${imageURL})`
              }}/>
        <p>
          페이지 공사중{dots}
        </p>
      </header>
    </div>
  );
}

export default App;
