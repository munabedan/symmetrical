import React, { Component } from 'react';
import './Fab.css';

class List extends React.Component {
    render() {
        return (

            <div>
                <h6>Am the list</h6>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
            </div>



        );
    }
};

class Menu extends React.Component {
    render() {
        return (
            <div>
                <h6>Am the menu</h6>
                <button
                    onClick={this.props.handler}
                >click me</button>
            </div>



        );
    }
};


class Fab extends Component {
    state = {
        display:
        {
            showMenu: false,
            showList: true
        }


    }
    constructor(props) {
        super(props)
        this.swicthToListHandler = this.swicthToListHandler.bind(this)
    }

    switchToMenuHandler = () => {
        this.setState({
            display: {
                showMenu: true,
                showList: false
            }
        })
    }

    swicthToListHandler() {
        this.setState({
            display: {
                showMenu: false,
                showList: true
            }

        })

    }

    render() {
        console.log(this.state)
        return (
            <div>
                {this.state.display.showList ? <List></List> : null}
                {this.state.display.showMenu ? <Menu handler={this.swicthToListHandler}></Menu> : null}

                <button
                    onClick={
                        this.switchToMenuHandler
                    }
                >
                    plus button
                </button>

            </div>

        );

    };
};

export default Fab;
