let value = ''
document.querySelector('.buttons').addEventListener('click',function (event){
   value = event.target.innerText 
})

let div1 = document.querySelector('.div1')
let div2 = document.querySelector('.div2')
document.querySelector('.submit').addEventListener('click',function (){
    div1.style.display = 'none'
    div2.style.visibility ='visible'
    rating()
 })
 
function rating(){
    if( value === ''){
        document.querySelector('.rating').innerHTML= 'You selected nothing' 
    }else{
        document.querySelector('.rating').innerHTML= `You selected ${value} out of 5`
    }
}