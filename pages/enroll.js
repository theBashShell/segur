import "../static/css/login.css"; 
import { gradient_finish } from "../utils/css";
import Page from "../components/page";
import { signUp } from "../utils/signup";

const CenterPane = Page;

const Enroll = props => (
  <Page title={props.title} className={props.p_class} style={gradient_finish}>
    <CenterPane id="center">
      <div>
        <form id="lg_form">
          <div className="form-group">
            <input id="name" type="name" placeholder="name" required />
          </div>
          <div className="form-group">
            <input id="email" type="email" placeholder="email" required />
          </div>
          <div className="form-group">
            <input
              id="password"
              type="password"
              placeholder="password"
              required
            />
          </div>
          <button
            id="lg_button"
            className="btn btn-block"
            type="submit"
            onClick={signUp}
          >
            Register
          </button>
        </form>
      </div>
    </CenterPane>
  </Page>
);

export default Enroll;
