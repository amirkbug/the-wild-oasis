import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiauth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        "Account successfully created! please verify the new account from user's email address."
      );
    },
  });

  return { signup, isLoading };
}
