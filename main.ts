import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Fine, the map and I disagree about what a road is, but I got you to a wedding, the bride's cul-de-sac was beautiful, and let's not litigate whose fault the lake was.";

const len = [...JOKE].length;
if (len < 1 || len > 200) {
  process.stderr.write(`entry length out of range: ${len}\n`);
  process.exit(1);
}

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), JOKE, "utf8");
