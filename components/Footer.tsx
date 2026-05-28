export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/[0.06] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Subham Dangar. Built with Next.js & AI.
          </p>
          <p className="text-slate-600 text-xs">
            Powered by intelligent engineering
          </p>
        </div>
      </div>
    </footer>
  );
}
