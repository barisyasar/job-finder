import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Separator } from "../ui/separator";
import useZustand from "@/state/useZustand";

function JobPagination({ totalCount }) {
  const { page, setPage, perPage } = useZustand();

  const totalPages = Math.ceil(totalCount / perPage);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(page - 1);
            }}
            disabled={page === 1}
          />
        </PaginationItem>
        {page}
        <Separator orientation="vertical" className="mx-2" />
        {totalPages}
        <PaginationItem>
          <PaginationNext
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(page + 1);
            }}
            disabled={page === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default JobPagination;
