//Задачи для решения
//1
// let arr = ['Привет,','мир', '!'];
// let str = arr.join('')
// console.log(str)
//2
// let arr = ['Привет, ', 'мир', '!'];
// let text = arr[0] + arr[1] + arr[2];
// alert(text);
//3
// let arr = ['Привет,','мир', '!'];
// arr[0] = 'Пока,'
// let str = arr.join('')
// console.log(str)

//4
// var obj = {'Vasya':'50403', 'Kolya':'32020'};
// console.log(obj['Vasya'])
// console.log(obj['Kolya'])

//5
// var arr = {
//     'ru':['голубой','красный','зелёный'],
//     'en':['blue','red','green'],
// };
// console.log(arr['ru'][1])
//Работа с массивами
//1
// let arr = ['a','b','c'];
// alert(arr)

//2
// let arr = ['a','b','c'];
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])

//3
// let arr = ['a','b','c','d'];
// console.log(arr[0] + '+' + arr[1])
// console.log(arr[2] + '+' + arr[3])

//4
// let arr = [2,5,3,9];
// result = (arr[0] * arr[1]) + (arr[2] *arr[3])
// console.log(result)

//Объекты (ассоциативные массивы)
//1
// var obj = {a: 1, b: 2, c: 3};
// console.log(obj['c']);
// console.log(obj.c);

//2
// var obj = {Коля: '1000', Вася: '500', Петя: '200'};
// console.log(obj.Петя);
// console.log(obj.Коля);

//3
// var obj = {1: 'Пн', 2: 'Вт', 3: 'Ср', 4: 'Чт', 5: 'Пт', 6: 'Сб', 7: 'Вс'};
// console.log(obj[6]);

//4
// var obj = {1: 'Пн', 2: 'Вт', 3: 'Ср', 4: 'Чт', 5: 'Пт', 6: 'Сб', 7: 'Вс'};
// var day = 3;
// console.log(obj[day])

//Многомерные массивы
//1
// var arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
// console.log(arr[1][0])

//2
// var obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
// console.log(obj['js'][0])

//3
// var week = {
//     'en':{0:'mn',1: 'ts',2:'wd',3: 'th',4: 'fr',5: 'st',6:'sn'},
//     'ru':{0: 'Пн', 1: 'Вт', 2: 'Ср', 3: 'Чт', 4: 'Пт', 5: 'Сб', 6: 'Вс'}
// };
// console.log(week['ru'][0])
// console.log(week['en'][2])

//4
// var week = {
//         'en':{0:'mn',1: 'ts',2:'wd',3: 'th',4: 'fr',5: 'st',6:'sn'},
//         'ru':{0: 'Пн', 1: 'Вт', 2: 'Ср', 3: 'Чт', 4: 'Пт', 5: 'Сб', 6: 'Вс'}
// };
// day = 2
// lang = 'ru'
// console.log(week[lang][day])