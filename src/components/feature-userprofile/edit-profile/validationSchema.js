import * as Yup from "yup";

/**
 * Edit form validation schema
 */
export default Yup.object({
  first_name: Yup.string()
    .max(15, "First Name must be 15 characters or less")
    .required("First Name is Required"),
  last_name: Yup.string()
    .max(15, "Second Name must be 15 characters or less")
    .required("Second Name is Required"),
  email: Yup.string().email("Must be a valid email address.").required("Required"),
  dob: Yup.date().required("Birthday is required"),
});
