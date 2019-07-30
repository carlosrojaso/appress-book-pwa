module.exports = {
  pwa: {
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
          swSrc: 'public/service-worker.js',
      }
  }
}