import React from 'react'

export function useLocalStorage(key, initialValue){
    const [valueStorage, setValueStorage] = React.useState(() => {
        try{
            const item = localStorage.getItem(key);
            return item !==null ? JSON.parse(item) : initialValue;
        }
        catch (e){
            return initialValue;
        }
    });

    const setLocalStorage = value => {        
        try{
            localStorage.setItem(key, JSON.stringify(value));
            setValueStorage(value);
        }
        catch(e){
            console.error(e);
        }
    }

    return [valueStorage, setLocalStorage]
}