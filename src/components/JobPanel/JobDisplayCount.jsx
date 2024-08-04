// Display Count
import useZustand from "@/state/useZustand";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function JobDisplayCount() {
  const { perPage, setPerPage } = useZustand();
  const options = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <Select
      defaultValue={perPage.toString()}
      onValueChange={(value) => {
        const numberValue = parseInt(value, 10);
        setPerPage(numberValue);
      }}
    >
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
