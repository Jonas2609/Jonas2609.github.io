import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-primary">
              Shelfie
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Built with care for Belgian pharmacists.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Your pharmacy's demand forecast, at a glance.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Product
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/features"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/alpha-access"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Alpha Access
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@shelfie.be"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Shelfie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;