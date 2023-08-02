import { useState } from "react"

function AddWrite({formData,setFormData,formPublish}){
  return(
    <div id="reserved">
      <p>예약하기</p>
{/*     <ul className="checked">
      <li></li>
      <li>
        <label htmlFor="cut">헤어 컷</label>
        <input type="checkbox"></input>
      </li>
      <li>
        <label htmlFor="color">컬러</label>
        <input type="checkbox"></input>
      </li>
      <li>
        <label htmlFor="curl">펌</label>
        <input type="checkbox"></input>
      </li>
      <li>
        <label htmlFor="clinic">클리닉</label>
        <input type="checkbox"></input>
      </li>
    </ul> */}
    <ul className="myinfo">
      <li>
        <label htmlFor="userName">성함 : </label>
        <input type='text'
        onChange={e => {setFormData({...formData,myName:e.target.value})}}/> 
      </li>
      <li>
        <label htmlFor="userTel">전화번호 : </label>
        <input type='text'
        onChange={e => {setFormData({...formData,myTel:e.target.value})}}/> 
      </li>
      <li>
          <label htmlFor="userMemo">기타설명</label>
          <textarea 
          onChange={e => {setFormData({...formData,aptNotes:e.target.value})}}>어떤 시술</textarea>
        </li>
    </ul>
    <p><input type="submit" onClick={formPublish} /></p>
    </div>
  )
}

export default function Reservation({lastId,onSendAppoint}){
  const clearData = {
    "id": "",
    "myName": "",
    "myTel" : "",
    "aptNotes": "",
    "aptDate": ""
  }
  const [formData,setFormData] = useState(clearData);

  function formPublish(){
    const appointInfo = {
      id : lastId +1,
      myName: formData.myName,
      myTel : formData.myTel,
      aptNotes: formData.aptNotes,
      aptDate: formData.aptDate + '' + formData.aptTime
    }
    onSendAppoint(appointInfo);
    setFormData(clearData);
  }
  return(
    <AddWrite 
    formPublish = {formPublish}
    formData = {formData}
    setFormData={setFormData}/>
  )
}