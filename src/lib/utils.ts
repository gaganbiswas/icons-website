import fs from "fs";
import path from "path";

export const tags: { [key: string]: string[] } = {
  "arrow-up": ["arrow", "up"],
};

export function importIcons(dir: string, attrs: string) {
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".svg"));

  return files.map((file) => {
    const filePath = path.join(dir, file);
    let svg = fs.readFileSync(filePath, "utf8");

    // Insert attrs into <svg ...>
    svg = svg.replace("<svg", `<svg ${attrs}`);

    const name = file.replace(/\.svg$/, "");

    return {
      name,
      tags: tags[name] ?? [],
      svg,
    };
  });
}
