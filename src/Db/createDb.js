/*
    Create a database named test_db
*/
export function createDb() {
    var db;
    var openRequest = indexedDB.open('test_db', 1);

    openRequest.onupgradeneeded = function (e) {
        var db = e.target.result;
        if (!db.objectStoreNames.contains('coursesStore')) {
            db.createObjectStore('coursesStore', { keyPath: 'courseId' });
        }
    };

    console.log("db created");

}
