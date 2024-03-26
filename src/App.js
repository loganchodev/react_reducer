import React, { useReducer, useState } from 'react'; // React와 useState, useReducer 훅을 임포트합니다.

export default function App() {
  const [number, setNumber] = useState(1); // 숫자 입력을 위한 상태, 초기값은 1
  
  // countReducer 함수 정의, 현재 카운트 값과 액션을 받아 새 카운트 값을 반환
  function countReducer(oldCount, action){
    if(action.type === 'UP'){ // UP 액션 시, 카운트 값을 증가
      return oldCount + action.number;
    }else if(action.type === 'DOWN'){ // DOWN 액션 시, 카운트 값을 감소
      return oldCount - action.number;
    }else if(action.type === 'RESET'){ // RESET 액션 시, 카운트 값을 0으로 리셋
      return 0;
    }
  }
  const [count, countDispatch ] = useReducer(countReducer, 0); // useReducer 훅을 사용하여 카운트 상태 관리, 초기값은 0
  
  // DOWN 액션을 디스패치하는 함수
  function down(){
    countDispatch({ type: 'DOWN', number: number });
  }
  
  // RESET 액션을 디스패치하는 함수
  function reset(){
    countDispatch({ type: 'RESET', number: number });
  }
  
  // UP 액션을 디스패치하는 함수
  function up(){
    countDispatch({ type: 'UP', number: number });
  }

  // 입력 필드에서 숫자를 변경하는 함수
  function changeNumber(event){
    setNumber(Number(event.target.value)); // 입력된 값으로 number 상태를 업데이트
  }

  // 컴포넌트 렌더링 부분
  return(
    <div>
      <input type="button" value="-" onClick ={down}/> {/* 감소 버튼 */}
      <input type="button" value="0" onClick ={reset}/> {/* 리셋 버튼 */}
      <input type="button" value="+" onClick ={up}/> {/* 증가 버튼 */}
      <input type="text" value={number} onChange={changeNumber}/> {/* 사용자 입력을 받는 필드, number 상태와 바인딩 */}
      <span>{count}</span> {/* 현재 카운트 값을 표시 */}
    </div>
  );
}
