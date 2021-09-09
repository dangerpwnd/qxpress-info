import { StyledNav, StyledLink } from "../src/styles";

const Home = () => (
    <div role="main">
      <StyledNav>
        <StyledLink href="/stages">By Stages</StyledLink>
        <StyledLink href="/techs">By Techs</StyledLink>
      </StyledNav>
      <div>
        <h1>Qxpress Info</h1>
      </div>
    </div>
  );

  export default Home;