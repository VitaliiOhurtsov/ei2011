//alert('тестовое сообщение');
console.log(typeof per1);
per1 = 12;
console.log(typeof per1);
per1 = '12';
console.log(typeof per1);
per1 = true;
console.log(typeof per1);
per1 = {name:'Vitalii',
  'age':35};
console.log(typeof per1);
console.log(per1.age);
(function (a){
  var per2 = [12,'34',true,21,57,'test'];
  console.log((typeof per2)+a);
  console.log(per2[1]);
})(per1);
console.log(per1['age']);
console.log('12'+'13');
console.log(parseInt('12')+parseInt('13'));
function temp(){
  var3=45;
}
var temp1 = function(){
  console.log('Анонимная функция');
};
temp1();

