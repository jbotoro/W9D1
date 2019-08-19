function curriedSum(numArgs) {
  let numbers = [];
  let sum = 0;
  return function _curriedSum(num) {
    numbers.push(num);
    
    sum += num;
    
    if (numbers.length === numArgs) {
      return sum;
    } else {
      return _curriedSum;
    }
  };


}

Function.prototype.curry = function(numArgs) {
  let args = [];
  
  let _curry = (arg) => {
    args.push(arg);
    if (args.length === numArgs) {
      return this.apply(null, args);
      // return this.call(null, ...args)
      // this(...args) 
    }
    else {
      return _curry;
    }
  };
};

