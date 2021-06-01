### Hexlet tests and linter status:
[![Actions Status](https://github.com/mrn-mrz/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/mrn-mrz/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/6ccccf7be6c10c8da3ea/maintainability)](https://codeclimate.com/github/mrn-mrz/frontend-project-lvl2/maintainability)
[![Node CI](https://github.com/mrn-mrz/frontend-project-lvl2/actions/workflows/tests.yml/badge.svg)](https://github.com/mrn-mrz/frontend-project-lvl2/actions/workflows/tests.yml)
[![Test Coverage](https://api.codeclimate.com/v1/badges/6ccccf7be6c10c8da3ea/test_coverage)](https://codeclimate.com/github/mrn-mrz/frontend-project-lvl2/test_coverage)
____

# The configuration file compare tool

## Installation
This program requires node.js (version 13.0 or higher).

Clone this repository and run:
```
  make install
  make link
```

## Compare JSON files
```
$ gendiff file1.json file2.json
```
**flat JSON files**
[![asciicast](https://asciinema.org/a/2UQ5Gnppm5wNEf3wAl3bUT1ya.svg)](https://asciinema.org/a/2UQ5Gnppm5wNEf3wAl3bUT1ya)

**recursive JSON files**
[![asciicast](https://asciinema.org/a/hT37WDEWoQ2CTIGyIxMJXFzYP.svg)](https://asciinema.org/a/hT37WDEWoQ2CTIGyIxMJXFzYP)

## Compare YAML files
```
$ gendiff file1.yml file2.yml
```
**flat YAML files**
[![asciicast](https://asciinema.org/a/0Gna8CegvOHYfxYvQqLqBbOfi.svg)](https://asciinema.org/a/0Gna8CegvOHYfxYvQqLqBbOfi)

**recursive YAML files**
[![asciicast](https://asciinema.org/a/zsPK0lRahMmGOrUeHzo7Ug9OB.svg)](https://asciinema.org/a/zsPK0lRahMmGOrUeHzo7Ug9OB)

## Compare with plain formatter
```
$ gendiff --format plain file1.json file2.json
```
[![asciicast](https://asciinema.org/a/GwWEgyBNnap5LylUqiRMy2qlM.svg)](https://asciinema.org/a/GwWEgyBNnap5LylUqiRMy2qlM)

## Compare with JSON formatter
```
$ gendiff --format json file1.json file2.json
```
[![asciicast](https://asciinema.org/a/pzGMHjXzgTnjMvaso0Yup4kvB.svg)](https://asciinema.org/a/pzGMHjXzgTnjMvaso0Yup4kvB)
