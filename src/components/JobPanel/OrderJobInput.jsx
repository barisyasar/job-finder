// Order Job Input
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function OrderJobInput() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a field" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">Newest to oldest</SelectItem>
          <SelectItem value="banana">Oldest to newest</SelectItem>
          <SelectItem value="blueberry">Salary high to low</SelectItem>
          <SelectItem value="grapes">Salary low to high</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default OrderJobInput;
