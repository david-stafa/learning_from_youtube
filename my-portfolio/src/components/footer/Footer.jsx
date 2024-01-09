import "./footer.scss";
import SocialLinks from "../SocialLinks";

export default function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <a href="#" className="logo_link">
          <h1 className="logo_heading"> &lt; DAVID/&gt;</h1>
        </a>
      </div>
      <SocialLinks />
    </div>
  );
}