import { createContext } from "react";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
    address: {
      city: string;
    };
  }
  
  interface SearchContextProps {
    users: User[];
  }
  
  export const SearchContext = createContext<SearchContextProps>({
    users: []
  });