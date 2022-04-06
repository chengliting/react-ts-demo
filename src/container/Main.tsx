import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Home.scss';
import Location from '../component/Location';
interface IProps {
}
interface IState {
    currentIndex: number,
    date: Date
}

export default class Main extends React.Component<IProps, IState>  {
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
        console.log(`name-${name}`)
      }
      switchTab = (name: any) => {
        console.log(`name-${name}`)
      }

    render() {
        return (  
        <div className="App">
            <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            <div><Location parentCallback={this.callback}/></div>
            <div className="main">
            主頁
            </div>
            <div className="nav-bottom-bar">
                <ul>
                    <li>首頁</li>
                    <li>tab</li>
                    {/* <li><Link to="Mine">我的</Link></li> */}
                    <li onClick={()=>this.switchTab('mine')}>我的</li>
                </ul>
            </div>
        </div>)
    }
}

