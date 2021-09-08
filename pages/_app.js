import {globalStyles} from "../src/styles";

const App = ({Component, pageProps}) => {
  <>
    {globalStyles}
    <Component {...pageProps} />
  </>
};

export default App;
