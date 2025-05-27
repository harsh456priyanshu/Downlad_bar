// let h5 = document.querySelector('h5')
// let btn  =  document.querySelector('button')

// let flag = 0

// btn.addEventListener( 'click' , function() {
//    if( flag == 0){
//      h5.innerHTML = 'Requesting Sending....'
//     h5.style.color = 'gold'
//     btn.innerHTML = 'Adding...'
//     setTimeout(function(){
//         h5.innerHTML = 'Friends'
//         h5.style.color = 'green'
//         btn.innerHTML ='Remove Friend'
//     } , 3000)
//     flag = 1
//    } else {
//     h5.innerHTML = 'Stranger'
//     h5.style.color = 'red'
//     btn.innerHTML = 'Add Friend'
//    }
// })


var btn = document.querySelector('button')
var percent = document.querySelector('#percent')
var growth = document.querySelector('#growth')

var grow = 0

btn.addEventListener('click' , function(){
   let pause = setInterval(function(){
    grow++
    percent.innerHTML = grow+ '%'
    growth.style.width = grow+ '%'
  }, 50)


  setTimeout(function(){
    clearInterval(pause)
    btn.innerHTML = 'Downloaded'
    btn.style.opacity = 0.5
  }, 5000)
})