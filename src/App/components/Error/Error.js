import React from 'react';

const Error = ({ error }) => {
    return(
        <div>
            <h1>
                Ooops!!! {error} <br/> Please reload page
            </h1>
        </div>
    )
}

export default Error;