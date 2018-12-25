import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import TopNav from './components/TopNav'
// 页面
import StudentLayout from './pages/student/StudentLayout'
import TeacherLayout from './pages/teacher/TeacherLayout'
import CarLayout from './pages/car/CarLayout'
import CourseLayout from './pages/course/CourseLayout'
import DepartmentLayout from './pages/department/DepartmentLayout'
import GoodsLayout from './pages/goods/GoodsLayout'
import MeetingRoomLayout from './pages/meetingRoom/MeetingRoomLayout'

import './App.css';
// 根组件
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <BrowserRouter>
          <div className="container">
            <div className='left'>
              <TopNav/>
            </div>
            <div className='right'>
              <Route exact path="/student" component={StudentLayout} />
              <Route exact path="/teacher" component={TeacherLayout} />
              <Route exact path="/car" component={CarLayout} />
              <Route exact path="/course" component={CourseLayout} />
              <Route exact path="/department" component={DepartmentLayout} />
              <Route exact path="/goods" component={GoodsLayout} />
              <Route exact path="/mr" component={MeetingRoomLayout} />
            </div>
          </div>
          </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}

export default App;
