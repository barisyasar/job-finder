// useApplyJob Job

import { toast } from "@/components/ui/use-toast";
import { applyJob } from "@/services/jobSerivce";
import useZustand from "@/state/useZustand";
import { useMutation } from "@tanstack/react-query";

export const useApplyJob = () => {
  const { addAppliedJob } = useZustand();
  return useMutation({
    mutationFn: applyJob,
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
    onSuccess: (data, id) => {
      addAppliedJob(id);
      toast({
        title: "Success",
        description: data.message,
      });
    },
  });
};
