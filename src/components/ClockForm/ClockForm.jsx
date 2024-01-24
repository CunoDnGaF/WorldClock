const ClockForm = function({onChange, onSubmit}) {

    return (
        <form 
          name='clock-form'
          className="clock-form"
          onSubmit={onSubmit}
        >
          <div className="input-container">
            <label htmlFor="name" className="input-title">Название</label>
            <input 
            id='name' name='name' 
            type="text"
            onChange={onChange}
            className="clock-form-input" 
          />
          </div>
          <div className="input-container">
            <label htmlFor="time-zone" className="input-title">Временная зона</label>
            <select 
              id='time-zone' name='timeZone'
              onChange={onChange}
              className="clock-form-input" 
            >
                <option value="0">0:00</option>
                <option value="-12">-12:00</option>
                <option value="-11">-11:00</option>
                <option value="-10">-10:00</option>
                <option value="-9">-9:00</option>
                <option value="-8">-8:00</option>
                <option value="-7">-7:00</option>
                <option value="-6">-6:00</option>
                <option value="-5">-5:00</option>
                <option value="-4">-4:00</option>
                <option value="-3">-3:00</option>
                <option value="-2">-2:00</option>
                <option value="-1">-1:00</option>
                <option value="+1">+1:00</option>
                <option value="+2">+2:00</option>
                <option value="+3">+3:00</option>
                <option value="+4">+4:00</option>
                <option value="+5">+5:00</option>
                <option value="+6">+6:00</option>
                <option value="+7">+7:00</option>
                <option value="+8">+8:00</option>
                <option value="+9">+9:00</option>
                <option value="+10">+10:00</option>
                <option value="+11">+11:00</option>
                <option value="+12">+12:00</option>
            </select>
          </div>
          <button className="form-button">Добавить</button>
        </form>
      )
}

export default ClockForm;