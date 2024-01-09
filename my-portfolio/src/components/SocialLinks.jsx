import { Facebook, GitHub, Linkedin } from "react-feather";

export default function SocialLinks({ children }) {
  return (
    <div className="links-socials">
      <a
        className="social-link"
        href="https://www.linkedin.com/in/david-stafa/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin />
      </a>
      <a
        className="social-link"
        href="https://github.com/david-stafa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub />
      </a>
      <a
        className="social-link"
        href="https://www.facebook.com/david.stafa/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook />
      </a>
      {children}
    </div>
  );
}
