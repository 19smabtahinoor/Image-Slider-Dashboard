const sendButton = document.querySelector('.sendbtn')
const commentinputBox = document.querySelector('.commentbox')
const commentArea = document.querySelector('.comment-areas ul')

const comments = (text) => {
 if(text){
     let uservalue = `
     <li class="commentslist">
     <p>${text}</p>
    </li>
     `
     commentArea.innerHTML += uservalue
     commentinputBox.value=''
 }else{
     alert('You must write anything!!!')
 }
}
sendButton.addEventListener('click',() => {
    comments(commentinputBox.value)
})

{/* <span class="material-icons" id="threelinebtn">&#xe5d4;</span>
<span class="deleteoption ">Delete</span> */}
// const threedotbutton = document.querySelector('#threelinebtn')
// const deletebtn = document.querySelector('.deleteoption')

// console.log(deletebtn)
// threedotbutton.addEventListener('click',() => {
//     deletebtn.classList.add('deleteoptionactive')
//     alert('gfdg')
// })

commentArea.addEventListener('click',(e) => {
    if(e.target.classList.contains('deleteoption')){
        e.target.parentElement.remove()
    }
})



//making slider
const showImage = document.querySelector('.image-for-show')
const imageThumbnails = document.querySelectorAll('.image-thumnail img')

imageThumbnails.forEach( (thumbnail) => {
    thumbnail.addEventListener('click',(e) => {
        showImage.src = e.target.src
        e.target.classList.toggle('imageBorder')
    })   

})

const previousArrow = document.querySelector('.leftArrow')
const nextArrow = document.querySelector('.rightArrow')

let images = ['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg']

let counting = 0


nextArrow.addEventListener('click',() => {
    counting++
    if(counting>=images.length){
        counting = 0
        showImage.src = images[counting]
    }else{
        showImage.src = images[counting]
    }
})


previousArrow.addEventListener('click',() => {
    counting--
    if(counting < 0){
        counting = images.length - 1
        showImage.src = images[counting]
    }else{
        showImage.src = images[counting]
    }
})


const thumbnailpreviousArrow = document.querySelector('.thumbnailleftArrow')
const thumbnailnextArrow = document.querySelector('.thumbnailrightArrow')


thumbnailnextArrow.addEventListener('click',() => {
    counting++
    if(counting>=images.length){
        counting = 0
        showImage.src = images[counting]
    }else{
        showImage.src = images[counting]
    }
})


thumbnailpreviousArrow.addEventListener('click',() => {
    counting--
    if(counting < 0){
        counting = images.length - 1
        showImage.src = images[counting]
    }else{
        showImage.src = images[counting]
    }
})
