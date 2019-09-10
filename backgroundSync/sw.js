self.addEventListener('sync', (event) => {
  var url = 'https://jsonplaceholder.typicode.com';
 
  if(event.tags === 'message-queue') {
    event.waitUntil(() => {
        return
          getAllMessagesFrom("message-queue")
          .then((messages) => {
            return
              Promise.all(
                messages.map(
                  (message) => {
                    return fetch(`${url}/posts`,{
                      method: 'post',
                      body: JSON.stringify({
                        title: message.title,
                        body: message.body,
                        userId: message.userId
                      }),
                      headers: {
                        "Content-type": "application/json; charset=UTF-8"
                      }
                      })
                      .then(() => {
                        return deleteMessageFromQueue(item);
                      });
                    ;
                  }
                );
              );
            ;
          });
        ;
      });
  }
});