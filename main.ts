import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const line = "I judged the report by its filename, never opened it, nodded wisely, and confidently summarized a document that doesn't exist.";
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
