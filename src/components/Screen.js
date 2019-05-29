import React from 'react';

function Screen(props) {
    return (
        <div className="screenContainer">
            <div className="screen">
                <span className="screenText">{props.screenText}</span><br />
                <span className="screenTextBig">{props.screenTextBig}</span>
                
            </div>
        </div>
    );
}

export default Screen;