/* eslint-disable*/
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  const [따봉, 따봉변경] = useState(0);

  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            ❤️
          </span>
          {따봉}
        </h4>
        <p>10월 26일 발행</p>
        <button
          onClick={() => {
            let copy = [...글제목];
            copy[0] = "여자 코트 추천";
            // 글제목[0] = '여자코트 추천';
            글제목변경(copy);
          }}
        >
          on
        </button>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>10월 26일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {글제목[2]}
        </h4>
        <p>10월 26일 발행</p>
      </div>
      {
      글제목.map(function (a,i) {
        return (
          <div className="list">
            <h4>{글제목[i]}</h4>
            <p>10월 26일 발행</p>
          </div>
        );
      })
      }

      {modal === true ? <Modal></Modal> : <></>}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <div>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </div>
  );
}

export default App;
