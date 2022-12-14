import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

const App  = () => {
  return (
    <div className="App">
      <header className="App-header">
      <input type="image" src="./kki.jpeg" className='imgSize' alt="제출버튼"/>
        <p>
          반갑습니다
        </p> 
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          시작하기
        </a>
      </header>
    </div>
  )
}

export default App;
