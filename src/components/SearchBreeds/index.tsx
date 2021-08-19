import React, { useState } from "react";
import { useSearchBreedsQuery } from "../../features/dogs/dogs-api-slice";

const SearchBreeds: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data, isFetching } = useSearchBreedsQuery(searchTerm);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <form>
        <input type="search" value={searchTerm} onChange={handleChange} />
      </form>
      {isFetching ? (
        <p>Search...</p>
      ) : (
        <ul>
          {data?.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SearchBreeds;
