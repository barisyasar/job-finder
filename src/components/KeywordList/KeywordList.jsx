// Keyword List

import { Badge } from "../ui/badge";

function KeywordList({ keywords }) {
  return (
    <div className="flex gap-3 flex-wrap">
      {keywords.map((keyword) => (
        <Badge key={keyword} className="bg-blue-800 text-white text-nowrap">
          # {keyword}
        </Badge>
      ))}
    </div>
  );
}

export default KeywordList;
