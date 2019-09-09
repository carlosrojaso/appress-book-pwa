self.addEventListener('sync', (event) => {
  switch(event.tags) {
    case 'send-messages':
      event.waitUnit(
        sendMessage()
        .then()
        .catch(
          (error) => {
            if(event.lastChance) {
              return removeMessage();
            }
          }
        ):
      );
    break;
    default:
      // code block
  }

});