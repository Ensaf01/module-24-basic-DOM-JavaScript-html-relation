//console.log("append js");
//where add
const placeList=document.getElementById('place-list');

// what want to added
const lis=document.createElement('li');//akhne section add korle li er jaygai section,akhne amra list add korechi tai li
lis.innerText='dhaka-board';

// add the child

placeList.appendChild(lis);

//now we added a section,so section er parent main

const mainContainer=document.getElementById('main-ids');

const sectionAdd=document.createElement('section');
const h1=document.createElement('h1');
h1.innerText='my fav ice-cream';

//section er modhe h1 want append

sectionAdd.appendChild(h1);


const ul1=document.createElement('ul');

const li1=document.createElement('li');
li1.innerText='cocalate';
ul1.appendChild(li1);

const li2=document.createElement('li');
li2.innerText='cocalate';
ul1.appendChild(li2);

const li3=document.createElement('li');
li3.innerText='cocalate';
ul1.appendChild(li3);

sectionAdd.appendChild(ul1);
mainContainer.appendChild(sectionAdd);