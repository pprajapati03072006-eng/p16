import { useState } from "react";

const initialForm = {
  name: "",
  category: "",
  price: "",
  stock: "",
  description: "",
};

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100";

export default function ProductForm({ onAddProduct }) {
  const [formData, setFormData] = useState(initialForm);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    onAddProduct({
      id: crypto.randomUUID(),
      name: formData.name.trim(),
      category: formData.category,
      price: Number(formData.price),
      stock: Number(formData.stock),
      description: formData.description.trim(),
    });

    setFormData(initialForm);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-start gap-3 border-b border-slate-100 pb-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-xl text-violet-700">
          +
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Product information
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Enter the details of your new product.
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-semibold text-slate-700">
          Product name <span className="text-rose-500">*</span>
        </label>

        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Wireless Headphones"
          className={inputClass}
          maxLength={100}
          required
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="category"
            className="text-sm font-semibold text-slate-700"
          >
            Category <span className="text-rose-500">*</span>
          </label>

          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={inputClass}
            required
          >
            <option value="">Select category</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Home & Living">Home & Living</option>
            <option value="Accessories">Accessories</option>
            <option value="Sports">Sports</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="price"
            className="text-sm font-semibold text-slate-700"
          >
            Price (₹) <span className="text-rose-500">*</span>
          </label>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
              ₹
            </span>

            <input
              id="price"
              name="price"
              type="number"
              min="0.01"
              step="0.01"
              value={formData.price}
              onChange={handleChange}
              placeholder="0.00"
              className={`${inputClass} pl-9`}
              required
            />
          </div>
        </div>

        <div className="space-y-2 sm:col-span-2">
          <label
            htmlFor="stock"
            className="text-sm font-semibold text-slate-700"
          >
            Available stock <span className="text-rose-500">*</span>
          </label>

          <input
            id="stock"
            name="stock"
            type="number"
            min="0"
            step="1"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Enter quantity"
            className={inputClass}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="description"
          className="text-sm font-semibold text-slate-700"
        >
          Description
        </label>

        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          maxLength={500}
          placeholder="Describe your product, its features, and benefits..."
          className={`${inputClass} resize-y`}
        />

        <p className="text-right text-xs text-slate-400">
          {formData.description.length}/500 characters
        </p>
      </div>

      <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row">
        <button
          type="button"
          onClick={() => setFormData(initialForm)}
          className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
        >
          Clear form
        </button>

        <button
          type="submit"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#171925] px-5 py-3 text-sm font-bold text-white transition hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-200"
        >
          <span className="text-lg">+</span>
          Create product
        </button>
      </div>
    </form>
  );
}