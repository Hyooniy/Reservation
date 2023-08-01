
export default function DesignInfo({info}){
  return(
  <figure>
      <img src="./images/man1.jpg" alt={info.designer}/>
      <figcaption>
        <dl>
          <dt>{info.designer}</dt>
          <dd>{info.aptNotes}</dd>
          <dd>review {info.review}</dd>
          <dd><button type="button">에약하기</button></dd>
        </dl>
      </figcaption>
    </figure>
  )
}