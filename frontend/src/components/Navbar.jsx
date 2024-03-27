import { Link } from "react-router-dom";
import ChatbotBtn from "./ChatbotBtn";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          {" "}
          <h1>Buildr</h1>
        </Link>
        <ChatbotBtn
          url="https://buildr-56plmfsjduft3xxjqsbqzf.streamlit.app/"
          buttonText="Chat with an AI trainer!"
        />
      </div>
    </header>
  );
};

export default Navbar;
