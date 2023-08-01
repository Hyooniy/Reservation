export default function Reservation(){
  return(
    <div id="reserved">
    <ul className="checked">
      <li><p>시술메뉴 선택</p></li>
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
    </ul>
    <ul className="myinfo">
      <li>
        <label htmlFor="userName">성함 : </label>
        <input type='text'/> 
      </li>
      <li>
        <label htmlFor="userTel">전화번호 : </label>
        <input type='text'/> 
      </li>
      <li>
          <label htmlFor="userMemo">기타설명</label>
          <textarea></textarea>
        </li>
    </ul>
    <p><button type="button">신청하기</button></p>
    </div>
  )
}