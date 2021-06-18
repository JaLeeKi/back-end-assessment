document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };
  document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (res) {
          const data = res.data;
          alert(data);  
        })
  };
  document.getElementById("activityButton").onclick = function () {
    axios.get("http://localhost:4000/api/activity/")
        .then(function (res) {
          const data = res.data;
          alert(data);  
        })
  };

const enterMessageContainer = document.querySelector('#enter-message-container')
const enterMessageForm = document.querySelector('#enter-message')
const baseURL = "http://localhost:4000/api/message/"
const messages = [];

const postMessage = function(body) {axios
                            .post(baseURL, body)
                            .then(res => {console.log(res.data)
                                            displayMessages(res.data)})
                            .catch(err => {console.log(err)})}

function submitHandler(e) {
    e.preventDefault()

    let message = document.querySelector('#user-input')

    postMessage(message)
}

function createMessage(data) {
    const messageCard = document.createElement('div')
    
    messageCard.classList.add('message-card')

    messageCard.innerHTML = `<p class="message">${data}</p>`

    enterMessageContainer.appendChild(messageCard)
}

function displayMessages(data) {
    enterMessageContainer.innerHTML = ``
    for (let i = 0; i < data.message.length; i++) {
        createMessage(data.messages[i])
  }
}

enterMessageForm.addEventListener('submit', submitHandler);