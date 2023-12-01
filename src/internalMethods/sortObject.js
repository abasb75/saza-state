function sortObject(unordered){
    if(typeof unordered !== 'object'){
        return unordered;
    }
    return Object.keys(unordered).sort().reduce(
        (obj, key) => { 
            if(typeof obj[key] === 'object'){
                obj[key] = sortObject(unordered[key]);
                return obj; 
            }
            obj[key] = unordered[key];
            return obj;
        },
        {}
    ) ;
    
}

export default sortObject;