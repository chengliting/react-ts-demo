import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Home.scss';
import Location from '../component/Location';
import NavBottomBar from '../component/NavBottomBar';
// import { Button } from 'antd';
import { AndroidFilled, CodeFilled } from '@ant-design/icons';
interface IProps {
}
interface IState {
    currentIndex: number,
    date: Date,
    imgList: Array<any>
}

export default class Home extends React.Component<IProps, IState>  {
    timerID: number;
    constructor(props:IProps) {
        super(props);
        this.timerID = 0;
        this.state = {
            currentIndex:0,
            date: new Date(),
            imgList: [1,2,3,4,5]
        };
      }
    componentDidMount() {
        // console.log('lifecycle---->>>componentDidMount')
        this.timerID = window.setInterval(
            () => this.tick(),
            1000
          );
        //   this.setLoaction();
    }
  
    componentWillUnmount() {
        // console.log('lifecycle---->>>componentWillUnmount')
        clearInterval(this.timerID);
    }

    tick = () =>{
        this.setState({
            date: new Date()
        });
    } 
    handleModuleItem = (item:any) =>{
        console.log('goooo',item);
    }

    render() {
        const { imgList } =this.state;
        return (  
        <div className="App">
            <div className="main">
                <div className='home-top'>top</div>
                <div className='home-content'>
                    <div className='home-banner'>手寫滾動banner{this.state.date.toLocaleTimeString()}</div>
                    <div className='home-module-box'>
                        {
                           [1,2,3,4,5,6,7,8,9,0].map((item, index)=>{
                                return <div className='module-item' key={index} onClick={()=>{this.handleModuleItem(item)}}>
                                    { index===0? <CodeFilled />:<AndroidFilled /> }
                                    <p>{index===0?'code':`module${index}`}{}</p>
                                </div>
                            })
                        }
                    </div>
                    <div className='home-img-list'>
                        <div className="img-list">
                         {
                            imgList.map((item, index)=>{
                                return <div  key={index}></div>
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
            <NavBottomBar />
        </div>)
    }
}

