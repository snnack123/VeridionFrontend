import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Navigate } from "react-router-dom";

export default function ProtectedRouteAfterLogin(props: { readonly children: JSX.Element, readonly checkingToken: boolean }) {
  const token = useSelector((state: RootState) => state.user.token);
  const { children, checkingToken } = props;

  if (!token && !checkingToken) {
    return <Navigate to="/login" />
  } else {
    return children;
  }
};