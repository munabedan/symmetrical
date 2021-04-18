import React from 'react';
import Appbar from '../Appbar/Appbar';
import Fab from '../Fab/Fab';


class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <Appbar></Appbar>
                <Fab></Fab>
            </div>
        )
    }
}

export default Home;
/*
This component functions as the home page
*/