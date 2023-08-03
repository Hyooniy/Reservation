import { useCallback, useEffect, useState } from 'react';
import './App.css';
import AddAppointment from './components/AddAppointment';
import Button from './components/Button';
import DesignInfo from './components/DesignInfo';
import ReservCheck from './components/ReservCheck';

export default function App() {
  const [list,setList] = useState([]);
  const [modal,setModal] = useState(false);
  const [liist,setLiist] = useState([]);

  //data.json
  const fetchData = useCallback(() => {
    fetch('./data.json')
    .then(response => response.json())
    .then(data => setList(data))
  },[])
  useEffect(fetchData,[fetchData]);
  

  //data01.json
  const fetchData01 = useCallback(() => {
    fetch('./data01.json')
    .then(response01 => response01.json())
    .then(data => setLiist(data))
  },[])
  useEffect(fetchData01,[fetchData01]);

  return (
  <article>
    <h1>차홍룸 신촌점</h1>
    <dl>
      <dt>서울 서대문구 신촌로 99 엘리트빌딩 4층</dt>
      <dd>02-392-3656</dd>
    </dl>
    <div className='btn'>
    <Button text='예약신청'/>
    <Button text='예약확인' setModal={setModal} modal={modal}/>
    {modal === true ? <ReservCheck
    key={liist.id} infos={liist}  /> : null}
    </div>
    <AddAppointment />
    <div id='list'>
      <ul>
        {list.map(item => (
          <DesignInfo key={item.id} info={item}
          liist={liist} setLiist={setLiist}
          />
        ))}
        
      </ul>
    </div>
  </article>
  );
}


