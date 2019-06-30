import React from "react";
import MathComp from './MathComp'

/**
 * Write a new component named `Math` that you will import into Calculator.
 * Render one Math component in the place of each "?" mark.
 * The Math component should perform some arithmetic using 3 props:
  * `num1` - a number
  * `operator` -  a string representing an arithmetic operator, e.g. "+", "-", "*", "/"
  * `num2` - a number

* The Math component should render the result of problem in a `span` tag. e.g. 19 + 341 = 360
* Check out [React's documentation for props](https://facebook.github.io/react/docs/components-and-props.html)

## Bonus
* Using the [style tag](https://facebook.github.io/react/docs/dom-elements.html#style),
  set the font-size of the `span` rendered by the `Math` component to be the result of the arithmetic
  problem in pixels. e.g. the font-size of the `span` rendering the result of "19 + 341 = 360" should be 360 pixels.
*/

function Calculator() {
  return (
    <div>
      {/* <p>19 + 341 = ?</p> */}
      <MathComp a={19} b={341} operator='+' />
      {/* <p>42 - 17 = ?</p> */}
      <MathComp a={42} b={17} operator='-' />      
      {/* <p>100 * 3 = ?</p> */}
      <MathComp a={100} b={3} operator='*' />
      {/* <p>96 / 4 = ?</p> */}
      <MathComp a={96} b={4} operator='/' />
      <MathComp a={96} b={0} operator='/' />
      <MathComp a={96} b='just a text' operator='/' />

    </div>
  );
}

export default Calculator;
