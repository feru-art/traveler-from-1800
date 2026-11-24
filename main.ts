// One Sentence for a Traveler from 1800 — V1 (market square).
// One sentence explaining the modern internet to a person from 1800:
// a market square stands for two-way talk, questions, trade and learning.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "It is a market square where towns from all over the earth meet at once, and anyone may speak, ask, trade, or learn in the time it takes to blink.";

// Gate self-check (RULES.txt): 1-200 characters, one sentence, not only whitespace.
const chars = [...SENTENCE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`sentence is ${chars} characters, gate needs 1-200`);
}
if (SENTENCE.trim().length === 0 || (SENTENCE.match(/\./g) ?? []).length !== 1) {
  throw new Error("sentence must be exactly one sentence ending in one period");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
