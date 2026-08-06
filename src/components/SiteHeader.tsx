import { NAV_ITEMS, type NavigateFn, type Page } from "./site";

export default function SiteHeader({
  page,
  navigate,
}: {
  page: Page;
  navigate: NavigateFn;
}) {
  const go = (target: Page) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(target);
  };

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#" onClick={go("home")} className="brand">
          <span className="brand-name">A-Kracht begeleiding</span>
          <span className="brand-dot" />
        </a>
        <nav aria-label="Hoofdnavigatie" className="nav">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href="#"
              onClick={go(item.key)}
              aria-current={page === item.key ? "page" : undefined}
              className={`nav-link${page === item.key ? " is-active" : ""}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#"
            onClick={go("contact")}
            className="btn btn--primary btn--sm"
            style={{ marginLeft: 14 }}
          >
            Kennismaken
          </a>
        </nav>
      </div>
    </header>
  );
}
