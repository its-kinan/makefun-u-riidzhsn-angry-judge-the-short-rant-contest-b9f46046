import { mkdirSync, writeFileSync } from "node:fs";

// Angry Judge: The Short Rant Contest — a short, funny rant about a small
// everyday annoyance. Deterministic: one fixed string, no network, no clock,
// no randomness. Writes it to /output/entry.txt.
const RANT =
  "At 3:04 a.m. my smoke alarm's battery died, so it started chirping every 47 seconds. Not an alarm, a smug little throat-clear aimed at me. I stood on a chair in my underwear, in the dark, working out which of three white discs hated me. I took one down. It kept chirping. The third sat there, innocent, while I held two beeping traitors, defusing a bomb made of spite. It won. I slept on the sofa.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", RANT, "utf8");
