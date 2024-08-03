import * as Yup from "yup";

const baseSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),

  password: Yup.string().required("Password is required"),
});

export default baseSchema;
