let list=[];
const data=document.querySelector('.data');

const remove= function(i){
 list.splice(i,1);
 window.localStorage.setItem('savedList',JSON.stringify(list));
 refresh();
}
const refresh= function(){
 data.innerHTML=``;
 list.forEach((string,i)=>{
  data.innerHTML=data.innerHTML+`<li>${string}</li> <button onclick='remove(${i})' class="delbutton">X</button>`;
 })
}
const addItem=function(){
 alert('');
 let string=document.querySelector('.addbox').value;
 string=string.trim();
 if(string==='')
  return;
 list.push(string);
 window.localStorage.setItem('savedList',JSON.stringify(list));
 document.querySelector('.addbox').value='';
 refresh();
}

const initialize=function(){
 s=window.localStorage.getItem('savedList');
 list=JSON.parse(s);
 refresh();
}

window.onload=initialize();


