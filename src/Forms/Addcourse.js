import React from 'react';


class Addcourse extends React.Component {
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
export default Addcourse;