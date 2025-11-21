import Icons from "@/components/icons/Icons";
import { tags } from "@/data/tags";
import CodeBlock from "@/components/shared/CodeBlock";
import Hero from "@/components/icons/Hero";

function importIcons(r: __WebpackModuleApi.RequireContext, attrs: string) {
  return r
    .keys()
    .filter((fileName) => fileName.startsWith("./"))
    .map((fileName) => {
      let name = fileName.slice(2).replace(/\.svg$/, "");
      return {
        name,
        tags: tags[name] ?? [],
        svg: r(fileName).default.replace(">", ` ${attrs}>`),
      };
    });
}

const arrowIcons = importIcons(
  require.context(`../icons/arrows`, false, /\.svg$/),
  "width='16' height='16'"
);

const abstractIcons = importIcons(
  require.context(`../icons/abstract`, false, /\.svg$/),
  "width='16' height='16'"
);

const musicIcons = importIcons(
  require.context(`../icons/music`, false, /\.svg$/),
  "width='16' height='16'"
);

const logosIcons = importIcons(
  require.context(`../icons/logos`, false, /\.svg$/),
  "width='16' height='16'"
);

const objectsIcons = importIcons(
  require.context(`../icons/objects`, false, /\.svg$/),
  "width='16' height='16'"
);

const npmCode = `npm install @struct-ui/icons`;

const reactCode = `import { ArrowRight, Sun } from "@struct-ui/icons";

function MyComponent() {
  return (
    <div>
      <ArrowRight />
      <Sun />
    </div>
  );
}`;

export default function Home() {
  return (
    <section className="mt-12 w-full">
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        <Hero npmCode={npmCode} />
        <div
          className="mt-12 md:mt-14 bg-white w-full rounded-md border border-gray-300"
          style={{ boxShadow: "0 0 50px 12px rgb(0 0 0 / 0.075)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 p-8 gap-10">
            <Icons title={"Objects"} icons={objectsIcons} />
            <div className="flex flex-col gap-10">
              <Icons title={"Abstract"} icons={abstractIcons} />
              <Icons title={"Music"} icons={musicIcons} />
            </div>
            <div className="flex flex-col gap-10">
              <Icons title={"Arrows"} icons={arrowIcons} />
              <Icons title={"Logos"} icons={logosIcons} />
            </div>
          </div>
          <div className="h-[1px] bg-gray-300" />
          <div className="p-8 flex items-start flex-wrap gap-10">
            <div className="w-full flex flex-col flex-1">
              <h2 className="font-semibold text-xl text-gray-900">Usage</h2>
              <p className="mt-3 text-gray-800 leading-relaxed">
                You can always click on the icons above to copy the svg and use
                it in your desired framework.
              </p>
              <h3 className="mt-6 font-semibold text-lg text-gray-900">
                React components
              </h3>
              <p className="my-4 text-gray-800 leading-relaxed">
                All icons are available as individual React components. Install
                Struct Icons from npm:
              </p>
              <CodeBlock code={npmCode} language={"jsx"} />
              <p className="my-4 text-gray-800 leading-relaxed">
                Import the icons into your React project:
              </p>
              <CodeBlock code={reactCode} language={"jsx"} />
            </div>

            <div className="flex flex-col items-start">
              <h2 className="font-semibold text-xl text-gray-900">Assets</h2>
              <ul className="mt-3 text-gray-800 text-sm">
                <li className="underline decoration-gray-300">
                  <a
                    href="https://raw.githubusercontent.com/gaganbiswas/struct-icons/main/struct-icons.zip"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download SVG
                  </a>
                </li>
                <li className="mt-2 underline decoration-gray-300">
                  <a
                    href="https://www.npmjs.com/package/@struct-ui/icons"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Install with npm
                  </a>
                </li>
                <li className="mt-2 underline decoration-gray-300">
                  <a
                    href="https://github.com/gaganbiswas/icons"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Github
                  </a>
                </li>
              </ul>
              <h2 className="mt-8 font-semibold text-xl text-gray-900">
                License
              </h2>
              <p className="mt-3 text-gray-800 text-sm leading-relaxed">
                Licensed under the{" "}
                <a
                  className="underline decoration-gray-300"
                  href="https://github.com/gaganbiswas/icons/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MIT License
                </a>
                .
                <br />
                Copyright &copy; 2023-present.
              </p>
              <a
                target="_blank"
                href="https://github.com/gaganbiswas/icons/issues/new?assignees=gaganbiswas&labels=enhancement&projects=&template=icon-request.md&title=%5BIcon+Request%5D"
                rel="noopener noreferrer"
                className="mt-8 bg-emerald-100/75 flex items-center justify-center px-4 py-2 rounded-md text-sm text-emerald-900 font-semibold hover:bg-emerald-50 transition-colors"
              >
                Request an icon
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
