import { useNavigate } from "react-router-dom";
import ProductForm from "../Components/ProductForm";

export default function CreateProduct({ onAddProduct }) {
  const navigate = useNavigate();

  function handleCreate(product) {
    onAddProduct(product);
    navigate("/products");
  }

  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      <header className="border-b border-slate-200 bg-white px-5 py-5 sm:px-8">
        <p className="text-xs text-slate-400">
          Workspace / Products / Create
        </p>

        <h1 className="mt-2 text-2xl font-extrabold text-slate-900">
          Create a new product
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Add a product to your inventory catalog.
        </p>
      </header>

      <main className="mx-auto max-w-3xl p-5 sm:p-8">
        <button
          onClick={() => navigate("/products")}
          className="mb-6 text-sm font-semibold text-violet-700 hover:text-violet-900"
        >
          ← Back to products
        </button>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <ProductForm onAddProduct={handleCreate} />
        </div>
      </main>
    </div>
  );
}