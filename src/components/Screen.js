import React from 'react';

function Screen(props) {
    return (
        <div className="screenContainer">
            <div className="screen">
                <span className="screenText">{props.screenText}</span>
            </div>
        </div>
    );
}

export default Screen;