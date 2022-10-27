/* eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const post = '강남 우동 맛집';
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동맛집','파이썬독학']);
  const [따봉,따봉변경] = useState(0);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);


  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
        </div>
        {
      글제목.map(function (data,i) {
        return (
          <div className="list" key={i}>
            <h4 onClick={()=>{setModal(!modal); setTitle(i)}}>{글제목[i]}
              <span onClick={()=>{따봉변경(따봉+1)}}>❤️</span>{따봉}</h4>
            <p>10월 26일 발행</p>
          </div>
        );
      })
      }
        {
          modal === true ? <Modal color={'pink'} title={title} 글제목={글제목} 글제목변경={글제목변경} /> : <></>
        }
      </div>
  );
}

function Modal(props){
  return(
    <div className="modal" style={{background:props.color}}>
    <div>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{
        let 글제목2 = [...props.글제목];
        const array = ['여자 코트 추천','홍대 우동맛집','자바독학'];
        글제목2[props.title] = array[props.title] 
        props.글제목변경(글제목2);
      }}>글수정</button>
    </div>
    </div>
  )
}

export default App;
