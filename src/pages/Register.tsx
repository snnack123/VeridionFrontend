import { useCallback, useState } from "react";
import { RegisterFormData, RegisterResponse } from "../interfaces";
import { API } from "../app/api";
import { AxiosResponse } from "axios";
import FormikBase, { DefaultOnSubmit } from "../components/Forms/FormikBase";
import { Form, FormikValues,} from 'formik';
import { registerSchema } from "../utils/yupSchemas";
import { registerInitialValues } from "../utils/constants";
import FormField from "../components/Forms/FormField";
import FormRequestMessage from "../components/Forms/FormRequestMessage";

export default function Register() {
  const [requestMessage, setRequestMessage] = useState<string>("");
  const [requestError, setRequestError] = useState<boolean>(false);

  const registerHandler = useCallback(async (values: FormikValues) => {
    const { email, password, name } = values as RegisterFormData;

    const userData: RegisterFormData = {
      email,
      password,
      name,
    };

    const result: AxiosResponse<RegisterResponse> = await API.auth.register(userData);
    const response: RegisterResponse = result.data;

    if (!response.status) {
      setRequestError(false);
    } else {
      setRequestError(true);
    }

    setRequestMessage(response.message);
  }, []);

  const submitHandler = useCallback(async (values:FormikValues) => {
    registerHandler(values);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center flex-col">
      <h2 className="!text-3xl"> Register to Veridion </h2>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <FormikBase
          validateOnBlur
          validationSchema={registerSchema}
          initialValues={registerInitialValues}
          onSubmit={submitHandler as DefaultOnSubmit}
          >
          {() => (
            <Form className="space-y-6">
              <FormField
                label="Email address"
                name="email"
                type="email"
                placeholder="email"
                className="inputStyles"
              />
              <FormField
                label="Full name"
                name="name"
                type="text"
                placeholder="Full Name"
                className="inputStyles"
              />

              <FormField
                label="Password"
                name="password"
                type="password"
                placeholder="********"
                className="inputStyles"
              />

              <FormField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="********"
                className="inputStyles"
              />

              <div className="w-full flex justify-center">
                <button
                  disabled={requestMessage.length > 0 && !requestError}
                  type="submit"
                  className="formButton">
                    Sign up 
                </button>
              </div>
              <FormRequestMessage requestMessage={requestMessage} requestError={requestError} />
            </Form>
          )}
        </FormikBase>
      </div>
    </div>
  );
}