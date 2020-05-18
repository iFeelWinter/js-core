import{name} from './second.js';
console.log('it worked',name);

console.log(f);//обращение к переменной до инициализации возможно
var f = 15;
console.log(f);

let a = 10;
console.log('a', a);// обращение к переменной до инициалихации вызывает ошибку

const b = 11;
console.log('b', b);
//b += 1; константу поменять нельзя;

a = f;//копирование по значению
f += 3;
console.clear();
console.log(f);
console.log(a);

2;
'Hello';"Hello your's"; `Hello, ${f}`;
true;false;
undefined;
null;

let c = {val: 12};
let d = {val: 13};
d = c //копирование по ссылке
c.val = 66
console.log(c);
console.log(d);

//Symbol
//BigInt


//Операторы
/*
+ - сумированние, конкатенация
2 + 3 == 5 - суммирование
2 + '3' == 23 - конкатенация
'2' + 3 == 23 - конкатенация
-
/
*
13 % 5 == 3 //остаток от деления
2 ** 3 == 8 //возведение в степень

*/
let aa = '3';
console.log(typeof +aa); //неявное приведение типов (в число из строки)

let bb;

//Conditions
if(a == 3){
    //то делаем это
    console.log(a);
}else{
//Иначе делаем это
    console.log(b);
}
//Тернарный оператор
//или можно так: условие ? действие, если да : действие, если нет
a == 3? console.log(a): console.log(b);

a < 3? console.log('a > 3'): true;


//Цикл с предусловием
let j = 0
while(j< 10){//условие цикла
    //тело цикла
    console.log('j = ', j);
    j++;
    //прохождение цикла 1 раз - итерация.
}
//цикл со счётчиком
//(инициализация переменных;действия до начала цикла;условия выполнения цикла;действие после итерации цикла)
let i; 
for(i = 0; i < 10; i++){
    console.log('for loop:', i);
}


//Цикл с послеусловием
do{
    console.log('do-while');
}while(1 > 11);


alert('privet');
let aaa = prompt('Enter a number'); //type; string
let bbb = confirm('Do you wanna to continue?');// true/false


let con = false;
do{
    con = confirm('Continue?')
        if(con == false){
            con = !confirm('are you sure?really?');
        }
}while(con);