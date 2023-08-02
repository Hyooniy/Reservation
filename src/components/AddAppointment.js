export default function AddAppointment({formData,setFormData}){
  return(
    <div id="appoint">
      <ul>        
        <li>
          <label htmlFor="reservTime">예약 가능한 시간 </label>
          <input type="date"
          onChange={e => {setFormData({...formData,aptDate:e.target.value})}}></input>
        </li>
        <li>
          <label htmlFor="reservTime">예약 가능한 날짜 </label>
          <input type="time"
          onChange={e => {setFormData({...formData,aptTime:e.target.value})}}
          ></input>
        </li>
      </ul>
    </div>
  )
}