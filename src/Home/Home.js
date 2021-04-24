import React from 'react';
import Appbar from './Appbar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add'
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'
import Courselist from './Courselist';


const styles=theme=>({
    fab: {
        right:20,
        bottom:20,
        position: "fixed"
        
      }
});


class Home extends React.Component {

    redirectToAddCourse = () => {
        const {history}=this.props;
       if(history) history.push("/addcourse")
    }
    
    render() {

         const {classes} =this.props;
    
        return (
            <div className="Home">
                <Appbar></Appbar>
                <Courselist></Courselist>
                <Fab color="primary" size="medium" className={classes.fab}
                onClick={this.redirectToAddCourse} >
                    <AddIcon/>
                </Fab>
            </div>
        )
    }
}

Home.propTypes={
    classes:PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Home));
/*
This component functions as the home page
*/