import React from 'react';

export default function Splits(props) { // The component that will render all of the splits for the selected timer

    let splits = '';

    return (
        <div className="splits">
            <h2>Run name</h2>
            <hr/>
            {splits}
            <hr/>
            <div className="time-info">
                <h4>Previous segment</h4>
                <h5>TIME HERE</h5>
            </div>
            <div className="time-info">
                <h4>Sum of Bests</h4>
                <h5>ANOTHER TIME HERE</h5>
            </div>
        </div>
    )
}
