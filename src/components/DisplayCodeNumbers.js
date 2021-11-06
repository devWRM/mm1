import React from 'react';

// import Input1 from './Input1';

function DisplayCodeNumbers({ codeNumbers, input1Form }) {
// debugger;

    return (
        <div>
            
            {codeNumbers[0]}
            {codeNumbers[1]}
            {codeNumbers[2]}
            {codeNumbers[3]}


            {/* <Input1 codeNumbers={codeNumbers} input1Form={input1Form} /> */}
        </div>
    )
}

export default DisplayCodeNumbers;
