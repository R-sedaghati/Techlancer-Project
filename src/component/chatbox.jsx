import img from "../images/team4.jpg";
const ChatBox = () => {
  return (
    <>
      {/* <!-- Chatbox --> */}
      <div className="chatbox-wrapper">
        <div className="chatbox-toggle">
          <i className="bx bx-message-dots"></i>
        </div>
        <div className="chatbox-message-wrapper">
          <div className="chatbox-message-header">
            <div className="chatbox-message-profile">
              <img
                src={img}
                alt=""
                className="chatbox-message-image"
              />
              <div>
                <h4 className="chatbox-message-name text-white">
                  Reza Sedaghati
                </h4>
                <p className="chatbox-message-status">online</p>
              </div>
            </div>
            <div className="chatbox-message-dropdown">
              <i className="bx bx-dots-vertical-rounded text-white chatbox-message-dropdown-toggle"></i>
              <ul className="chatbox-message-dropdown-menu">
                <li>
                  <a href="#">Search</a>
                </li>
                <li>
                  <a href="#">Report</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="chatbox-message-content">
            <h4 className="chatbox-message-no-message">
              You don't have message yet!
            </h4>
          </div>
          <div className="chatbox-message-bottom">
            <form
              action="#"
              className="chatbox-message-form d-flex justify-content-between"
            >
              <textarea
                rows="1"
                placeholder="Type message..."
                className="chatbox-message-input"
              ></textarea>
              <button type="submit" className="chatbox-message-submit">
                <i className="bx bx-send"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- End of Chatbox --> */}
    </>
  );
};

export default ChatBox;
