// Order Job Input
import useZustand from "@/state/useZustand";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function OrderJobInput() {
  const { setOrderByField, setOrderByDirection } = useZustand();

  const handleSelectChange = (value) => {
    const [field, direction] = value.split("_");
    setOrderByField(field);
    setOrderByDirection(direction);
  };

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger>
        <SelectValue placeholder="Select a field" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="createdAt_asc">Newest to oldest</SelectItem>
          <SelectItem value="createdAt_desc">Oldest to newest</SelectItem>
          <SelectItem value="salary_asc">Salary low to high</SelectItem>
          <SelectItem value="salary_desc">Salary high to low</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default OrderJobInput;
