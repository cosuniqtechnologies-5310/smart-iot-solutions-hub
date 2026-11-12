import { products, Product } from "@/data/products";
import ProductAccordion from "@/components/ProductAccordion";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

function getProductTag(product: Product): string {
  if (product.tag) return product.tag;
  if (product.series) return product.series;
  if (product.name.includes(" - ")) {
    return product.name.split(" - ")[0].trim();
  }
  if (product.name.startsWith("BOLT-")) {
    return "BOLT";
  }
  if (product.category === "Accessories") {
    return "ACCESSORY";
  }
  return product.name.split(" ")[0].trim();
}

type Props = {
  params: Promise<{ id: string }> | { id: string };
};

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.id);
  if (!product) return { title: "Product Not Found" };

  const descriptionText = Array.isArray(product.particulars)
    ? product.particulars.join(", ")
    : product.particulars || "View detailed specifications for this product.";

  return {
    title: `${product.name} | Smart IoT Solutions`,
    description: descriptionText,
  };
}

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-[#fdfcf9] border-b border-gray-200">
        <div className="container max-w-6xl">
          <div className="text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
            <Link href="/" className="text-gray-400 hover:text-gray-600 transition">
              HOME
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="text-gray-400 hover:text-gray-600 transition">
              PRODUCTS
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800">{product.code}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100">
            {/* Product Image Area */}
            <div className="lg:w-5/12 flex items-center justify-center bg-white rounded-2xl pt-14 pb-8 px-8 border border-gray-100 relative overflow-hidden min-h-[340px]">
              <div className="absolute top-4 left-4 bg-[#0c121e]/90 backdrop-blur-sm text-[#d0a353] text-[0.65rem] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-[#d0a353]/35 z-10">
                {getProductTag(product)}
              </div>
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-[#0c121e] text-[0.65rem] font-mono font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-gray-200 shadow-sm z-10">
                {product.code}
              </div>
              {product.image ? (
                <img
                  src={product.image.startsWith("images/") ? `/${product.image}` : product.image}
                  alt={product.name}
                  className="max-h-[320px] max-w-full w-auto h-auto object-contain object-center m-auto drop-shadow-md"
                />
              ) : (
                <div className="w-full h-64 flex items-center justify-center text-gray-300">
                  <i className="fas fa-box text-6xl"></i>
                </div>
              )}
            </div>

            {/* Product Details Area */}
            <div className="lg:w-7/12 flex flex-col justify-center">
              <div className="inline-block bg-[#d0a353]/15 text-[#8c6017] border border-[#ca9740]/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 w-fit">
                {product.category}
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 font-heading leading-tight">
                {product.name}
              </h1>
              <p className="text-sm font-mono text-gray-500 mb-5 font-semibold">
                Model: <span className="text-[#0c121e]">{product.code}</span>
              </p>

              {/* Price Banner */}
              <div className="mb-6 pb-4 border-b border-gray-100">
                <span className="text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest block mb-1 font-heading">
                  List Price
                </span>
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-gray-900 font-heading tracking-tight">
                    {typeof product.price === "number"
                      ? `₹${product.price.toLocaleString("en-IN")}`
                      : product.price || "Quote on Request"}
                  </span>
                  {product.priceNote && (
                    <span className="text-sm font-bold text-[#b5852f] tracking-wide uppercase">
                      ({product.priceNote.replace(/^LIST\s*PRICE\s*\+?\s*/i, "+").trim()})
                    </span>
                  )}
                </div>
              </div>

              {/* Accordion Component */}
              <div className="mb-6">
                <ProductAccordion
                  sections={product.accordions}
                  particulars={product.particulars}
                  defaultOpenIndex={null}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-gray-100">
                <Link
                  href={`/contact?product=${encodeURIComponent(product.code)}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#ca9740] to-[#dfb45e] hover:from-[#b58635] hover:to-[#ca9740] text-[#0c121e] font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-[#d0a353]/30 hover:-translate-y-0.5 transition duration-300"
                >
                  <i className="fas fa-file-invoice-dollar"></i>
                  Request a Quote
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-100 text-gray-800 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-gray-200 hover:-translate-y-0.5 transition duration-300"
                >
                  <i className="fas fa-arrow-left text-[10px]"></i>
                  Back to Catalog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {product.specs && (
        <section className="py-20 bg-white">
          <div className="container max-w-5xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-10 border-b border-gray-200 pb-4 font-heading">
              Detailed Specifications
            </h3>

            <div className="space-y-10">
              {Object.entries(product.specs).map(([categoryName, specsObj]) => (
                <div
                  key={categoryName}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
                >
                  <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                    <h4 className="font-bold text-lg text-gray-800">{categoryName}</h4>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {Object.entries(specsObj).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex flex-col sm:flex-row px-6 py-4 hover:bg-gray-50 transition"
                      >
                        <div className="sm:w-1/3 text-sm font-semibold text-gray-700 mb-1 sm:mb-0 pr-4">
                          {key}
                        </div>
                        <div className="sm:w-2/3 text-sm text-gray-600">
                          {value as string}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
