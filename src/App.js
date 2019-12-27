import React from 'react';
import logo from './logo.svg';
import './App.css';

// 修正1: コンストラクタを作りたいので、関数コンポーネントからクラスに修正
class App extends React.Component {
//function App() {

  // 修正2: コンストラクタを追加
  constructor(props){
    super(props);
    this.state = {};
    // バックエンドのAPIを呼び出し、this.state.nameに結果を保管.
    // 呼び出し先はローカルとサーバ上で可変にしたいので環境変数からとる
    fetch(process.env.REACT_APP_BACKEND_URL + "/api/user")
      .then(response => response.json())
      .then(json =>  this.setState({name : json.name}));
  }

// 修正3: renderメソッドにする
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
           {/* 修正4: API呼び出し結果を反映 */}
          <p>
            Hi, {this.state.name}. Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
