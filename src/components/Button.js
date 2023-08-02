export default function Button({text,onClick,setModal,modal}){
  return(
    <button type="button" onClick={ () => {modal===false ? setModal(true) :setModal(false)}}>{text}</button>
  )
}