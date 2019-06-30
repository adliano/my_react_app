import React from 'react'
/**
 * cal(obj)
 * param: {JSON} obj
 * This Method will calculate the result and return a JSON with result
 */
function cal (obj) {
  let _result
  // Check if obj.a and obj.b are numbers
  if (typeof obj.a !== 'number' && typeof obj.b !== 'number') {
    console.log('Invalid input datatype') // TODO: How to lod eror ???
    return
  }
  // witch to check operator
  // In this case can be pass like 'sum' or '+'
  switch (obj.operator) {
    case '+':
      _result = obj.a + obj.b
      break
    case '-':
      _result = obj.a - obj.b
      break
    case '*':
      _result = obj.a * obj.b
      break
    case '/':
      _result = obj.a / obj.b
      break
    default:
      _result = NaN
      break
  }

  return { result: _result }
}
/**
 *
 * @method MathComp(props)
 * @param {JSON} props
 * This method will return a <h3> with the calculos info
 */
function MathComp (props) {
  // Destructure the object
  const { a, b, operator } = props
  const { result } = cal(props)

  return (
    <h3>
      {a} {operator} {b} = {result}
    </h3>
  )
}
// Export only MathComp
export default MathComp
