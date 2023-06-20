import RoutesMain from "./Routes/RoutesMain";
import { GlobalStyle } from "./Styles/Global";
import { ResetStyle } from "./Styles/Reset";
import { UserProvider } from "./providers/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <GlobalStyle />
        <ResetStyle />
        <RoutesMain />
      </UserProvider>
    </>
  );
}

export default App;
