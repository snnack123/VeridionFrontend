import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import SearchSection from "../components/Company/Sections/SearchSection";

const Homepage = () => {
  const token = useSelector((state: RootState) => state.user.token);

  return <>{token ? <SearchSection /> : <div></div>}</>;
};

export default Homepage;
