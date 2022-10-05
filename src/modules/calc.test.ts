import Calc, { CalcInput, InputType, OperatorType } from "./calc";

//list of inputs that we can generate state from
// could be a number button press, operations, (not including AC etc here)
// each button press is an element in the array inputs
test('derive state', () => {
    const inputs: CalcInput[] = [
        { type: InputType.Numerical, Value: 1},
        { type: InputType.Numerical, Value: 2},
        { type: InputType.Operator, Operator: OperatorType.Add },
        { type: InputType.Numerical, Value: 3},
        { type: InputType.Operator, Operator: OperatorType.Equals }
    ]

    const state = Calc.getState(inputs);
    expect(state.displayValue).toEqual(15);
})