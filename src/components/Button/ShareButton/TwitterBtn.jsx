import { Twitter } from "react-icons/fa";

const TwitterBtn = ({ url }) => {
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;

  return (
    <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
      <div className="rounded-lg bg-npm-blue p-2.5 hover:bg-npm-hover-blue ease-in-out duration-200 cursor-pointer">
        <Twitter />
      </div>
    </a>
  );
};

export default TwitterBtn;
