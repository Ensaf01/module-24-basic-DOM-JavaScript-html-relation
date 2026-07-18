const sections=document.querySelectorAll('section');//use here tag 'section'for query
//console.log(sections);
for(const elements of sections){
    //console.log(section);
    elements.style.border='2px solid blue';
    //element ==each section here
    elements.style.borderRadius='15px';
    elements.style.marginBottom='5px';
    elements.style.backgroundColor='lightgreen';
    elements.style.padding='10px';
}

const place=document.getElementById('place-id');
place.style.backgroundColor='yellow';
place.style.display='flex';
place.style.flexDirection='column';
place.style.alignItems='center';
//place.style.justifyContent='center';
//place.style.justifyItems='center';//this is for grid

