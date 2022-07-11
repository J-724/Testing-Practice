const ValidArgs = (x, y) => {
    return (typeof x !== 'number' || typeof y !== 'number')
       ? false : true;
};

const msg = 'Arguments contain a non-number value';
  
  const sum = (x, y) => {
    return (ValidArgs(x, y)) ? (x + y) : msg;
  };
  
  const subtract = (x, y) => {
    return (ValidArgs(x, y)) ? x - y : msg;
  };

  const multiply = (x, y) => {
    return (ValidArgs(x, y)) ?  x * y : msg;
  };
  
  const divide = (x, y) => {
    return (ValidArgs(x, y)) ? x / y : msg;
  };
  
  const calculator = {
    sum,
    subtract,
    multiply,
    divide,
    
  };
  
  export default calculator;