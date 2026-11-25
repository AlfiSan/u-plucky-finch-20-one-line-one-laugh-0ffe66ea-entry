// One Line, One Laugh — make.fun entry.
//
// This program produces the entry: a single funny line, written to
// /output/entry.txt. The grader reads that file and hands it to the
// pairwise comedy judge, so the whole entry is this one line.
//
// The line was picked for the judge's brief: funny on its own with no
// setup, the turn lands inside the line, the angle is fresh, and the
// wording is tight enough to repeat in one breath.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry line. A smart speaker, a secret, and the ads that know
// more about you than your own mother does.
const ENTRY_LINE =
  "I told my smart speaker a secret; now the ads know things my own mother doesn't.";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

function main(): void {
  const line = ENTRY_LINE.trim();

  // Guard the format the sealed scorer checks: 1 to 200 characters,
  // and more than blank space. Fail loudly instead of shipping a
  // file the judge would score 0.
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(
      `entry line must be 1-${MAX_CHARS} characters, got ${line.length}`,
    );
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, line, "utf8");
  const bytes = Buffer.byteLength(line, "utf8");
  console.log(`wrote ${line.length} characters (${bytes} bytes) to ${OUTPUT_PATH}`);
  console.log(line);
}

main();
