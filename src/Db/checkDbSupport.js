/*
    Check if the browser you are using supports indexed.db
*/
export function checkDbSupport() {
    let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;

    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyrange || window.msIDBKeyRange;

    if (!indexedDB) {
        console.log(indexedDB);
        console.log("Your browser does not support a stable version of indexedDB");
    }


}
