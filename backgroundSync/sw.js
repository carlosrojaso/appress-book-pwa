/* eslint-disable */
importScripts("/indexedDB.js");

self.addEventListener('install', function(event) {
  // Perform install steps
});

self.addEventListener('sync', function(event) {
  const url = 'https://jsonplaceholder.typicode.com';
 
  if(event.tags === 'message-queue') {
    event.waitUntil(function() {
      return
      getAllMessagesFromQueue()
          .then((messages) => {
            return
              Promise.all(
                messages.map(
                  (message) => {
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
                      .then(() => {
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