import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import { UserCard } from "../UserCard/UserCard";

import "./style.css";

export function SearchResults(): JSX.Element {
  const { users } = useContext(SearchContext);
  return (
    <div className="usersList">
    {users.map((user, index) => (
      <UserCard 
        key={index} 
        image={user.image} 
        firstName={user.firstName} 
        lastName={user.lastName} 
        address={user.address} 
      />
    ))}
  </div>
  );
}
