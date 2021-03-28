export function getAllFromDb() {
    return new Promise(function (resolve) {

        var db;

        var openRequest = indexedDB.open('test_db', 1);

        openRequest.onsuccess = function (e) {


            db = e.target.result;

            var transaction = db.transaction(['coursesStore'], 'readonly');
            var store = transaction.objectStore('coursesStore');


            store.getAll().onsuccess = function (event) {
                return resolve(event.target.result);
            };
        };


        openRequest.onerror = function (e) {
            console.log('onerror!');
            console.dir(e);
        };

    });
}
