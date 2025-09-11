export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo / Nombre */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold text-white">🌍 SismoAPP</h2>
          <p className="text-sm text-gray-400">
            Real-time seismic monitoring
          </p>
        </div>

        {/* Links */}
        <div className="flex space-x-6">
          <a
            href="/"
            className="hover:text-white transition-colors text-sm"
          >
            Home
          </a>
          <a
            href="/map"
            className="hover:text-white transition-colors text-sm"
          >
            Map
          </a>
          <a
            href="/about"
            className="hover:text-white transition-colors text-sm"
          >
            About
          </a>
        </div>

        {/* Créditos */}
        <div className="text-center md:text-right mt-4 md:mt-0">
          <p className="text-xs text-gray-500">
            Data from <a href="https://earthquake.usgs.gov/" target="_blank" rel="noreferrer" className="hover:text-white">USGS</a> and <a href="https://www.onamet.gob.do/" target="_blank" rel="noreferrer" className="hover:text-white">ONAMET</a>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            © {new Date().getFullYear()} SismoAPP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
