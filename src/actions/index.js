


export function incrementCounter()  {
    return {
        type: "INCREMENT_COUNTER"
    };
}


export function decrementCounter()  {
    return {
        type: "DECREMENT_COUNTER"
    };
}


export function drawRandomNumber() {

    const random = Math.round(Math.random() * 100);

return {

    type: "DRAW_RANDOM_NUMBER",
    random

};

}