# TypeScript

A staged series covering TypeScript's type system, from object interfaces to nominal
typing. Each `task_N` directory is independent — its own `package.json`, but an
identical webpack + `ts-loader` toolchain and `tsconfig.json` across all of them.

## What this covers
| Concept | How it's used here |
|---------|--------------------|
| Interfaces | Shape of objects (`Student`, `Teacher`), with `readonly`, optional (`?`), and index signatures (`[propName: string]: any`) |
| Interface extension | `Directors extends Teacher` |
| Function & constructor interfaces | Call signature `printTeacherFunction`, constructor signature `StudentConstructor` (`new (...) => ...`) |
| Classes | `implements` an interface, `private` members, constructor |
| Union types | `salary: number \| string`, return `Director \| Teacher` |
| Type guards | `typeof`, `instanceof`, and a user-defined type predicate `employee is Director` |
| String literal types | `type Subjects = 'Math' \| 'History'` |
| Ambient namespaces | `.d.ts` declaration file + `declare function` typing a plain `.js` module, wired with `/// <reference>` |
| Namespaces & declaration merging | `namespace Subjects` split across files; one `Teacher` interface merged from multiple files |
| Nominal typing | Brand convention (`_majorCreditBrand: void`) so structurally identical types stay distinct |

## What each task adds
| Task | What it adds over the previous one |
|------|------------------------------------|
| `task_0` | `Student` interface; builds a typed `Student[]` and renders it into a DOM `<table>` |
| `task_1` | `Teacher` interface (`readonly`, optional `yearsOfExperience`, index signature); `Directors` extending it; a function-type interface `printTeacher`; `StudentClass` implementing an interface with a constructor signature |
| `task_2` | Advanced types — `createEmployee` returning a union; the `isDirector` type-predicate guard driving `executeWork`; the `Subjects` string-literal type in `teachClass` |
| `task_3` | Ambient namespaces — `crud.js` (untyped) typed by `crud.d.ts` via `declare function`, shared `RowID`/`RowElement` from `interface.ts`, consumed in `main.ts` |
| `task_4` | Namespaces + declaration merging — `Subjects` namespace across files, `Teacher` interface merged with per-subject `experienceTeaching*` fields, `Subject` base class with `Cpp`/`Java`/`React` subclasses and `getAvailableTeacher` |
| `task_5` | Nominal typing — `MajorCredits`/`MinorCredits` brand interfaces and `sumMajorCredits`/`sumMinorCredits` that won't accept the wrong credit kind despite identical shape |

## Toolchain
Identical across every task.

| Tool | Role |
|------|------|
| webpack 5 + webpack-dev-server | Bundling and dev server on port `8080`, entry `./js/main.ts` → `dist/bundle.js` |
| ts-loader (`transpileOnly`) | Transpiles TS without blocking on type errors |
| fork-ts-checker-webpack-plugin | Runs type-checking in a separate process |
| html-webpack-plugin | Generates `dist/index.html` |
| clean-webpack-plugin | Clears `dist/` between builds |
| jest + ts-jest | Test runner |
| eslint + @typescript-eslint | Linting |

`tsconfig.json` is `strict` with `noImplicitAny`, `target: es5`, `module: es6`,
`lib: ["ES2020", "DOM"]`.

## Run it
```bash
cd task_0          # or any task_N
npm install
npm run start-dev  # webpack-dev-server → http://localhost:8080
npm run build      # bundle to dist/
npm test           # jest
```
