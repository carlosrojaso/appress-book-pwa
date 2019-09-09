(function() {
    var db;
    var connection;

    connection = window.indexedDB.open("messages", 1);

    connection.onupgradeneeded = (upgradeDb) => {
        var db = upgradeDb.target.result;
        if (!db.objectStoreNames.contains('message-queue')) {
            db.createObjectStore('message-queue', {keyPath: 'title'});
        }
    };
    
    connection.onsuccess = (event) => {
    // data
    let dummyData = [
    {
        title: 'message 1',
        body: 'This is message 1',
        userId: 1
    },
    {
        title: 'message 2',
        body: 'This is message 2',
        userId: 1
    }
    ];

    // Opening successful process. 
    db = event.target.result;

    writingObjectStore(dummyData);
    readingObjectStore();
    };

    connection.onerror = (event) => {
    // We handle the opening db error. 
    console.error('error:', event.target.errorCode);
    };

    function writingObjectStore(data) {
        // it can be readonly or readwrite
        var transaction = db.transaction(['message-queue'], 'readwrite');

        // Adding the data in the objectStore
        let objectStore = transaction.objectStore("message-queue");

        let request = objectStore.add(data);

        request.onerror = (e) => {
        };
        request.onsuccess = (e) => {
            console.log('Item added to indexedDB');
        };
    }

    function readingObjectStore() {
        let transaction = db.transaction(["message-queue"], "readonly");
        // Adding the data in the objectStore 
        let objectStore = transaction.objectStore('message-queue') ;
        let request = objectStore.getAll();
        request.onsuccess = () => {
            request.result.forEach((item) => console.log('Items by name:', item));
            };
    }

    function deletingFromTheObjectStore() {
        // Deleting a registry 
        let request = db.transaction(["message-queue"], "readwrite")
                        .objectStore("message-queue")
                        .delete("title 1");
        request.onsuccess = (event) => {
            // it was successfully deleted.
            console.log('registry deleted');
        };
    }

    // Background Sync Mechanism Functions

    function sendMessage(message) {
        let messageItem = {
            title: message.title,
            body: message.body,
            userId: message.userId
        };

        writingObjectStore('message-queue', messageItem);

    }

    function messageQueueSync() {
        navigator.serviceWorker.ready.then(
            (registration) => {
                registration.sync.register('message-queue');
            }
        );
    }
})();