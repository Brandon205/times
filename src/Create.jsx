import React, { useState } from 'react';

export default function Create() {
    const [splits, setSplits] = useState([1]);

    let handleCreate = () => {
        console.log('Saved')
    }

    let addSplit = () => {
        console.log(splits + " before")
        let newSplits = splits.push(splits[splits.length -1] + 1)
        setSplits(newSplits);
        console.log(typeof(splits) + " after")
    }
    
    let splitInputs = splits.map( (split) =>
        <div className="split-input" key={split}>
            <input type="text" name="split1" id="split1" placeholder="Split Name" />
            <input type="text" name="referenceTime" id="goldTime" placeholder="Cumulative Time" />
            <input type="text" name="split1" id="split1" placeholder="Gold Time" />
        </div>
    );
    return (
        <div className="App">
            <h1>Create a Run</h1>
            <label htmlFor="name">Run Title: </label>
            <input type="text" name="name" id="name" />
            <h2>Splits:</h2>
            {splitInputs}
            <button onClick={() => addSplit()}>Add Split</button>
            <button onClick={() => handleCreate()}>Create!</button>
        </div>
    );
}
