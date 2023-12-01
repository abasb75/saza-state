function getFromStorage(key){
    const storageItem = localStorage.getItem(key);
    try{
        const storageItemObject = JSON.parse(storageItem);
        return storageItemObject;
    }catch{
        return storageItem;
    }

}

export default getFromStorage;