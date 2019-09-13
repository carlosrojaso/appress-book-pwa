/* eslint-disable */
let button = document.getElementById('myButton');

const messagesToSend = [
    {
        title: 'new Message',
        body: 'Hello there',
        userId: 1
    },
    {
        title: 'new Message 2',
        body: 'Hello there again',
        userId: 1
    },
    {
        title: 'new Message 3',
        body: 'Hello there again again',
        userId: 1
    },
    {
        title: 'new Message 4',
        body: 'Hello there again 4 times',
        userId: 1
    }
];


button.addEventListener('click', function(){
    messagesToSend.forEach(
        (item) => {
            sendMessage(item);
        }        
    );
    messageQueueSync();
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
