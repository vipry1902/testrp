// BT 1
var java-script; // bao gồm dấu gạch ngang

var age = '69' // số ko cần ''

var 8h; // bắt đầu với chữ số

var #kodung // dấu #

var var = 'Biến'; // sử dụng trùng từ khóa 'var'


// BT 2
var a = 2;
var b = 6;
var c = a * b;
console.log(c); // output: 12

var d = 3;
c = (b / a) + d;
console.log(c); // output: 6

c = (b - a) % 3;
console.log(c); // output: 1


//BT 3
// 3.1
let x = 5
console.log(++x + x++ - --x - x--); // (6 + 6 - 6 -6) = 0
//          6    (6)+1    6   (6)-1                                         

//3.2
let x1 = 6,
    y1 = 10
console.log(++y1 - y1++ + x1++ + x1-- - --x1 - --y1); // (11 - 11 + 6 + 7 - 5 - 11) = -3
//x                        7      6       5                
//y          11     12                           11          

//3.3
let x2 = 10
    y2 = 12
    z2 = 16
console.log(x2++ + z2-- - --x2 + --y2 - y2-- + ++y2 + ++z2 + --z2 + x2--); // (10 + 16 - 10 + 11 - 11 + 11 + 16 + 15 + 10) = 68
//x       (10)+1            10                                     (10)-1                 
//y                               11   (11)-1   11                                 
//z               (16)-1                               16      15                    
console.log(++x2 - x2++ + z2++ + ++y2 - y2--); // (10 - 10 + 15 + 12 - 12) = 15
//x          10   (10)+1                                
//y                               12   (12)-1        
//z                      (15)+1                     


//BT 4
let x = 69
console.log(x)

let fullName = 'N Q Huy'
console.log(fullName) 

let ohyeah = true
console.log(ohyeah)

let someName = {firstName: 'Huy', lastName: 'Nguyen'} 
console.log(someName)

let listBooks = ['Bên Rặng Tuyết Sơn', 'Hành Trình', 'Về Phương Đông']
console.log(listBooks)


//BT 5
let arrays = [1,2,3,4,5,6,7,8,9,10]

console.log('Bai 5.1:')
console.log(arrays[0] + arrays[1])  

console.log('Bai 5.2:')
console.log(arrays[0] * arrays[9])


//BT 6
let object = {firstName: 'Huy', lastName: 'Nguyen', age: '21', favorite: 'read book'}
object.firstName = 'Oh'
object.lastName = 'Yeah'
console.log(object.firstName + object.lastName)