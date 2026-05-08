import { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <h2>Like Button</h2>

      <button onClick={() => setLiked(!liked)}>
        {liked ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

export default LikeButton;