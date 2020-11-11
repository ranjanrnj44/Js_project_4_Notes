import React from  'react';

function RenderingEle(){
        return (
            <div>
                <h3>3 Rendering elements</h3>
                <h4>this date is expression {new Date().toLocaleTimeString()}</h4>
            </div>
        );
}
setInterval(RenderingEle , 1000);  //this should be fixd, here the DOM passes to the screen

export default RenderingEle;