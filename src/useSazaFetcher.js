import { useEffect, useState } from "react";
import store from "./Store";

function useSazaFetcher( url , key , options={}  ){
    // TODO : check url must be a valid url

    if(typeof url !== 'string'){
        return false;
    }

    if(typeof key !== 'string'){
        return false;
    }

    if(typeof options !== 'object'){
        return false;
    }


    const storeState = store.getState()[key];

    /* init state */
    const initialState = {};
    
    if(storeState){
        initialState[key] = storeState;
    }else{
        initialState[key] = {
            isLoading:true,
            error:null,
            data:null,
        }
        store.setState(initialState);
    }

    const [state,setState] = useState( initialState[key] );

    const loadData = () => {
        fetch(url,options).then(
            res=>res.json()
        ).then(
            res=>{
                const dataState = {};
                dataState[key] = {
                    isLoading:false,
                    error:null,
                    data:res,
                }
                store.setState(dataState)
            }
        ).catch(
            err=>{
                const errorState = {};
                errorState[key] = {
                    isLoading:false,
                    error:err,
                    data:null,
                }
                store.setState(errorState)
            }
        )

    }

    useEffect(()=>{

        const subscribe = store.subscribe(setState,state=>state[key]);

        if(state.isLoading){
            loadData();
        }

        return ()=>{
            store.unsubscribe(subscribe);
        }

    },[])

    const returnedData = {};
    returnedData[key] = state;
    returnedData.reload = () => {
        const startLoader = {};
        startLoader[key] = {
            isLoading:true,
            error:null,
            data:null,
        }
        store.setState(startLoader);
        loadData();
    }
    return returnedData;

}



export default useSazaFetcher;