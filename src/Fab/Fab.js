import React, { Component } from 'react';
import './Fab.css';
import Courselist from '../Courselist/Courselist';
import Addcourse from '../Forms/Addcourse';




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
                {this.state.display.showList ? <Courselist></Courselist> : null}
                {this.state.display.showMenu ? <Addcourse handler={this.swicthToListHandler}></Addcourse> : null}

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
