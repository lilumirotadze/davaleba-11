let  user = {
    firstname: 'giorgi',
    lastname: 'smith',
    age: 25,
    studentstatus:'active'
}
console.log(user.studentstatus);


let maSive = ['desktop', 'mobile', 'Kit']
for (let item of maSive){
    console.log (item);
}


let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89]
for(let i=0; i<numbers.length; i++){
if(numbers.length>5){
console.log (numbers[i]);
}


let array = ["html", "css", "bootstrap", "javascript","python"];
  for(let i=0; i<array.length; i++){
      if(array[i].length>5 && array[i].includes('ava')){
          console.log(array[i]);
      }
  }



let user = {
  name: 'giorgi',
  age: 20,
  studentstatus: 'active'
  }
  if (user.age > 18 && user.studentstatus) {
      console.log('hello');
  }
  if (user.name === 'giorgi') {
    console.log('hello giorgi');
  }else
  if
    (user.studentstatus || user.age < 25);{
    console.log('hello world');
    }
  }