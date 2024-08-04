import { getJobs } from "@/services/jobSerivce";
import useZustand from "@/state/useZustand";
import { useQuery } from "@tanstack/react-query";

export const useJobs = () => {
  const {
    page,
    perPage,
    orderByField,
    orderByDirection,
    searchField,
    searchQuery,
  } = useZustand();

  const queryKey = JSON.stringify({
    page,
    perPage,
    orderByField,
    orderByDirection,
    searchField,
    searchQuery,
  });

  return useQuery({
    queryKey,
    queryFn: () =>
      getJobs({
        page,
        perPage,
        orderByField,
        orderByDirection,
        searchField,
        searchQuery,
      }),
    keepPreviousData: true,
  });
};
