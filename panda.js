const allHeading = document.getElementsByTagName('h2')
for(const heading of allHeading){
    heading.style.color = 'lightblue';
}

const backPack = document.getElementById('backpack');
backPack.style.backgroundColor = 'tomato';

const backPackCard = document.getElementById('back-pack-card');
backPackCard.style.paddingBottom = '30px';

const allCard = document.getElementsByClassName('card');
for(const card of allCard){
    card.style.borderRadius = '30px';
}

function makeWhite (){
    console.log('hello Button')
}

 const myButton = document.getElementsByClassName('my-button');
 for(const button of myButton){
    button.addEventListener('click', function(event){
        event.target.parentNode.parentNode.remove()
    })
 }

//  const exampleInputEmail1 = document.getElementById('exampleInputEmail1').addEventListener('keyup', function(event){
//     const text = event.target.value;
//     const buttonSubmit = document.getElementById('btn-submit')
//     if(text === 'email'){
//         buttonSubmit.removeAttribute('disabled')
//     }
//     else{
//         buttonSubmit.setAttribute('disabled', true)
//     }
//  })
document.getElementById('exampleInputEmail1').addEventListener('keyup',function(event){
    const text = event.target.value ;
    const deleteButton = document.getElementById('btn-submit');
    if(text === 'email'){
        deleteButton.removeAttribute('disabled')
    }
    else{
        deleteButton.setAttribute('disabled', true)
    }
})