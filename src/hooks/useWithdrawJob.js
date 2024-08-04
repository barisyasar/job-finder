// useWithDrawJob Job
import { toast } from "@/components/ui/use-toast";
import { withdrawJob } from "@/services/jobSerivce";
import useZustand from "@/state/useZustand";
import { useMutation } from "@tanstack/react-query";

export const useWithDrawJob = () => {
  const { deleteAppliedJob } = useZustand();

  return useMutation({
    mutationFn: withdrawJob,
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
    onSuccess: (data, id) => {
      deleteAppliedJob(id);
      toast({
        title: "Success",
        description: data.message,
      });
    },
  });
};
