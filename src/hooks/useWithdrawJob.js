// useWithDrawJob Job
import { toast } from "@/components/ui/use-toast";
import { withdrawJob } from "@/services/jobSerivce";
import { useMutation } from "@tanstack/react-query";

export const useWithDrawJob = () => {
  return useMutation({
    mutationFn: withdrawJob,
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
