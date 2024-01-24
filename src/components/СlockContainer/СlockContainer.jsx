import Сlock from "./Clock/Сlock";

const СlockContainer = function({clockList, removeClock}) {
    
    return (
        <div className="clock-container">
          {clockList.map(clock => <Сlock 
              key={clock.id} 
              clock={clock}
              removeClock={removeClock}
          />)}
        </div>
      )
}

export default СlockContainer;