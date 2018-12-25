import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import StudentLayout from './pages/student/StudentLayout'
import './App.css';
// 根组件
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <StudentLayout/>
        <Footer/>
      </div>
    );
  }
}

export default App;
