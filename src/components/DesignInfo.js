import Reservation from "./Reservation"
export default function DesignInfo({info,onClick,liist,setLiist}){
  return(
  <figure>
      <img src="./images/man1.jpg" alt={info.designer}/>
      <figcaption>
        <dl>
          <dt>{info.designer}</dt>
          <dd>{info.aptNotes}</dd>
          <dd>review {info.review}</dd>
          <dd><button type="button">예약하기</button></dd>
        </dl>
        {/* <Reservation 
          lastId = {liist.reduce((max,item) => Number(item.id) > max ? Number(item.id) : max,0)}
          onSendAppoint = {myappoint => setLiist=([...liist,myappoint])} /> */}
      </figcaption>
    </figure>
  )
}