/* eslint-disable */
var DB_VERSION = 1;
var DB_NAME = "messages";
var db;
var connection;

function openDatabase(){
    return new Promise(
        (resolve, reject) => {
            connection = self.indexedDB.open(DB_NAME, DB_VERSION);

            connection.onupgradeneeded = (upgradeDb) => {
                var db = upgradeDb.target.result;
                if (!db.objectStoreNames.contains('message-queue')) {
                    db.createObjectStore('message-queue', {keyPath: 'title'});
                }
            };
            
            connection.onsuccess = (event) => {
            // Opening successful process. 
            db = event.target.result;
            resolve(db);
            };

            connection.onerror = (event) => {
            // We handle the opening db error. 
            reject(event.target.errorCode);
            };
        }
    );
}

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

function getAllMessagesFromQueue() {
    return new Promise(
        (resolve, reject) => {
            let transaction = db.transaction(["message-queue"], "readonly");
            // Adding the data in the objectStore 
            let objectStore = transaction.objectStore('message-queue') ;
            let request = objectStore.getAll();
            request.onsuccess = () => {
                resolve(request.result);
            };
            request.onerror = () => {
                reject(request.error);
            }
        } 
    );
}

function deleteMessageFromQueue(item) {
    return new Promise(
        (resolve, reject) => {
            // Deleting a registry 
            let request = db.transaction(["message-queue"], "readwrite")
            .objectStore("message-queue")
            .delete(item.title);
            request.onsuccess = () => {
                // it was successfully deleted.
                resolve(request.result);
            };
            request.onerror = () => {
                // it was successfully deleted.
                reject(request.error);
            };
        }
    );
}
