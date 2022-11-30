#!/usr/bin/env node

import { roll } from "../lib/roll.js"
import minimist from "minimist";

const args = minimist(process.argv.slice(2));

const sides = args.sides;
const dice = args.dice;
const rolls = args.rolls;
const results = roll(sides, dice, rolls);

console.log(JSON.stringify(results));