import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [deBounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return deBounceValue;
}

export default useDebounce;
