import { useState, useEffect } from "react";

const Сlock = function({clock, removeClock}) {
    const {name, timeZone, id} = clock;

    function getTime(timeZone) {
      const time = new Date();
      time.setUTCHours(time.getUTCHours()-3);
      const variation = timeZone;
      time.setUTCHours(time.getUTCHours() + (+variation));

      return time.toLocaleTimeString();
    }

    const [time, setTime] = useState(getTime(timeZone));

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(getTime(timeZone));
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    return (
        <div className="clock">
          <h2 className="clock-title">{name}</h2>
          <span className="time">{time}</span>
          <button className="remove-clock" onClick={() => removeClock(id)}>Удалить</button>
        </div>
      )
}

export default Сlock;