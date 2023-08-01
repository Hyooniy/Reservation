export default function AddAppointment(){
  return(
    <div id="appoint">
      <ul>        
        <li>
          <label htmlFor="reservTime">예약 가능한 시간 </label>
          <input type="date"></input>
        </li>
        <li>
          <label htmlFor="reservTime">예약 가능한 날짜 </label>
          <input type="time"></input>
        </li>
      </ul>
    </div>
  )
}