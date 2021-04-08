/*await function getAllFromDb() {
    
        var db;

        var openRequest = await indexedDB.open(dbName, 1);

        openRequest.onsuccess = function (e) {


            db = e.target.result;

            var transaction = db.transaction([storeName], 'readonly');
            var store = transaction.objectStore(storeName);


            store.getAll().onsuccess = function (event) {
                console.log("onsuccess")
                (event.target.result)
            };
        };


        openRequest.onerror = function (e) {
            console.log('onerror!');
            console.dir(e);
        };
*/

import {openDB} from 'idb';
 async function getAllData(dbName,storeName){
    let db = await openDB(dbName,1)
   

   let allSavedItems=await db.getAll(storeName)
   
   return allSavedItems;

}

export default getAllData;
