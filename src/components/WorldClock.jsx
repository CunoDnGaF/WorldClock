import ClockForm from "./ClockForm/ClockForm";
import СlockContainer from "./СlockContainer/СlockContainer";
import { useState } from "react";
import uuid from 'react-uuid';

const WorldClock = function() {
    const [ clockData, setClockData ] = useState({name: '', timeZone: '', id: ''});
    const [ clockList, setClockList ] = useState([]);

    function handleChange(e) {
        const { name, value } = e.target;
        
        setClockData({...clockData, [name]: value});
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        
        setClockList([{ ...clockData, id: uuid()}, ...clockList]);
    }

    function handleRemoveClock(id) {

        setClockList(clockList.filter(clock => clock.id !== id));
    }


    return (
        <>
          <ClockForm 
            onChange={handleChange} 
            onSubmit={handleSubmit}
          />
          <СlockContainer clockList={clockList} removeClock={handleRemoveClock} />
        </>
      )
}

export default WorldClock;