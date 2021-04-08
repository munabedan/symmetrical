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
                {
                    console.log("evaluate show course list")
                }
                {this.state.display.showList ? <Courselist></Courselist> : null}
                
                {this.state.display.showMenu ? <Addcourse handler={this.swicthToListHandler}></Addcourse> : null}



                <div className="fab-wrapper">
                    <input id="fabCheckbox" type="checkbox" className="fab-checkbox" />
                    <label className="fab" htmlFor="fabCheckbox">
                        <span className="fab-dots fab-dots-1"></span>
                        <span className="fab-dots fab-dots-2"></span>
                        <span className="fab-dots fab-dots-3"></span>
                    </label>
                    <div className="fab-wheel">


                        <button className="fab-action fab-action-1" id="fab-action-1"
                            onClick={
                                this.switchToMenuHandler
                            }
                        >
                            <i className="fas fa-plus"></i>
                        </button>


                        <button className="fab-action fab-action-2">
                            <i className="fas fa-book"></i>
                        </button>
                        <button className="fab-action fab-action-3">
                            <i className="fas fa-address-book"></i>
                        </button>

                        <button className="fab-action fab-action-4">
                            <i className="fas fa-info"></i>
                        </button>
                    </div>
                </div>
            </div>



        );

    };
};

export default Fab;
