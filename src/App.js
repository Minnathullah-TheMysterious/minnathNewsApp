import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  constructor(){
    super()
    this.state={
      mode:'light',
      text:'black',
    }
  }

  handleToggleMode=()=>{
    console.log('toggleMode')
    if(this.state.mode === 'light'){
      this.setState({
        mode: 'dark',
        text:'white',
      })
      // document.body.style.backgroundColor = 'black'
      // document.body.style.color = 'white'
      // for(let i = 0; i<39; i++){
      //   document.body.getElementsByClassName('card')[i].style.backgroundColor='black'
      // }
    }else{
      this.setState({
        mode: 'light',
        text:'black'
      })
      // document.body.style.backgroundColor = 'white'
      // document.body.style.color = 'black'
      // for(let i = 0; i<39; i++){
      //   document.body.getElementsByClassName('card')[i].style.backgroundColor='white'
      // }
    }
  }


  render() {
    return (
      <>
        <Router>
          <Navbar title="NewsMonkey" mode={this.state.mode} toggleMode={this.handleToggleMode} text={this.state.text}/>
          <Routes>
            <Route exact path='/' element={<News pageSize={6} country="in" category="general" apiKey="45890530df224bbab7fded0071ee7eac" key="general"/>}></Route> //a unique key is required for remounting the componenet
            <Route exact path='/business' element={<News pageSize={6} country="in" category="business" apiKey="45890530df224bbab7fded0071ee7eac" key="business"/>}></Route>
            <Route exact path='/entertainment' element={<News pageSize={6} country="in" category="entertainment" apiKey="45890530df224bbab7fded0071ee7eac" key="entertainment"/>}></Route>
            <Route exact path='/health' element={<News pageSize={6} country="in" category="health" apiKey="45890530df224bbab7fded0071ee7eac" key="health"/>}></Route>
            <Route exact path='/science' element={<News pageSize={6} country="in" category="science" apiKey="45890530df224bbab7fded0071ee7eac" key="science"/>}></Route>
            <Route exact path='/sports' element={<News pageSize={6} country="in" category="sports" apiKey="45890530df224bbab7fded0071ee7eac" key="sports"/>}></Route>
            <Route exact path='/technology' element={<News pageSize={6} country="in" category="technology" apiKey="45890530df224bbab7fded0071ee7eac" key="technology"/>}></Route>
          </Routes>
        </Router>
      </>
    )
  }
}
