import { useState, KeyboardEvent } from "react";
import { X } from "lucide-react";

export default function InsideTagInput() {
  const [tags, setTags] = useState<string[]>([]);
  const [value, setValue] = useState("");

  const addTag = (val: string) => {
    const v = val.trim();
    if (!v) return;
    if (tags.includes(v)) return;

    setTags([...tags, v]);
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(value);
      setValue("");
    }

    // backspace delete last tag if input empty
    if (e.key === "Backspace" && value === "" && tags.length > 0) {
      removeTag(tags[tags.length - 1]);
    }
  };

  return (
    <div className="w-full">
      <label className="text-sm font-medium mb-1 block">Techs</label>

      {/* INPUT WRAPPER */}
      <div className="flex flex-wrap items-center gap-2 border rounded-md px-3 py-2 min-h-[48px]">

        {/* TAGS */}
        {tags.map((tag) => (
          <div
            key={tag}
            className="flex items-center gap-1 bg-main text-sm px-2 py-1 rounded-lg"
          >
            {tag}
            <button
              onClick={() => removeTag(tag)}
              className="hover:text-red-600 cursor-pointer"
            >
              <X size={14} />
            </button>
          </div>
        ))}

        {/* REAL INPUT DI DALAM WRAPPER */}
        <input
          type="text"
          className="flex-1 min-w-[120px] outline-none placeholder:text-[13px] "
          placeholder={tags.length === 0 ? "input techs" : ""}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <p className="text-xs text-right text-gray-500 mt-1">
        {tags.join(", ").length}/500
      </p>
    </div>
  );
}
