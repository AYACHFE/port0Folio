import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__row">
        <p className="site-footer__name">
          {profile.name}
          <span> / {profile.title}</span>
        </p>
        <p className="site-footer__copy">
          © {year} — Built with Next.js, Three.js & a stubborn attention to systems ^&^. 
        </p>
        <a href="#top" className="site-footer__top" data-cursor="hover">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
