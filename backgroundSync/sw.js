/* eslint-disable */
importScripts("/indexedDB.js");

self.addEventListener('install', function(event) {
  // Perform install steps
});

self.addEventListener('sync', function(event) {
  const url = 'https://jsonplaceholder.typicode.com';

  console.log('I am in sync', event.tag);
 
  if(event.tag === 'message-queue') {
    event.waitUntil(function() {
      return
      getAllMessagesFromQueue()
          .then((messages) => {
            console.log('messages', messages);
            return
              Promise.all(
                messages.map(
                  (message) => {
                    console.log('a message', message);
                    return 
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
                        return deleteMessageFromQueue(item);
                      });
                    ;
                  }
                )
              )
            ;
          });
      ;
    });
  }
});