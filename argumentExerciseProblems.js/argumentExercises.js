function sum() {
    let ourSum = 0
    for (i=0; i<arguments.length; i++){
        ourSum += arguments[i]
    }
    debugger
    return ourSum
}

function sumSpread(...args) {
    let ourSum = 0
    for (i=0; i<args.length; i++){
        ourSum += args[i]
    }
    return ourSum
}

Function.prototype.myBind = function(context){
    // debugger
    let that = this;
    // debugger
    let args = Array.from(arguments).slice(1)
    // debugger
    return function() {
        // debuger
        let callArgs = Array.from(arguments)
        // debugger
        return that.apply(context, args.concat(callArgs))
    }
}

Function.prototype.myBind = function(context, ...spreadArgs){
    // debugger
    let that = this;
    // debugger
    // let args = Array.from(spreadArgs)
    // debugger
    return function(...callArgs) {
        // debuger
        // let callArgs = Array.from(...callArgs)
        // debugger
        return that.apply(context, spreadArgs.concat(callArgs))
    }
}

function curriedSum(numArgs) {
    let totalSum = 0
    let numbers = []
    return function _curriedSum(num) {
        numbers.push(num)
        if (numbers.length === numArgs) {
            totalSum = numbers.reduce(function (acc, ele) {
                return acc + ele
            }, 0);
            console.log(totalSum)
        } else {
            return _curriedSum
        }
    }
}

Function.prototype.curry = function (numArgs) {
    let args = []
    let that = this
    return function _curried(num) {
        args.push(num)
        if (args.length === numArgs) {
            return that.apply(null, args)
        } else {
            return _curried
        }
    }
}

console.log(sum.curry(2))