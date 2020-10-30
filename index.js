// Add your functions here
const map = (array, func) => array.map(x => func(x));

const reduce = (array, func, startingPoint) => {
    if(startingPoint) {
        return array.reduce(func)+ startingPoint;
    } else {
        return array.reduce(func)
    }

}