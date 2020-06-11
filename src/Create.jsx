import React, { useState } from 'react';

export default function Create() {
    const [splits, setSplits] = useState([1]);
    const [runName, setRunName] = useState('');

    let handleCreate = () => {
        console.log('Saving...')
    }

    let addSplit = (remove) => {
        if (remove === -1 && splits.length > 1) {
            let splitsCopy = [...splits]
            splitsCopy.pop();
            setSplits(splitsCopy);
        } else if (remove !== -1) {
            let splitsCopy = [...splits]
            splitsCopy.push(splitsCopy[splitsCopy.length -1] + 1)
            setSplits(splitsCopy);
        }
    }
    
    let splitInputs = splits.map( (split) =>
        <div className="split-input" key={split}>
            <input type="text" name={"split" + split} id={"split" + split} placeholder="Split Name" />
            <input type="text" name="referenceTime" id="goldTime" placeholder="Cumulative Time" />
            <input type="text" name={"split" + split} id={"split-id" + split} placeholder="Gold Time" />
        </div>
    );
    return (
        <div className="App">
            <h1>Create a Run</h1>
            <input onChange={(e) => {setRunName(e.target.value)}} type="text" name="run-name" id="run-name" placeholder="Run Name (SMO: Any%)" value={runName} />
            <h2>Splits:</h2>
            <form>
                {splitInputs}
            </form>
            <button onClick={() => addSplit()}>Add Split</button>
            <button onClick={() => addSplit(-1)}>Remove Last Split</button>
            <button onClick={() => handleCreate()}>Create!</button>
        </div>
    );
}
