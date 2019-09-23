const bgSyncPlugin = new workbox.backgroundSync.Plugin('myQueue', {
  maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});

workbox.routing.registerRoute(
  new RegExp('^https://jsonplaceholder.typicode.com'),
  new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin]
  }),
  'POST'
);