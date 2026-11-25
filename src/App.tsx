import { useState, useMemo } from 'react';
import { PRODUCTS, Product } from './data/products';
import { Phone, MessageCircle, Search, X } from 'lucide-react';

function ProductCard({ product, onOpen }: { product: Product; onOpen: (p: Product) => void }) {
  const mainImage = product.images[0] || product.gallery[0];
  return (
    <div
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 cursor-pointer"
      onClick={() => onOpen(product)}
    >
      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        {mainImage && (
          <img
            src={mainImage}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-slate-800 mb-1">{product.name}</h3>
        {product.code && (
          <p className="text-sm text-blue-600 font-medium">קוד: {product.code}</p>
        )}
        {product.description && (
          <p className="text-sm text-slate-600 mt-2 line-clamp-2">{product.description}</p>
        )}
      </div>
    </div>
  );
}

function Lightbox({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const [index, setIndex] = useState(0);
  if (!product) return null;

  const allImages = [...product.images, ...product.gallery].filter(Boolean);
  const current = allImages[index] || allImages[0];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">{product.name} {product.code && `(קוד ${product.code})`}</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full"><X /></button>
        </div>
        {current && (
          <img src={current} alt="" className="w-full max-h-[60vh] object-contain bg-slate-50" />
        )}
        {allImages.length > 1 && (
          <div className="flex gap-2 p-4 overflow-x-auto">
            {allImages.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setIndex(i)}
                className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${i === index ? 'border-blue-500' : 'border-transparent'}`}
              />
            ))}
          </div>
        )}
        {product.description && <p className="p-4 text-slate-700">{product.description}</p>}
      </div>
    </div>
  );
}

export default function App() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return PRODUCTS;
    const q = query.toLowerCase();
    return PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      (p.code && p.code.includes(q)) ||
      p.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="min-h-screen" dir="rtl">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">קטלוג תעודות מחזור</h1>
            <p className="text-sm text-slate-500">עיצוב מודרני • מגוון רחב</p>
          </div>
          <div className="flex gap-2">
            <a href="tel:0522573846" className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium">
              <Phone className="w-4 h-4" /> התקשרו
            </a>
            <a href="https://wa.me/972522573846?text=שלום%2C%20אשמח%20לפרטים%20על%20תעודות%20מחזור" target="_blank" rel="noreferrer" className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              <MessageCircle className="w-4 h-4" /> וואטסאפ
            </a>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">תעודות מחזור יפות ומודרניות</h2>
          <p className="text-lg text-slate-600 mb-8">מגוון עיצובים לישראליות, אחדות, ירושלים, גיבורי על ועוד — לכל גן ילדים ובית ספר</p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="חפשו לפי שם, קוד או תיאור..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full pr-12 pl-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} onOpen={setSelected} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-slate-500 py-20">לא נמצאו תוצאות לחיפוש</p>
        )}
      </main>

      <footer className="bg-slate-900 text-white py-10 mt-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-4">לפרטים והזמנות</p>
          <div className="flex justify-center gap-4">
            <a href="tel:035032512" className="underline">משרד: 03-5032512</a>
            <a href="tel:0522573846" className="underline">נייד: 052-2573846</a>
          </div>
          <p className="text-sm text-slate-400 mt-6">קטלוג מודרני • כל המוצרים זהים למקור</p>
        </div>
      </footer>

      <Lightbox product={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
