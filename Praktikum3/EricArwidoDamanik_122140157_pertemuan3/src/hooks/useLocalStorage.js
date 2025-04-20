import {useState, useEffect} from 'react';

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (e) {
            console.log(e);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (e) {
            console.log(e);
        }
    }, [storedValue]);

    return [storedValue, setStoredValue];
}

export default useLocalStorage;
