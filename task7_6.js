// Напишите программу, которая выводит на экран числа от 1 до 50. При этом вместо чисел, кратных трем, программа должна выводить слово «Java», а вместо чисел, кратных пяти — слово «Script». Если число кратно и 3, и 5, то программа должна выводить слово «JavaScript»  

let i=1;

while (i <= 50) { 

      if ((i % 5 == 0) & (i % 3 == 0)) {
    console.log('JavaScript');

    } else if (i % 5 == 0) {
    console.log('Script');

    } else if (i % 3 == 0) {
    console.log('Java');

    } else {
    console.log(i);
    }
    i++;        
}