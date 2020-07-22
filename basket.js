/*3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

Немножечко от себя:
условие размыто - непонятен момент заполнения корзины
поэтому объявляю корзину предопредленной
товар-колво-цена_за_ед*/

let basket=[['tovar1',1,200],['tovar2',2,300],['tovar3',1,500],['tovar4',5,12]]
let sum=0


function countBasketPrice(arrbasket)
{
 arrbasket.forEach (function(element){
    console.log(element)
    sum += element[1]*element[2]
 }) 
 
 return
}

console.log('Items your Basket - tovar, count, cost')
countBasketPrice(basket)
console.log('Cost your Basket - ' + sum + '$')