// 1. A, b və c ədədlərimiz var. ax^2+bx+c=0 kvadrat tənliyinin həllini tapıb konsolda çap edin.
console.log('Task1');

var a = 1
var b = -28
var c = 147

var discriminant = b * b - 4 * a * c;

if (discriminant > 0) {
    var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log('Diskrimnant 0 dan boyukdur');
    console.log('x1 = ' + x1);
    console.log('x2 = ' + x2);
} else if (discriminant == 0) {
    var x = -b / (2 * a);
    console.log('Diskrimnant 0 a beraberdir');
    console.log('x = ' + x);
} else if (discriminant < 0){
    console.log('Diskrimnant 0 dan kicikdir, həlli yoxdur');
}



// 2. A ədədimiz var. 1-dən 1000-ə qədər A-ya bölünən bütün ədədləri çap edin.
console.log('Task2');

var a = 7;
var results = [];

for (var i = 1; i <= 1000; i++) {
    if (i % a === 0) {
        results.push(i);
    }
}
console.log(results);



//  3-7 saylı tapşırıqlar bu array üzərindən işləniləcək:
// const arr = [2, 4, 5, 9, 1];

// 3. Bu massivin minimum elementini tapın:
console.log('Task3');

const arr = [2, 4, 5, 9, 1];
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}

console.log(min);


// 4. Bu massivin maksimum elementini tapın
console.log('Task4');

let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);


// 5. Bu massivin minimum elementinin indeksini tapın.
console.log('Task5');

let minimum = arr[0];
let minimumIndex = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < minimum) {
    minimum = arr[i];
    minimumIndex = i;
  }
}

console.log(minimumIndex);

// 6. Bu massivin maksimum elementinin indeksini tapın.
console.log('Task6');

let maximum = arr[0];
let maximumIndex = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maximum) {
    maximum = arr[i];
    maximumIndex = i;
  }
}

console.log(maximumIndex);

// 7. Tək indeksli massiv elementlərinin cəmini hesablayın
console.log('Task7');

let sum = 0;
for (let i = 1; i < arr.length; i += 2) {
    sum += arr[i]
    
}
console.log(sum);

// 8. Mən Code Academy Tələbəsiyəm. cümlədəki hərfləri kiçik hərfə çevirin.
console.log('Task8');


let text1 = "Mən Code Academy Tələbəsiyəm";
let resulttask8 = text1.toLowerCase();
console.log(resulttask8)

// 9. Mətndə başlanğıc və son boşluqları təmizləyin: "            Mən Code Academydə Programing tədrisi alıram            "
console.log('Task9');


let text2 = "Mən Code Academy Tələbəsiyəm";
let resulttask9 = text2.trim();
console.log(resulttask9)

// 10. Mən Code Academy Tələbəsiyəm. cümləsini sözlərə ayırın
console.log('Task10');


let text3 = "Mən Code Academy Tələbəsiyəm";
const arraySplit = text3.split(" ");
console.log(arraySplit)

// 11.  "            Mən Code Academydə Programming tədrisi alıram            " cümləsində neçə hərf olduğunu consolda yazdırın.
console.log('Task11');


const text4 = "            Mən Code Academydə Programing tədrisi alıram            "
let son = [];
{
    if (text4.trim().split(' ').join('')) {
        son = text4.trim().split(' ').join('').length
        
    }
}

console.log(son)