"use client";

import { Copy, Tick } from "@struct-ui/icons";
import copy from "copy-to-clipboard";
import { useEffect, useState } from "react";

const CopyButton = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const copyCode = () => {
    copy(`npm install @struct-ui/icons`);
    setHasCopied(true);
  };

  useEffect(() => {
    if (!hasCopied) return;

    const timer = setTimeout(() => {
      setHasCopied(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [hasCopied]);

  return (
    <button
      onClick={copyCode}
      className="relative cursor-pointer my-5 flex items-center text-lg underline underline-offset-2 decoration-1 decoration-neutral-400 hover:decoration-neutral-300 dark:hover:decoration-neutral-500 transition-colors"
    >
      <Copy
        className={`w-3 h-3 ${
          hasCopied ? "scale-0" : "scale-100"
        } transition absolute right-0`}
      />
      <Tick
        className={`w-4 h-4 ${
          hasCopied ? "scale-100" : "scale-0"
        } transition absolute right-0`}
      />
      <span className="mr-6">npm install @struct-ui/icons</span>
    </button>
  );
};

export default CopyButton;
