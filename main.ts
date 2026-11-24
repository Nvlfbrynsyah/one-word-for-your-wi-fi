#!/usr/bin/env node
"use strict";

import fs from "node:fs";
import path from "node:path";

const WORD = "Tetherball";
const DEFAULT_DIR = "/output";

const USAGE =
  "Usage: node main.ts\n" +
  "\n" +
  "Writes the single word " + JSON.stringify(WORD) + " plus a trailing newline\n" +
  "to $MAKEFUN_OUTPUT_DIR/entry.txt (default directory: " + DEFAULT_DIR + ").\n" +
  "Output is deterministic: two runs produce byte-identical files.\n" +
  "\n" +
  "Options:\n" +
  "  -h, --help   Print this help text and exit 0 without writing anything.\n";

function validate(word) {
  if (typeof word !== "string") {
    return "word must be a string";
  }
  var chars = Array.from(word);
  if (chars.length < 1) {
    return "word must be at least 1 character";
  }
  if (chars.length > 20) {
    return "word must be at most 20 characters (got " + chars.length + ")";
  }
  if (word.trim() === "") {
    return "word must not be only whitespace";
  }
  if (/\s/.test(word)) {
    return "word must not contain spaces or newlines";
  }
  if (/[\u0000-\u001f\u007f]/.test(word)) {
    return "word must not contain control characters";
  }
  return null;
}

function main() {
  var args = process.argv.slice(2);
  if (args.includes("-h") || args.includes("--help")) {
    process.stdout.write(USAGE);
    process.exit(0);
  }

  var err = validate(WORD);
  if (err) {
    process.stderr.write("Error: invalid word " + JSON.stringify(WORD) + ": " + err + "\n");
    process.exit(1);
  }

  var dir = process.env.MAKEFUN_OUTPUT_DIR || DEFAULT_DIR;
  fs.mkdirSync(dir, { recursive: true });

  var target = path.join(dir, "entry.txt");
  var tmp = target + ".tmp";
  fs.writeFileSync(tmp, WORD + "\n", { encoding: "utf8" });
  fs.renameSync(tmp, target);

  process.stdout.write("Wrote " + JSON.stringify(WORD) + " to " + target + "\n");
}

main();
