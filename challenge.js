const counterLabel = document.getElementById("counter")

let stopwatch = setInterval(timer, 1000);

function timer() {
  ++counterLabel.innerHTML
};

function stop() {
  clearInterval(stopwatch)
};

function resume() {
  stopwatch = setInterval(timer, 1000);
};

const minusLabel = document.getElementById("-")

minusLabel.addEventListener("click", function(event){
  --counterLabel.innerHTML
})

const plusLabel = document.getElementById("+")

plusLabel.addEventListener("click", function(event){
  ++counterLabel.innerHTML
})

const likeLabel = document.getElementById("<3")
const likeTable = document.createElement("table")
likeTable.id = "numberLikes"
const likeClass = document.getElementsByClassName("likes")[0].appendChild(likeTable)

likeLabel.addEventListener("click", function(event){
  if (document.getElementById(`${counterLabel.innerHTML}`)) {
    let number = document.getElementById(`${counterLabel.innerHTML}`)
    number.children[1].innerHTML = parseInt(number.children[1].innerHTML)+1

  } else {
    let trElement = document.createElement("tr")
    trElement.id = `${counterLabel.innerHTML}`
    let numberElement = document.createElement('td')
    let likeElement = document.createElement('td')
    let likeString = document.createElement('td')
    trElement.appendChild(numberElement)
    trElement.appendChild(likeElement)
    trElement.appendChild(likeString)
    let loveCounter = 0
    numberElement.innerHTML = `The number ${counterLabel.innerHTML} has`
    likeElement.innerHTML = ++loveCounter
    likeString.innerHTML = `like(s)`
    likeTable.appendChild(trElement)
  }
})

const pauseButton = document.getElementById("pause")

pauseButton.addEventListener("click", function(event){

  if (this.innerText === "pause"){
    minusLabel.disabled = true;
    plusLabel.disabled = true;
    likeLabel.disabled = true;
    submit.disabled = true;

    stop();

    this.innerText = "resume"
  }
  else if (this.innerText === "resume") {
    minusLabel.disabled = false;
    plusLabel.disabled = false;
    likeLabel.disabled = false;
    submit.disabled = false;

    resume();

    this.innerText = "pause"
  }
});

const submit = document.getElementById("submit")

// Comment Table Creation
let commentList = document.getElementById("list")
commentList.appendChild(document.createElement("table"))
commentList.children[0].id = "commentTable"

let form = document.getElementById("comment-form")

form.addEventListener("submit", function(event){
  event.preventDefault()
  let commentValue = form.children[0].value
  document.querySelector("form").reset()
  addComment(commentValue)
});

function addComment(comment) {
  let trComment = document.createElement("tr")
  trComment.innerHTML = comment
  commentList.appendChild(trComment)
}
