import * as yup from "yup";

export default yup.object().shape({
  username: yup.string().required("Username is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .min(10, "Phone number must include area code"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password is required and must be at least 6 characters long"),
});
