import {globalStyles} from "../src/styles";

const App = ({Component, pageProps}) => {
  return (
    <>
      {globalStyles}
      <Component {...pageProps} />
    </>
  );
};

export default App;
