import { nav, profile } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="rounded-b-[2rem] bg-teal-deep px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl italic text-cream">
            {profile.firstName}
          </p>
          <p className="mt-1 text-sm text-teal-soft">
            © {year} {profile.name}. All rights reserved.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-teal-soft transition-colors hover:text-yellow"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
