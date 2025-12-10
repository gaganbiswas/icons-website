"use client";

import { Search } from "@struct-ui/icons";
import Icons, { IconProps } from "./icons";
import { useMemo, useState } from "react";

const IconSearch = ({ mergedIcons }: { mergedIcons: IconProps[] }) => {
  const [query, setQuery] = useState("");

  const filtered = mergedIcons.filter((icon) => {
    const q = query.toLowerCase();
    return (
      icon.name.toLowerCase().includes(q) ||
      icon.tags?.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <>
      <div className="text-lg my-5 relative">
        <Search className="absolute left-0 bottom-2 text-neutral-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search ${mergedIcons.length} icons...`}
          className="pl-7 border-b border-neutral-400 focus:border-neutral-300 dark:focus:border-neutral-500 w-2/3 outline-none"
        />
      </div>

      <div className="my-5">
        <Icons icons={filtered} />
      </div>
    </>
  );
};

export default IconSearch;
