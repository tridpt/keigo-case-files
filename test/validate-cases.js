/**
 * Automated Graph Reachability & Integrity Validator for all 5 Keigo Cases
 */
const fs = require('fs');
const path = require('path');

global.window = { CASES: [] };

const casesDir = path.join(__dirname, '..', 'public', 'js', 'cases');
const files = fs.readdirSync(casesDir).filter((f) => f.endsWith('.js')).sort();

for (const f of files) {
  require(path.join(casesDir, f));
}

const cases = global.window.CASES;
console.log(`Loaded ${cases.length} cases: ${cases.map((c) => c.id).join(', ')}`);

let errors = 0;

for (const c of cases) {
  const allClueIds = Object.keys(c.clues);
  const unlocked = new Set();

  const hasReqs = (reqs) => !reqs || reqs.every((r) => unlocked.has(r));

  let changed = true;
  while (changed) {
    changed = false;
    // 1. Locations & points
    for (const loc of c.locations) {
      if (!hasReqs(loc.requires)) continue;
      for (const pt of loc.points) {
        if (!hasReqs(pt.requires)) continue;
        if (pt.clue && !unlocked.has(pt.clue)) {
          unlocked.add(pt.clue);
          changed = true;
        }
      }
    }
    // 2. Suspect topics & presents
    for (const sus of c.suspects) {
      for (const top of sus.topics) {
        if (top.clue && !unlocked.has(top.clue)) {
          unlocked.add(top.clue);
          changed = true;
        }
      }
      if (sus.presents) {
        for (const [reqClue, presObj] of Object.entries(sus.presents)) {
          if (unlocked.has(reqClue) && presObj.clue && !unlocked.has(presObj.clue)) {
            unlocked.add(presObj.clue);
            changed = true;
          }
        }
      }
    }
    // 3. Combos
    for (const cb of c.combos) {
      if (unlocked.has(cb.a) && unlocked.has(cb.b) && !unlocked.has(cb.result)) {
        unlocked.add(cb.result);
        changed = true;
      }
    }
  }

  // Check if any defined clue is unreachable
  for (const cid of allClueIds) {
    if (!unlocked.has(cid)) {
      console.error(`[ERROR] Case ${c.id}: Clue '${cid}' is UNREACHABLE!`);
      errors++;
    }
  }

  // Check combos reference valid clues
  for (const cb of c.combos) {
    for (const k of [cb.a, cb.b, cb.result]) {
      if (!c.clues[k]) {
        console.error(`[ERROR] Case ${c.id}: Combo references missing clue '${k}'`);
        errors++;
      }
    }
  }

  // Check hints reference valid clues
  for (const h of c.hints) {
    if (!c.clues[h.until]) {
      console.error(`[ERROR] Case ${c.id}: Hint references missing clue '${h.until}'`);
      errors++;
    }
  }

  // Check questions
  for (const q of c.questions) {
    if (typeof q.answer !== 'number' || q.answer < 0 || q.answer >= q.options.length) {
      console.error(`[ERROR] Case ${c.id}: Question '${q.id}' has invalid answer index`);
      errors++;
    }
    for (const sup of q.support || []) {
      if (!c.clues[sup]) {
        console.error(`[ERROR] Case ${c.id}: Question '${q.id}' references missing support clue '${sup}'`);
        errors++;
      }
    }
  }

  console.log(
    `✓ [${c.id}] ${c.title}: ${unlocked.size}/${allClueIds.length} clues reachable, ${c.combos.length} combos, ${c.questions.length} deduction questions verified.`
  );
}

if (errors > 0) {
  console.error(`Validation failed with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log(`ALL ${cases.length} HIGASHINO KEIGO CASES PASSED 100% GRAPH REACHABILITY & INTEGRITY CHECKS!`);
}
