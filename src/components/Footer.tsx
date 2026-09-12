const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Block */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-pink-600 text-white font-bold px-2 py-1 rounded">DS</span>
              <span className="font-bold text-lg">Dev Stack</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex gap-4 mt-4 text-sm text-gray-600">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-pink-600">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-pink-600">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-pink-600">LinkedIn</a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Product</h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-pink-600">Home</a></li>
              <li><a href="#" className="hover:text-pink-600">Technologies</a></li>
              <li><a href="#" className="hover:text-pink-600">Projects</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Company</h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-pink-600">About</a></li>
              <li><a href="#" className="hover:text-pink-600">Contact</a></li>
              <li><a href="#" className="hover:text-pink-600">Careers</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Legal</h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-pink-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-600">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-3">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-pink-600">Privacy</a>
            <a href="#" className="hover:text-pink-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
