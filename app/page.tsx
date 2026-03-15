import { Download, FileText, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const POSTERS = [
  {
    id: 'metabolic-pathways',
    title: 'Metabolic Pathways',
    description: 'A comprehensive map of metabolic reactions and their connections in various organisms.',
    filename: 'metabolic-pathways.pdf',
    imageSeed: 'biology,cells',
  },
  {
    id: 'cellular-processes',
    title: 'Cellular and Molecular Processes',
    description: 'Detailed illustrations of the molecular mechanisms underlying cellular functions.',
    filename: 'cellular-processes.pdf',
    imageSeed: 'dna,molecule',
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            <span>Reference Material</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Roche Biochemical Pathways
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
            The classic reference for biological sciences researchers and biochemists. 
            Explore the intricate networks of metabolic reactions and cellular processes. 
            Download the high-resolution posters below.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-5xl mx-auto w-full py-16 px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {POSTERS.map((poster) => (
            <div key={poster.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col transition-all hover:shadow-md hover:border-slate-300">
              <div className="relative h-64 w-full bg-slate-100 border-b border-slate-100">
                <Image
                  src={`https://picsum.photos/seed/${poster.imageSeed}/800/600`}
                  alt={poster.title}
                  fill
                  className="object-cover opacity-90 mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-2xl font-semibold text-slate-900 leading-tight">
                    {poster.title}
                  </h2>
                </div>
                <p className="text-slate-600 mb-8 flex-grow text-base leading-relaxed">
                  {poster.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <a 
                    href={`/${poster.filename}`}
                    download
                    className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors w-full sm:w-auto shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                  <a 
                    href={`/${poster.filename}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 px-5 py-2.5 rounded-lg font-medium transition-colors w-full sm:w-auto shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View in Browser
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 mt-auto">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>A public good project.</p>
        </div>
      </footer>
    </div>
  );
}
