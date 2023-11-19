import { ILoginReqDto, IRegisterDto, ICompanySearchDto } from "../interfaces";

export const paginationItemsPerPage:  number = 6;

export const loginInitialValues: ILoginReqDto = {
  email: "",
  password: "",
};

export const registerInitialValues: IRegisterDto = {
  email: "",
  name: "",
  password: "",
  confirmPassword: "",
};

export const companySearchInitialValues: ICompanySearchDto = {
  commercial_names: "",
  phone_number: "",
  website: "",
  address_txt: "",
};
