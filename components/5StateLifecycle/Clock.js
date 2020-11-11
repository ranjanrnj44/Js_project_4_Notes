import React from 'react';

function Clock(){
    return(
        <div>
            <h3>6.Clock in all format</h3>
            <h4>{new Date().toLocaleTimeString()} - static time</h4>
        </div>
    );
}

export default Clock;