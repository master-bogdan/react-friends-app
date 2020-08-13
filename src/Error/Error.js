import React from 'react';

class Error extends React.Component {
    render() {
        return(
            <div>
                <h1>Ooops!!! {this.props.error} <br/> Please reload page</h1>
            </div>
        )
    }
}

export default Error;