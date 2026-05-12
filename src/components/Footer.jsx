const Footer = () => {
  return (
    <footer className="px-10 py-10 border-t border-gray-800 text-gray-400">
      <div className="grid md:grid-cols-4 gap-6">
        <div>
          <h1 className="text-primary font-bold text-lg">Einstellen.ai</h1>
          <p className="mt-2 text-sm">
            AI recruitment platform connecting talent globally.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-2">Company</p>
          <p>About</p>
          <p>Careers</p>
        </div>

        <div>
          <p className="font-semibold mb-2">Product</p>
          <p>Features</p>
          <p>Pricing</p>
        </div>

        <div>
          <p className="font-semibold mb-2">Legal</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>

      <p className="text-center mt-10 text-sm">
        © 2025 Einstellen AI
      </p>
    </footer>
  );
};

export default Footer;