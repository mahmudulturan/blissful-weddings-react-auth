import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="" data-aos="fade-down">
      <div className="w-11/12 mx-auto">
      <footer className="py-10 text-base-content">
        <div className="footer">
        <aside>
          <img className="w-60" src={logo} alt="" />
          <p>Providing service since 2020</p>
        </aside>
        <nav>
          <header className="footer-title">Company</header>
          <Link to='/about' className="link link-hover">About us</Link>
          <Link to='/contact' className="link link-hover">Contact</Link>
          <Link to='/services' className="link link-hover">Services</Link>
          <Link to='/gallery' className="link link-hover">Gallery</Link>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Footer;
