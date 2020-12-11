type NumberType = number

const MULTIPLIER = 20

const multiply = (input: NumberType): number => input * MULTIPLIER

const divide = (input: number): number => input / MULTIPLIER

const doNothing = (input: number): number => {
  return multiply(divide(input))
}

export const runDoNothingAndReturn = (): number => {
  return doNothing(10)
}

export class MyClass {
  addOne(n: number) {
    return n + 1
  }
}

export function minusOne(n: number) {
  return n - 1
}

export default doNothing
