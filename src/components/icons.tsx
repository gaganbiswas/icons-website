"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import copy from "copy-to-clipboard";

type Props = {
  icons: IconProps[];
};

export type IconProps = {
  name: string;
  tags: string[];
  svg: any;
};

const Icon = ({
  icon,
  setHasCopied,
  setCopiedSvg,
}: {
  icon: IconProps;
  setHasCopied: Dispatch<SetStateAction<boolean>>;
  setCopiedSvg: Dispatch<SetStateAction<any>>;
}) => {
  return (
    <button
      title={icon.name}
      className="hover:bg-neutral-100 dark:hover:bg-neutral-50/10 w-10 h-10 rounded-md flex items-center justify-center"
      onClick={() => {
        copy(icon.svg);
        setCopiedSvg(icon.svg);
        setHasCopied(true);
      }}
    >
      <span dangerouslySetInnerHTML={{ __html: icon.svg }} className="flex" />
    </button>
  );
};

const Icons = ({ icons }: Props) => {
  const [hasCopied, setHasCopied] = React.useState(false);
  const [copiedSvg, setCopiedSvg] = useState("");

  React.useEffect(() => {
    if (hasCopied)
      setTimeout(() => {
        setHasCopied(false);
        setCopiedSvg("");
      }, 2000);
  }, [hasCopied]);

  return (
    <>
      <div className="flex flex-wrap gap-5">
        {icons.map((icon) => (
          <Icon
            icon={icon}
            key={icon.name}
            setHasCopied={setHasCopied}
            setCopiedSvg={setCopiedSvg}
          />
        ))}
      </div>
      {hasCopied ? (
        <div className="fixed z-40 bottom-10 bg-neutral-950 dark:bg-neutral-50 py-2 px-4 rounded-md text-neutral-50 dark:text-neutral-950 flex items-center gap-4 left-1/2 w-max -translate-x-1/2">
          <span dangerouslySetInnerHTML={{ __html: copiedSvg }} />
          <span className="mt-0.5">SVG copied to clipboard</span>
        </div>
      ) : null}
    </>
  );
};

export default Icons;
