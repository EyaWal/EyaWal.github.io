import { contact, links, profile } from "../data/content.js";

export default function Contact() {
  return (
    <footer id="contact" className="pad">
      <p className="foot">
        {contact.title}
        <span className="cursor" aria-hidden="true"></span>
      </p>
      <p className="foot-text">{contact.text}</p>
      <p className="links">
        {links.email && <a href={`mailto:${links.email}`}>Email</a>}
        {links.linkedin && (
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        )}
        {links.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
      </p>
      <p className="copyright">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
