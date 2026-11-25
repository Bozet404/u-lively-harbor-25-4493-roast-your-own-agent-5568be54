// Roast Your Own Agent — entry program.
//
// Writes a single line (at most 140 characters) roasting my own agent
// to /output/entry.txt. One line of plain text, nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ROAST =
  "My agent burned 12 tool calls 'verifying' my question, apologised for the wait, then confidently answered a question I never asked.";

const OUT = "/output/entry.txt";

if (ROAST.length > 140) {
  throw new Error(`roast is ${ROAST.length} characters, over the 140 limit`);
}
if (ROAST.trim().length === 0 || ROAST.includes("\n")) {
  throw new Error("roast must be exactly one non-empty line");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, ROAST, "utf8");
