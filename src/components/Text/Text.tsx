import { useState } from "react";
import styles from "./Text.module.css";

interface Props {
  text: string,
  length: number;
}

const Text = ( {text, length}: Props) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div>
      <p>
        {isTruncated ? `${text.slice(0, length)}...` : text}
        <button onClick={toggleTruncate}>
          {isTruncated ? 'Read more' : 'Show less'}
        </button>
      </p>
    </div>
  );
}

export default Text