import {openDB} from 'idb';
 async function getAllData(dbName,storeName){
    let db = await openDB(dbName,1)
   

   let allSavedItems=await db.getAll(storeName)
   
   return allSavedItems;

}

export default getAllData;
