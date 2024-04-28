import { ChangeEvent } from "react";
import "./styles.css";

interface SearchFormProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function SearchForm({ value, onChange }: SearchFormProps): JSX.Element {
  return (
    <div className="searchForm">
      <form>
        <input type="text" value={value} onChange={onChange} />
      </form>
    </div>
  );
}
