import { Router } from "@reach/router";

import { StyledNav, StyledLink } from "../src/styles";
import ByStages from "../src/Components/ByStages";
import ByTechs from "../src/Components/ByTechs";

const Home = () => (
    <div role="main">
      <StyledNav>
        <StyledLink to="/stages">By Stages</StyledLink>
        <StyledLink to="/techs">By Techs</StyledLink>
      </StyledNav>
      <Router>
        <ByStages path="/stages" />
        <ByTechs path="/techs" />
      </Router>
      <div>
        <h1>Qxpress Info</h1>
      </div>
    </div>
  );

  export default Home;