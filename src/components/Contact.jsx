import { contact, links, profile } from "../data/content.js";

export default function Contact() {
  return (
    <footer id="contact" className="site-footer">
      <div className="wrap">
        <h2>{contact.title}</h2>
        <p>{contact.text}</p>
        <div className="contact-links">
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
        </div>
        <p className="copyright">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}
