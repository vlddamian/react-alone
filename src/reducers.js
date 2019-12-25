export default (state = {
    operands : ["a", "b", "c"],
    values : [0, 0, 0],
    sum: 0,
    difference: 0
}, action) =>{
    if(action.type === "GENERIC") {
        return action.newState;
    } else {
        return state;
    }
}
