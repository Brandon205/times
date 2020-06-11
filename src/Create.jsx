import React, { useState } from 'react';

// let exampleObj = { // What needs to be created & stored in LS
//   "SMO Any%": {
//     "splits": [
//       {"Cap": 181000},
//       {"Cascade": 360123}
//     ]
//   }
// }

export default function Create() {
    const [splits, setSplits] = useState([1]);
    const [runName, setRunName] = useState('');

    let handleCreate = (e) => {
        e.preventDefault()
        console.log(e)
    }

    let addSplit = (e, remove=1) => {
        e.preventDefault();
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
            <button onClick={(e) => handleCreate(e)}>Create!</button>
            </form>
            <button onClick={(e) => addSplit(e)}>Add Split</button>
            <button onClick={(e) => addSplit(e, -1)}>Remove Last Split</button>
        </div>
    );
}
