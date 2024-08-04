// useApplyJob Job

import { toast } from "@/components/ui/use-toast";
import { applyJob } from "@/services/jobSerivce";
import { useMutation } from "@tanstack/react-query";

export const useApplyJob = () => {
  return useMutation({
    mutationFn: applyJob,
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
    onSuccess: (data) => {
      toast({
        title: "Success",
        description: data.message,
      });
    },
  });
};
