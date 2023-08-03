
function Check({infos}){
  return(
    <>
    <dl>
      <dt>예약 내역</dt>
      <dd>예약자 성함 : {infos.myName}</dd>
      <dd>예약 날짜 : </dd>
      <dd>요청 사항 : </dd>
    </dl>
    <p><button type="button" >예약취소</button></p>
    </>
  )
}

export default function ReservCheck(){

  return(
    <div id="check">
      <h1>예약확인</h1>
    <ul>
      <li>
        <label htmlFor="Name">성함 : </label>
        <input type="text"></input>
      </li>
      <li>
        <label htmlFor="userTel">전화번호 : </label>
        <input type='text'/> 
      </li>
    </ul>
    <p><button type="button">예약확인</button></p>
    <Check />
    </div>
  )
}