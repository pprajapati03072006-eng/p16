const categoryStyles = {
  Electronics: "bg-violet-100 text-violet-700",
  Fashion: "bg-pink-100 text-pink-700",
  "Home & Living": "bg-amber-100 text-amber-700",
  Accessories: "bg-sky-100 text-sky-700",
  Sports: "bg-emerald-100 text-emerald-700",
  Other: "bg-slate-100 text-slate-700",
};

export default function ProductCard({ product }) {
  const stockStatus =
    product.stock === 0
      ? {
          label: "Out of stock",
          style: "bg-rose-50 text-rose-700",
          dot: "bg-rose-500",
        }
      : product.stock <= 5
        ? {
            label: "Low stock",
            style: "bg-amber-50 text-amber-700",
            dot: "bg-amber-500",
          }
        : {
            label: "In stock",
            style: "bg-emerald-50 text-emerald-700",
            dot: "bg-emerald-500",
          };

  return (
    <article className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/60">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-indigo-100 text-2xl text-violet-700">
          {product.category === "Electronics"
            ? "⌘"
            : product.category === "Fashion"
              ? "◇"
              : product.category === "Home & Living"
                ? "⌂"
                : product.category === "Accessories"
                  ? "✧"
                  : product.category === "Sports"
                    ? "◎"
                    : "▦"}
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            categoryStyles[product.category] || categoryStyles.Other
          }`}
        >
          {product.category}
        </span>
      </div>

      <h3 className="mt-5 break-words text-lg font-bold text-slate-900">
        {product.name}
      </h3>

      <p className="mt-2 min-h-10 break-words text-sm leading-5 text-slate-500">
        {product.description || "No description provided."}
      </p>

      <div className="mt-5 flex items-end justify-between gap-3 border-t border-slate-100 pt-4">
        <div>
          <p className="text-xs text-slate-400">Selling price</p>
          <p className="mt-1 text-xl font-extrabold tracking-tight text-slate-900">
            {product.price.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 2,
            })}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs text-slate-400">Quantity</p>
          <p className="mt-1 font-bold text-slate-800">{product.stock}</p>
        </div>
      </div>

      <div className="mt-4">
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${stockStatus.style}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${stockStatus.dot}`} />
          {stockStatus.label}
        </span>
      </div>
    </article>
  );
}