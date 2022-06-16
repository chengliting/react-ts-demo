import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Home.scss';
import Location from '../component/Location';
import NavBottomBar from '../component/NavBottomBar';
interface IProps {
}
interface IState {
    currentIndex: number,
    date: Date
}

export default class Home extends React.Component<IProps, IState>  {
    timerID: number;
    constructor(props:IProps) {
        super(props);
        this.timerID = 0;
        this.state = {
            currentIndex:0,
            date: new Date()
        };
      }
    componentDidMount() {
        console.log('lifecycle---->>>componentDidMount')
        this.timerID = window.setInterval(
            () => this.tick(),
            1000
          );
        //   this.setLoaction();
    }
  
    componentWillUnmount() {
        console.log('lifecycle---->>>componentWillUnmount')
        clearInterval(this.timerID);
    }

    tick = () =>{
        this.setState({
            date: new Date()
        });
    } 
     callback = (name: any) => {
        console.log(`name4-${name}`)
      }
      switchTab = (name: any) => {
        console.log(`name3-${name}`)
      }

    render() {
        return (  
        <div className="App">
            <div className="main">
            <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            主頁
            </div>
            <NavBottomBar />
        </div>)
    }
}

