export function roll (sides, dice, rolls) {
    var results = [];
    //var i = 0;
    for (let i = 0; i < rolls; i++) {
        var num = 0;
        var j = 1;
        for (let j = 1; j < dice; j++) {
            num += Math.floor(Math.random() * sides) + 1;
        }
        results[i] = num;
    }

    const output = {
        "sides" : sides,
        "dice" : dice,
        "rolls" : rolls,
        "results" : num
    }
    console.log(JSON.stringify(output));
}