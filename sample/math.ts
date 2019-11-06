type NumberType = number

const MULTIPLIER = 20

const multiply = (input: NumberType): number => input * MULTIPLIER

const divide = (input: number): number => input / MULTIPLIER

const doNothing = (input: number): number => {
  return multiply(divide(input))
}

export const runDoNothingAndReturn = () => {
  doNothing(10)
}

export default doNothing
