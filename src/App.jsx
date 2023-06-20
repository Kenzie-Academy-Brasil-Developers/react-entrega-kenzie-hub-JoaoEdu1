import RoutesMain from "./Routes/RoutesMain";
import { GlobalStyle } from "./Styles/Global";
import { ResetStyle } from "./Styles/Reset";

function App() {
  return (
    <>  
      <GlobalStyle />
      <ResetStyle />
      <RoutesMain />
    </>
  );
}

export default App;
