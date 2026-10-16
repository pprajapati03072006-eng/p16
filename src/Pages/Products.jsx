import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import StatCard from "../components/StatCard";

export default function Products({ products }) {
  const navigate = useNavigate();

  // Calculate dashboard statistics dynamically
  const totalStock = products.reduce(
    (total, product) => total + product.stock,
    0
  );

  const inventoryValue = products.reduce(
    (total, product) => total + product.price * product.stock,
    0
  );

  return (
    <div className="min-h-screen bg-[#F6F7FB] text-slate-900">
      <Sidebar />

      <main className="min-w-0 lg:ml-64">
        {/* Top navigation bar */}
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 bg-white px-5 py-4 sm:px-8">
          <div>
            <p className="text-xs font-medium text-slate-400">
              Workspace / Inventory
            </p>

            <h2 className="mt-1 font-bold text-slate-800">
              Product management
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-bold text-slate-800">
                Admin Workspace
              </p>
              <p className="text-xs text-slate-400">
                Product administrator
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 font-bold text-violet-700 ring-2 ring-white">
              A
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl space-y-8 p-5 sm:p-8">
          {/* Welcome banner */}
          <section className="relative overflow-hidden rounded-3xl bg-[#202334] p-6 text-white sm:p-9">
            <div className="pointer-events-none absolute -right-10 -top-24 h-64 w-64 rounded-full border-[35px] border-lime-300/10" />

            <div className="pointer-events-none absolute right-28 top-16 h-24 w-24 rounded-full bg-violet-500/20 blur-2xl" />

            <div className="relative z-10 max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/10 px-3 py-1.5 text-xs font-semibold text-lime-300">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
                INVENTORY WORKSPACE
              </span>

              <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Make room for
                <span className="block text-lime-300">
                  something new.
                </span>
              </h1>

              <p className="mt-4 max-w-lg text-sm leading-6 text-slate-300 sm:text-base">
                Create products, organize your inventory, and manage
                your catalog in one beautiful workspace.
              </p>

              <button
                onClick={() => navigate("/products/create")}
                className="mt-6 rounded-xl bg-lime-300 px-5 py-3 text-sm font-bold text-slate-900 transition hover:-translate-y-0.5 hover:bg-lime-200"
              >
                + Create New Product
              </button>
            </div>
          </section>

          {/* Dynamic statistics */}
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <StatCard
              label="Total products"
              value={products.length}
              description="Products in your current catalog"
              symbol="▦"
              accent="bg-violet-100 text-violet-700"
            />

            <StatCard
              label="Total stock"
              value={totalStock.toLocaleString("en-IN")}
              description="Units across all products"
              symbol="↗"
              accent="bg-lime-100 text-lime-700"
            />

            <StatCard
              label="Inventory value"
              value={inventoryValue.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 2,
              })}
              description="Price multiplied by available stock"
              symbol="₹"
              accent="bg-sky-100 text-sky-700"
            />
          </section>

          {/* Product catalog heading and create button */}
          <section>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
                  Your collection
                </p>

                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">
                  Product catalog
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {products.length}{" "}
                  {products.length === 1 ? "product" : "products"}{" "}
                  in your inventory
                </p>
              </div>

              <button
                onClick={() => navigate("/products/create")}
                className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-200"
              >
                + Create Product
              </button>
            </div>

            {/* Empty state */}
            {products.length === 0 ? (
              <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-white/70 px-6 py-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-3xl text-violet-700">
                  +
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-800">
                  Your catalog starts here
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                  You haven't added any products yet. Create your
                  first product to start building your inventory.
                </p>

                <button
                  onClick={() => navigate("/products/create")}
                  className="mt-5 rounded-xl bg-[#202334] px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
                >
                  Add Your First Product →
                </button>
              </div>
            ) : (
              /* Product cards */
              <div className="grid gap-5 sm:grid-cols-2 2xl:grid-cols-3">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            )}
          </section>

          {/* Footer */}
          <footer className="border-t border-slate-200 py-5 text-center text-xs text-slate-400">
            Productly · Product Management · Create Operation
          </footer>
        </div>
      </main>
    </div>
  );
}
