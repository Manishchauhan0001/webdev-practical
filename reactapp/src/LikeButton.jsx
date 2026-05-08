import { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <h2>Like Button</h2>

      <button
        onClick={() => setLiked(!liked)}
        style={{
          backgroundColor: liked ? "red" : "lightgray",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>
    </div>
  );
}

export default LikeButton;
