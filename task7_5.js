//Выведите 10 строчек со смайликом : ':)'. На первой строчке один смайлик, на второй два,и так далее. На последней должно быть 10 смайликов.  

const smile = ':)';
let string = 1;
let space = '';

while (string <= 10) {
    space += smile;
    console.log(space);
    string++;
}