// Sign Up Form
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signUpchema } from "@/config/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUser } from "@/services/userService";
import { toast } from "../ui/use-toast";
import { ReloadIcon } from "@radix-ui/react-icons";
import useZustand from "@/state/useZustand";

export default function SignUpForm() {
  const { resetDialog } = useZustand();

  const { formState, handleSubmit, setError, control, getFieldState } = useForm(
    {
      resolver: yupResolver(signUpchema),
      defaultValues: {
        email: "",
        password: "",
      },
      mode: "onChange",
    }
  );

  const onSubmit = async (data) => {
    try {
      await registerUser(data);
      toast({
        title: "Success",
        description: "You have successfully registered. Please log in.",
      });
      resetDialog();
    } catch (error) {
      console.log(error);
      setError("root", {
        type: "manual",
        message: error.response.data.message,
      });
    }
  };

  return (
    <Form getFieldState={getFieldState}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={formState.isSubmitting}>
          {formState.isSubmitting && (
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          )}
          Sign Up
        </Button>
        {formState.errors.root && (
          <div className="text-red-500">{formState.errors.root.message}</div>
        )}
      </form>
    </Form>
  );
}
