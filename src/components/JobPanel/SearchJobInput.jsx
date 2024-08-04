import { useState, useEffect } from "react";
import useZustand from "@/state/useZustand";
import { Input } from "../ui/input";
import { useDebounce } from "use-debounce";

function SearchJobInput() {
  const { searchQuery, setSearchQuery } = useZustand();

  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  const [debouncedSearchQuery] = useDebounce(localSearchQuery, 750);

  useEffect(() => {
    setSearchQuery(debouncedSearchQuery);
  }, [debouncedSearchQuery, setSearchQuery]);

  const handleInputChange = (event) => {
    setLocalSearchQuery(event.target.value);
  };

  return (
    <Input
      type="text"
      placeholder="Search by title"
      value={localSearchQuery}
      onChange={handleInputChange}
    />
  );
}

export default SearchJobInput;
