import { useContext } from "react";
import RoutesMain from "./Routes/RoutesMain";
import { GlobalStyle } from "./Styles/Global";
import { ResetStyle } from "./Styles/Reset";
import { UserContext } from "./providers/UserContext";
import { ImSpinner8 } from "react-icons/im";
import { StyledLoading } from "./Styles/loading";

function App() {
  const { loading } = useContext(UserContext);
  return (
    <>
      <GlobalStyle />
      <ResetStyle />
      {loading ? (
        <StyledLoading>
          <ImSpinner8 color="var(--ColorGrey0)" size={50} />
        </StyledLoading>
      ) : (
        <RoutesMain />
      )}
    </>
  );
}

export default App;
