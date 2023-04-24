import logo from "../src/images/logo.png";
import icon from "../src/images/down-icon.png";

export default function Header() {
  return (
    <div className="header">
      <nav>
        <img src={logo} className="logo" />
        <div>
          <button className="language-btn">
            English <img src={icon} />
          </button>
          <button>Sign In </button>
        </div>
      </nav>

      <div className="header-content">
        <h1>Esther Keziah.</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className="email-signup">
          <input type="email" placeholder="Email address" required />
          <button type="submit">Get Started</button>
        </form>
      </div>
    </div>
  );
}
