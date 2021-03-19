// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!")
      }
    }, 300);
  });

}

document.addEventListener('DOMContentLoaded', function () {
  addEventListenerToLikes()
});



function addEventListenerToLikes() {
  document.querySelectorAll('.like-glyph').forEach(like => like.addEventListener('click', likeButton))
  // document.querySelectorAll('.like-glyph').forEach(like => like.addEventListener('click', mimicServerCall))

}

function likeButton(e) {
  const modal = document.querySelector('#modal')
  mimicServerCall("weqweqw")
  .then(function(message) {
    console.log("yo");
    if (e.target.classList.value.includes('activated-heart')) {
      e.target.classList.remove('activated-heart')
    } else {
      e.target.classList.add('activated-heart')
    }
  })
    .catch(function (error) {
      modal.innerHTML = error
      modal.classList.remove('hidden')
      setTimeout(function () {
        modal.classList.add('hidden')
      }, 5000)
    })
  console.log("hi")
}