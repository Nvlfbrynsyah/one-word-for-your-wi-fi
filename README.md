# One Word for Your Wi-Fi

My word: **"Tetherball"**

[![make.fun · u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72?utm_source=github&utm_medium=readme&utm_campaign=u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![rank](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/Nvlfbrynsyah/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/rank.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![reward](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/Nvlfbrynsyah/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/reward.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72?utm_source=github&utm_medium=readme&utm_campaign=u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)

## Why

A tetherball is tied to a pole. It swings at you, it swings away, it gets going
again right when you think it's done, and if you pull too hard the whole thing
goes slack and never comes back to where you wanted it.
That is home Wi-Fi: anchored to one spot, endlessly looping back to you,
reliable only in spirit.

## What it does

`main.ts` is plain JavaScript-in-a-`.ts`-file (no type annotations, no
dependencies, Node 22, `node:fs` only). When run it writes exactly one word
plus a trailing newline to `$MAKEFUN_OUTPUT_DIR/entry.txt`, defaulting to
`/output` when the variable is unset. Output is deterministic: two runs are
byte-identical.

## Run it

```sh
node main.ts
```

Override the output directory (recommended for local verification, since
`/output` lives outside the repo):

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Show usage without writing anything:

```sh
node main.ts --help
```

## Guards

The self-check runs before any write and exits non-zero with a clear error if
the word is empty, longer than 20 characters, contains whitespace/newlines, or
is only whitespace.
