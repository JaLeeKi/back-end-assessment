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

const messageContainer = document.querySelector('#user-message')
const form = document.querySelector('#enter-message') 
const baseURL = `http://localhost:4000/api/messages`
const messageCallback = ({ data: messages }) => displayMessages(messages)
const errCallback = err => console.log(err)
const createMessage = body => axios.post(baseURL, body).then(messageCallback).catch(errCallback)
const deleteMessage = id => axios.delete(`${baseURL}/${id}`).then(messageCallback).catch(errCallback)
const getAllMessages = () => axios.get(baseURL).then(messageCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let message = document.querySelector('#user-input')

    let msgObj = {
        message: message.value
    }

    createMessage(msgObj)

    message.value = ''
}

function createMessageCard(message) {
    const messageCard = document.createElement('div')
    messageCard.classList.add('message-card')

    messageCard.innerHTML = `<p class="message-holder">${message.message}</p>
    <button onclick="deleteMessage(${message.id})">delete</button>`

    messageContainer.appendChild(messageCard)
}

function displayMessages(arr) {
    messageContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createMessageCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllMessages()