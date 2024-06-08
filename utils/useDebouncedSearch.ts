import {useCallback, useState} from 'react';
import {useDebounce} from './debounce';

export function useDebouncedSearch(): [
  string,
  string,
  (text: string) => void
] {
  const [search, setSearch] = useState('');
  const [debounced, setDebounced] = useState('');

  const debouncedSearch = useDebounce(setDebounced);

  const handleSearch = useCallback((text: string) => {
    debouncedSearch(text);
    setSearch(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return [search, debounced, handleSearch];
}
