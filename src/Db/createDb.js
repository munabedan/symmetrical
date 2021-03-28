/*
    Create a database named test_db
*/
function createDb() {
    var db;
    var openRequest = indexedDB.open('test_db', 1);

    openRequest.onupgradeneeded = function (e) {
         db = e.target.result;
        if (!db.objectStoreNames.contains('coursesStore')) {
            db.createObjectStore('coursesStore', { keyPath: 'courseId' });
            console.log("store created")
        }
    };

    console.log("db created");

}

export default createDb;
