import { getAppliedJobs } from "@/services/jobSerivce";
import useZustand from "@/state/useZustand";
import { useQueries } from "@tanstack/react-query";

export const useAppliedJobs = () => {
  const { user } = useZustand();
  const { appliedJobs } = user;
  return useQueries({
    queries: appliedJobs.map((appliedJob) => {
      console.log(appliedJob);
      return {
        queryKey: ["applied-jobs", appliedJob],
        queryFn: () => getAppliedJobs(appliedJob),
      };
    }),
  });
};
