const queue = new workbox.backgroundSync.Queue('myQueueName');

self.addEventListener('fetch', (event) => {
  // Clone the request to ensure it's safe to read when
  // adding to the Queue.
  const promiseChain = fetch(event.request.clone())
  .catch((err) => {
      return queue.pushRequest({request: event.request});
  });

  event.waitUntil(promiseChain);
});