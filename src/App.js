import React, { useEffect, useState } from 'react';

function App() {
  const [duration, setDuration] = useState(5); 
  const [secondsLeft, setSecondsLeft] = useState(duration);

  
  const handleChange = (e) => {
    setDuration(e.target.value);
    setSecondsLeft(e.target.value);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((v) => {
        if (v <= 1) {
          clearInterval(timer)
          return 0
        }
        return v - 1 
      })
    }, 1000)
    return () => clearInterval(timer);
  }, [duration])

  return (
    <div className="vstack gap-2">
      <input
        type="number"
        placeholder="timer..."
        onChange={handleChange}
        value={duration}
      />
      <p>Décompte : {secondsLeft}</p>
    </div>
  );
}

export default App;
