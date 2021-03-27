import { useEffect, useState } from 'react';
import { OLIB_URL } from '../constants';

const useOpenLibrarySearch = (search?: string) => {
    const [res, setRes] = useState<any>();
    useEffect(() => {
        if (!search) {
            return;
        }
        fetch(`${OLIB_URL}/search.json?q=${encodeURIComponent(search)}`).then((data) =>
            setRes(data)
        );
    }, [search]);
    return res;
};

export { useOpenLibrarySearch };
