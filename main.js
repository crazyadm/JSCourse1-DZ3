/*С помощью цикла while вывести все простые числа в промежутке от 0 до 100*/

let SimpleList = new Array
//диапазон по условию установлен от 0 до 100
//но по определению числа должны быть >1, т.е. вычисления начинаются с 2

i=2
while (i<=100) {
    j=2
    key=false
    while (j<i) {
        if (i % j == 0) key=true
        j++ }
    if (key==false) SimpleList.push(i)
    i++
}

console.log(SimpleList)

