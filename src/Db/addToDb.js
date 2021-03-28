/*
    Add an item to the database
*/
function addToDb(item) {
    var db;

    var openRequest = indexedDB.open('test_db', 1);

    openRequest.onsuccess = function (e) {
        db = e.target.result;
        addItem(item);
    };
    openRequest.onerror = function (e) {
        console.dir(e);
    };

    function addItem(item) {
        var transaction = db.transaction(['coursesStore'], 'readwrite');
        var store = transaction.objectStore('coursesStore');


        var request = store.put(item);

        request.onerror = function (e) {
            console.log('Error', e.target.error.name);
        };

        request.onsuccess = function (e) {
            console.log("success");
        };
    }

}

export default addToDb;