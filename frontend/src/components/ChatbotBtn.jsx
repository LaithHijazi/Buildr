/* eslint-disable react/prop-types */
const ChatbotBtn = ({ url, buttonText }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="external-link-button"
    >
      {buttonText}
    </a>
  );
};

export default ChatbotBtn;
