import { useEffect, useState } from 'react';
import axios from 'axios';

interface Page {
  id: string;
  title: string;
  content: {
    children: Array<{
      text?: string;
      [key: string]: unknown;
    }>;
    [key: string]: unknown;
  };
}

export function PayloadData() {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await axios.get('/api/pages');
        setPages(response.data.docs);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch pages from PayloadCMS');
        setLoading(false);
        console.error(err);
      }
    };

    fetchPages();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {loading ? (
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-slate-100/50">
            <div className="animate-pulse">
              <div className="h-8 w-64 bg-slate-200 rounded mb-4"></div>
              <div className="space-y-3">
                <div className="h-4 w-full bg-slate-200 rounded"></div>
                <div className="h-4 w-5/6 bg-slate-200 rounded"></div>
                <div className="h-4 w-4/6 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        ) : error ? (
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-red-100/50">
            <p className="text-red-600">{error}</p>
          </div>
        ) : (
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-slate-100/50">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Pages from PayloadCMS</h2>
            {pages.length === 0 ? (
              <p className="text-slate-600">No pages found. Add some in the admin panel at /admin</p>
            ) : (
              <div className="space-y-4">
                {pages.map((page) => (
                  <div key={page.id} className="bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-slate-100/50 hover:shadow-sm transition-all duration-300">
                    <h3 className="text-xl font-semibold text-slate-900">{page.title}</h3>
                    {/* Render rich text content if needed */}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
} 