import React, { Component } from 'react';
interface IProps {
}
interface IState {
    currentIndex: number
}
// 1.創建props和state的interface
class NavigationBar extends Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
        this.state = {
            currentIndex: 0
        };
    }

    toggleItem = (index: number) => {
        // 切換導航tab
        return index === this.state.currentIndex ? 'active' : '';
    }
    render() {
        return (
        <div className="navContainer">
            <ul className="navBar clearfix">
                {
                    React.Children.map(this.props.children,(element,index) => {
                        return (<li onClick={ () => { this.setState({ currentIndex: index }) } } className={ this.toggleItem(index) }>{ element }</li>)
                    })
                }
            </ul>
        </div>
    )
    }
}
export default NavigationBar;