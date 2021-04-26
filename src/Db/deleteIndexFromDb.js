import {openDB} from 'idb';
 async function deleteIndexData(dbName,storeName,key){
    let db = await openDB(dbName,1)
   

   let allSavedItems=await db.delete(storeName,key)
   
   return allSavedItems;

}

export default deleteIndexData;
