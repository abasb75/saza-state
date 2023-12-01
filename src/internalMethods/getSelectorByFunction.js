function getSelectorByFunction(fn){
    let strFn = fn.toString();

    if(strFn.includes('return')){
        strFn = strFn.split('return');
    }
    else if(strFn.includes('=>')){
        strFn = strFn.split('=>')
    }

    if(strFn.length>1){
        strFn = strFn[1].trim();
        if(strFn.includes(';')){
            strFn = strFn.split(';')[0];
        }
        return strFn;
    }

    return "";

}

export default getSelectorByFunction;