const Footer = () => (
  <footer className="bg-neutral text-neutral-content mt-16">
    <div className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
      <div>
        <h3 className="font-bold text-lg">HERO.IO</h3>
        <p className="opacity-80">We build productive apps for millions.</p>
      </div>
      <div className="text-right">
        <p className="opacity-80">Social Links</p>
        <div className="flex md:justify-end gap-2 mt-2">
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Instagram</a>
        </div>
        <div>
        <p>© {new Date().getFullYear()} — all rights reserved.</p>
      </div>
      </div>
    </div>
  </footer>
);
export default Footer;
