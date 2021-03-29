/*
    Create a database named test_db
*/
function createDb(dbName,storeName,keyName) {
    var db;
    var openRequest = indexedDB.open(dbName, 1);

    openRequest.onupgradeneeded = function (e) {
         db = e.target.result;
        if (!db.objectStoreNames.contains(storeName)) {
            db.createObjectStore(storeName, { keyPath: keyName });
            console.log("store created")
        }
    };

    console.log("db created");

}

export default createDb;
