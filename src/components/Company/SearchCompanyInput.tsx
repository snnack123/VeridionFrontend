import { ErrorMessage, Field } from "formik";

type SearchInputProps = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

const SearchCompanyInput = ({
  label,
  name,
  type,
  placeholder,
  required = false,
}: SearchInputProps) => {
  return (
    <div>
      <div className="bg-white rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-primary">
        <label
          htmlFor="name"
          className="block text-xs font-medium text-gray-900"
        >
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
        <Field
          type={type}
          name={name}
          id={name}
          className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
      </div>
      <ErrorMessage name={name} component="div" className="errorMessage" />
    </div>
  );
};

export default SearchCompanyInput;
