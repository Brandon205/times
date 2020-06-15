import React, { useState } from 'react';

// let exampleObj = { // TODO: change the storage to this value unless a better way for a ref time is found
//   "SMO Any%": {
//     "SMO Any% splits": [
//       {"Cap": 181000},
//       {"Cascade": 360123}
//     ]
//   }
// }

export default function Create() {
    const [splits, setSplits] = useState([1]);
    const [runName, setRunName] = useState('');
    let form = document.getElementById('form');

    let handleCreate = (e) => {
        e.preventDefault();
        if (runName) {
            let obj = { [runName]: runName, [runName + ' splits']: []};
            for (let i = 1; i <= splits.length; i++) {
                let temp = [form.elements["split" + i][0].value, form.elements["split" + i][1].value, form.elements["split" + i][2].value];
                obj[runName + ' splits'].push(temp);
                let ls = localStorage.getItem('times');
                if (ls) {
                    ls = JSON.parse(ls);
                    console.log(obj, 'obj')
                    ls[runName] = runName;
                    ls[runName + ' splits'] = obj[runName + ' splits'];
                    console.log(ls, 'ls');
                    localStorage.setItem('times', JSON.stringify(ls));
                    console.log('Run Created!');
                } else {
                    localStorage.setItem('times', JSON.stringify(obj));
                    console.log('Run created');
                }
            }
        } else {
            console.log("You need to have a name!");
        }
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
            <input type="text" name={"split" + split} placeholder="Split Name" />
            <input type="text" name={"split" + split} placeholder="Cumulative Time" />
            <input type="text" name={"split" + split} placeholder="Best Time" />
        </div>
    );
    return (
        <div className="App">
            <h1>Create a Run</h1>
            <input onChange={(e) => {setRunName(e.target.value)}} type="text" name="run-name" id="run-name" placeholder="Run Name (SMO: Any%)" value={runName} required />
            <h2>Splits:</h2>
            <form id="form" autoComplete="off">
                <input type="hidden" name="auto" autoComplete="false" />
                {splitInputs}
            </form>
            <button onClick={(e) => handleCreate(e)}>Create!</button>
            <button onClick={(e) => addSplit(e)}>Add Split</button>
            <button onClick={(e) => addSplit(e, -1)}>Remove Last Split</button>
        </div>
    );
}
