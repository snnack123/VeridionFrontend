import * as Yup from "yup";
import { ILoginReqDto, ICompanySearchDto } from "../interfaces";

export const loginSchema: Yup.ObjectSchema<ILoginReqDto> = Yup.object().shape({
  email: Yup.string().email("Email must be valid").required("A valid email is required"),
  password: Yup.string().required("Password is required"),
});

export const registerSchema: Yup.ObjectSchema<ILoginReqDto> = Yup.object().shape({
  email: Yup.string().email("Email must be valid").required("A valid email is required"),
  name: Yup.string().required("Name is required").min(6, "Name must be at least 6 characters"),
  password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  confirmPassword: Yup.string().min(6, 'Password confirmation must be at least 6 characters').oneOf([Yup.ref('password')], 'Passwords must match').required('Confirm password is required'),
});

export const companySearchSchema: Yup.ObjectSchema<ICompanySearchDto> = Yup.object().shape({
  commercial_names: Yup.string().required("Company is required").max(30, "Company must be maximum 30 characters"),
  phone_number: Yup.string().max(30, "Phone must be maximum 30 characters"),
  website: Yup.string().max(30, "Website must be maximum 30 characters"),
  address_txt: Yup.string().max(30, "Address must be maximum 30 characters"),
});
  