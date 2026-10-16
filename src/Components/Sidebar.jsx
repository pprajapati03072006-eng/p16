import { NavLink } from "react-router-dom";

const links = [
  {
    to: "/products",
    label: "Products",
    icon: "▦",
  },
  {
    to: "/products/create",
    label: "Create Product",
    icon: "+",
  },
];

export default function Sidebar() {
  return (
    <aside className="flex w-full flex-col bg-[#171925] text-white lg:fixed lg:inset-y-0 lg:left-0 lg:w-64">
      <div className="border-b border-white/10 px-6 py-7">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-300 text-xl font-black text-slate-900">
            P.
          </div>

          <div>
            <h1 className="text-lg font-bold">Productly</h1>
            <p className="text-xs text-slate-400">
              Inventory workspace
            </p>
          </div>
        </div>
      </div>

      <nav className="flex gap-2 overflow-x-auto p-4 lg:flex-col lg:py-7">
        <p className="hidden px-3 pb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 lg:block">
          Workspace
        </p>

        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/products"}
            className={({ isActive }) =>
              `flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                isActive
                  ? "bg-lime-300 text-slate-900"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <span className="text-xl">{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto hidden p-5 lg:block">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <p className="text-sm font-semibold">Inventory workspace</p>
          <p className="mt-2 text-xs leading-5 text-slate-400">
            Create products and manage your catalog in one place.
          </p>
        </div>
      </div>
    </aside>
  );
}