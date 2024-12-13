// Dark light mode

// const light=document.getElementById('light');
// const body=document.querySelector('body');

// light.document.addEventListener('click', myfunction());
// function myfunction()
// {
//     light.classList.toggle('fa-moon');
//     if(this.classList.toggle('fa-solid fa-sun')){
//         document.body.style.background ='white';
//         document.body.style.color='black';
//         documentbody.style.transition='2s';
//     }
//     else{
//         document.body.style.background ='black';
//         documentbody.style.color='white';
//         document.body.style.transition='2s';
//     }
// }

// dark light mode

function dark()
{
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
}
function light()
{
    document.body.style.backgroundColor="white";
    document.body.style.color="black";

}

// const togg=document.getElementById('togg');
// hom= document.getElementById('hom') ;
// if(togg)
// {
//     togg.addEventListener('click',function(){
//         hom.classList.add('show')
//     });
// }
function toggleMenu()
{
    const hom =document.getElementById("hom");
    hom.classList.toggle("active");
}
