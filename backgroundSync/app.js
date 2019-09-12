/* eslint-disable */
let button = document.getElementById('myButton');

button.addEventListener('click', function(){
    sendMessage({
    title: 'new Message',
    body: 'Hello there',
    userId: 1
    });
});

// Background Sync Mechanism Functions

function sendMessage(message) {
    let messageItem = {
        title: message.title,
        body: message.body,
        userId: message.userId
    };

    openDatabase()
    .then(() => {
        writingObjectStore(messageItem);
    })
    .catch((e)=>{console.log(e)});

}

function messageQueueSync() {
    navigator.serviceWorker.ready.then(
        (registration) => {
            registration.sync.register('message-queue');
        }
    );
}
