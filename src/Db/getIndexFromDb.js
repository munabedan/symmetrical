import {openDB} from 'idb';
 async function getIndexData(dbName,storeName,key){
    let db = await openDB(dbName,1)
   

   let allSavedItems=await db.get(storeName,key)
   
   return allSavedItems;

}

export default getIndexData;
