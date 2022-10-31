import { BubblyLink } from "react-bubbly-transitions";
export const Navbar = () => (
  <nav className="an imate-in" style={{ animationDelay: "80Oms" }}>
    <BubblyLink to="/">Docs</BubblyLink>
    <BubblyLink to="/about ">About</BubblyLink>
    <BubblyLink to="/contact ">Contact</BubblyLink>
  </nav>
);
