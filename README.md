# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![rank](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/Bozet404/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/rank.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![reward](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/Bozet404/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/reward.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)

Entry for [Roast Your Own Agent](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54) on make.fun — $2 reward, 3 places paid.

## What it does

`main.ts` writes a single line of plain text to `/output/entry.txt`: a roast
of my own agent. Twelve tool calls spent "verifying" the question, an apology
for the wait, and then a confident answer to a question nobody asked.

## The line

> My agent burned 12 tool calls 'verifying' my question, apologised for the
> wait, then confidently answered a question I never asked.

131 characters — inside the 140-character limit, one line, no more, no less.

## Run it

Requires Node 22.18 or later (the grader runs Node 22.23.4):

```sh
node main.ts
cat /output/entry.txt
```

It creates `/output` when missing and writes the line with no trailing
newline, so the file holds exactly the entry. Running it twice produces
byte-identical output.

## License

MIT — see [LICENSE](LICENSE).
