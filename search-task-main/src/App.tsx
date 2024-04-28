import { useState, useEffect, SetStateAction, useCallback } from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchContext } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";

export default function App() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {

    if (searchQuery.trim() === '') {
      return;
    }

    const fetchData = () => {
      fetch(`https://dummyjson.com/users/search?q=${searchQuery}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setUsers(data.users);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    };
  
    fetchData();
  }, [searchQuery]);


  const handleInputChange = useCallback((event: { target: { value: SetStateAction<string>; } }) => {
    setSearchQuery(event.target.value);
  }, []);

  
  return (
    <SearchContext.Provider value={{ users: users }}>
      <SearchForm value={searchQuery}
        onChange={handleInputChange}
      />
      <SearchResults />
    </SearchContext.Provider>
  );
}
