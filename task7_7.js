// У нас есть число 1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Посчитайте количество итераций необходимых для выхода из цикла и выведите это количество. 
let i = 50;
let j = 1000;
const count = 1;

while (j > i) {
    j = j/2;
    if (j <= i ) 
    console.log(count);
    count++;
}
