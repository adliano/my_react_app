// TODO: How to lod eror ???

import React from 'react'
import Alert from 'react-bootstrap/Alert'
/*
 ***************************************************
 * cal(obj)
 * param: {JSON} obj
 * This Method will calculate the result and return a JSON with result
 ****************************************************
 */
function cal (obj) {
  // Variable used to hold the return value
  let _result
  // Check if obj.a and obj.b are not numbers
  if (typeof obj.a !== 'number' && typeof obj.b !== 'number') {
    console.log('Invalid input datatype') 
    // Return NaN to trig the alert
    return {result : NaN}
  }
  // Check if b is 0 for operator '/' to handle arithmetic error
  if (obj.b === 0 && obj.operator === '/'){
    console.log('Arithmetic Error! Division by 0 "Zero" not allowed!');
    // eturn null to trig alert
    return { result : null }
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

  if(!result){
    return (
      <Alert variant='danger'> Something wrong, check values!</Alert>
    )
  } 

  return (
    <h3>
      {a} {operator} {b} = {result}
    </h3>
  )
}
// Export only MathComp
export default MathComp
