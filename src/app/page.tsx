import CopyButton from "@/components/copy-button";
import IconSearch from "@/components/icon-search";
import Icons from "@/components/icons";
import ThemeButton from "@/components/theme-button";
import { importIcons } from "@/lib/utils";
import { Copy, Search } from "@struct-ui/icons";
import Link from "next/link";

const arrowIcons = importIcons("src/icons/arrows", "width='16' height='16'");
const abstractIcons = importIcons(
  "src/icons/abstract",
  "width='16' height='16'"
);
const musicIcons = importIcons("src/icons/music", "width='16' height='16'");
const logosIcons = importIcons("src/icons/logos", "width='16' height='16'");
const objectsIcons = importIcons("src/icons/objects", "width='16' height='16'");

const mergedIcons = [
  ...objectsIcons,
  ...abstractIcons,
  ...musicIcons,
  ...arrowIcons,
  ...logosIcons,
];

const Home = () => {
  return (
    <main className="w-full md:mt-12">
      <ThemeButton />
      <div className="mb-1">
        <h1 className="text-2xl md:text-3xl font-medium">Icons</h1>
        <Link
          href={"https://gaganbiswas.com"}
          rel="noopener noreferrer"
          target="_blank"
          className="dark:text-neutral-400 text-neutral-600 text-lg"
        >
          By Gagan Biswas
        </Link>
      </div>
      <IconSearch mergedIcons={mergedIcons} />
      <div className="my-5">
        <h2 className="text-xl mb-2 font-medium my-5 underline decoration-neutral-400 decoration-1 underline-offset-2">
          Usage
        </h2>
        <p className="text-lg my-5">
          You can always click on the icons above to copy the svg and use it in
          your desired framework.
        </p>
        <p className="text-lg my-5">
          All icons are available as individual React components. Install icon
          set from npm:
        </p>
        <CopyButton />
        <p className="text-lg my-5">
          Import the icons into your React project:
        </p>
        <p className="whitespace-pre bg-neutral-400/10 p-5 rounded-lg text-sm">
          <code>{`import { ArrowRight, Sun } from "@struct-ui/icons";

function MyComponent() {
  return (
    <div>
      <ArrowRight />
      <Sun />
    </div>
  );
}`}</code>
        </p>
      </div>
    </main>
  );
};

export default Home;
