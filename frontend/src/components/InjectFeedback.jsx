import React, { useState } from "react";
import { Textarea } from "components/ui/textarea";
import { Button } from "components/ui/button";

export default function InjectFeedback({ injectId, onSave }) {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");

  const handleSave = () => {
    onSave(injectId, { rating, comment });
    setRating(null);
    setComment("");
  };

  return (
    <div className="border-t pt-3 mt-3">
      <p className="text-sm font-semibold mb-1 text-gray-700">Your Feedback</p>
      <div className="flex items-center space-x-2 mb-2">
        {[1, 2, 3, 4, 5].map((val) => (
          <button
            key={val}
            className={`px-2 py-1 border rounded ${
              rating === val ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
            onClick={() => setRating(val)}
          >
            {val}
          </button>
        ))}
      </div>
      <Textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Optional comment..."
        rows={2}
        className="mb-2"
      />
      <Button variant="secondary" size="sm" onClick={handleSave}>
        Save Feedback
      </Button>
    </div>
  );
}