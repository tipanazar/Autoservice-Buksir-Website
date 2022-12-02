import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getCurrentAdmin } from "../redux/auth/authOperations";
import { MyRoutes } from "./Routes";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentAdmin());
  });

  return <MyRoutes />;
}

export default App;
