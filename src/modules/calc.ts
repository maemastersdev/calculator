/*
THE INPUT WILL BE A LIST OF USER INPUTS
OR BUTTON PRESSES

Input: --> [UserInput, ....]
Generate: --> { state }
Generate a state object from the user inputs, which can be used to display the 
current value etc.
*/

// creating some placeholders 
/* defining a get State function, everything is going to export as one object
calc */

export enum InputType {
    Numerical,
    Operator
}


export enum OperatorType {
    Add,
    Subtract,
    Equals
}

export type Operation = {
    opeator: OperatorType;
    value: number;
}

// first input is type opf numberical and value of 1
function getOperations(inputs: Array<CalcInput>): Array<Operation> {
    inputs.reduce<Array<Operation>>(prev, input) => {
        switch (key) {
            case value:
                
                break;
        
            default:
                break;
        }
    }
}
export type CalcInput = 
| { type: InputType.Operator; Operator: OperatorType }
| { type: InputType.Numerical; Value: number }

export type CalcState = {
    displayValue: number;
}

/*
Now need to implement the getState function, 
in: [1,2, +, 3, =]
we need intermediate states ie
out: [{+ 12}, {+ 3}, {=}]
reducing 5 item array to 3 item array- could use array reduced
*/

const getState = (inputs: CalcInput[]): CalcState => {
    const result = inputs.reduce
    return (
        {displayValue: 15}
    )
};

const Calc = {
    getState
}

export default Calc;