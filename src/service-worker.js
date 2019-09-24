/* eslint-disable no-undef */

// Force development builds
workbox.setConfig({ debug: true });

const showNotification = () => {
  self.registration.showNotification('Sync success!', {
    body: 'Queue Resolved `🎉`'
  });
};

const bgSyncPlugin = new workbox.backgroundSync.Plugin('myQueue', {
  maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
  callbacks: {
    queueDidReplay: showNotification
  }
});

const networkWithBackgroundSync = new workbox.strategies.NetworkOnly({
  plugins: [bgSyncPlugin],
});

workbox.routing.registerRoute(/\/*/, networkWithBackgroundSync, "POST");