// Job Display Count
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function JobDisplayCount() {
  const options = Array.from({ length: 10 }, (_, i) => i + 1);
  const defaultOption = "1"; // Default value

  return (
    <Select defaultValue={defaultOption}>
      <SelectTrigger>
        <SelectValue placeholder="Display count" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem key={option} value={option.toString()}>
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default JobDisplayCount;
