import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, HeaderContainer, Logo, Link } from "./SharedLayout.syled";
import logo from "../../assets/images/logo.svg";
import ToggleButton from "../ToggleButton/ToggleButton";
import HeroSection from "../HeroSection/HeroSection";

export const SharedLayout = () => {
  return (
    <Container>
      <HeaderContainer>
        <Logo>
          <img src={logo} alt="Logo" className="logo" />
          <span>Cinemania</span>
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/library">My Library</Link>
        </nav>
        <ToggleButton />
      </HeaderContainer>
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
