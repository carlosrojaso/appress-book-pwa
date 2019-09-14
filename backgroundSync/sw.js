/* eslint-disable */
importScripts("/indexedDB.js");
const url = 'https://jsonplaceholder.typicode.com';

self.addEventListener('install', function(event) {
  // Perform install steps
});

self.addEventListener('sync', function(event) {
  console.log('I am in sync', event.tag);
 
  if(event.tag === 'message-queue') {
    event.waitUntil(syncMessages());
  }
});

function syncMessages() {
  console.log('syncMessages()');
  openDatabase()
    .then(() => {
      getAllMessagesFromQueue()
      .then((messages) => {
        console.log('messages', messages);
        solveMessages(messages);
      });
    })
    .catch((e)=>{console.log(e)});
}

function solveMessages(messages) {
  Promise.all(
    messages.map(
      (message) => {
        console.log('a message', message); 
          fetch(`${url}/posts`,
          {
            method: 'post',
            body: JSON.stringify({
              title: message.title,
              body: message.body,
              userId: message.userId
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          }
          )
          .then((response) => {
            console.log('response>>>', response);
            return deleteMessageFromQueue(message);
          });
      }
    )
  )
  
}