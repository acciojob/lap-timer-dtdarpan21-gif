
import React from "react";
import './../styles/App.css';

const App = () => {
  const[time, setTime] = useState(0);
  const[laps, setLaps] = useState([]);
  const timerRef = useRef(null);

  const startTimer = () => {
    if(timerRef.current !== null){
      return;

    }

    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime +10);

    },10);
  };

  const stopTimer = () => {
    clearInterval (timerRef.current);
    timerRef.current = null;

  };

  const recordLap = () => {
    const recordLap = () => {
    setLaps((prevLaps) => [...prevLaps, time]);
};

};

  const resetTimer = () => {
    stopTimer();
    setTime(0);
    setLaps([]);

  };
  useEffect(() =>{
    return () => {
      clearInterval(timerRef.current);

    };
  },[]);

  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds/ 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const centiseconds = Math.floor((milliseconds % 1000) / 10);  
    const pad = (value) => String(value).padStart(2, "0");
    return `${pad(minutes)}:${pad(seconds)}:${pad(centiseconds)}`;
  }
  return (
    <div className= "container">
      <h1> Lap Timer</h1>
      <h2 className="timer">
        {formatTime(time)}

      </h2>
      <div className = "buttons">
        <button onClick ={startTimer}>start</button>
        <button onClick ={stopTimer}>stop</button>
        <button onClick ={recordLap}>lap</button>
        <button onClick ={resetTimer}>reset</button>
      </div>
      
<div className="laps">
    <h2>Lap Times</h2>

    {laps.length > 0 ? (
        laps.map((lap, index) => (
            <div className="lap-item" key={index}>
                <span>Lap {index + 1}</span>
                <span>{formatTime(lap)}</span>
            </div>
        ))
    ) : (
        <p>No laps recorded yet.</p>
    )}
</div>

      
        
    </div>
  );
}

export default App
