import { useCallback, useEffect, useState } from 'react';
import './App.css';
import AddAppointment from './components/AddAppointment';
import Button from './components/Button';
import DesignInfo from './components/DesignInfo';
import Reservation from './components/Reservation';
import ReservCheck from './components/ReservCheck';

export default function App() {
  const [list,setList] = useState([]);

  const fetchData = useCallback(() => {
    fetch('./data.json')
    .then(response => response.json())
    .then(data => setList(data))
  },[])
  useEffect(fetchData,[fetchData]);
  return (
  <article>
    <h1>차홍룸 신촌점</h1>
    <dl>
      <dt>서울 서대문구 신촌로 99 엘리트빌딩 4층</dt>
      <dd>02-392-3656</dd>
    </dl>
    <div className='btn'>
    <Button text='예약신청'/>
    <Button text='예약확인'/>
    </div>
    <AddAppointment />
    <div id='list'>
      <ul>
        {list.map(item => (
          <DesignInfo key={item.id} info={item}/>
        ))}
        
      </ul>
    </div>

    <Reservation />
    <ReservCheck />
  </article>
  );
}


