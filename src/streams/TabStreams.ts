import { bind } from "@react-rxjs/core";
import { createSignal } from "@react-rxjs/utils";
import { debounce, map, of, timer } from "rxjs";

// Keeping these streams in a different file than the component will prevent the file from being reloaded
// when the component file is saved after being edited
// That way, the stream content will not be reset on save

export const [tabInput$, setTabInput] = createSignal<string>()
export const [useTabInput] = bind(tabInput$, "")

const slowDownAtNumCharacters = 200
// https://stackoverflow.com/questions/53044981/how-to-make-observable-debouncetime-conditional
export const debouncedTabInput$ = tabInput$.pipe(debounce(value => value.length > slowDownAtNumCharacters ? timer(500) : of({})))

// Debounced by 500ms so the website wont lag/crash when typing fast
export const [useDebouncedTabInput] = bind(debouncedTabInput$, "")

export const tabs$ = debouncedTabInput$.pipe(map((input) => {
    const lines = input.split("\n")
    const newTab: string[][] = []

    const lastLine = lines[lines.length - 1]
    if (lastLine === "")
        lines.pop()

    lines.forEach((line, i) => {
        const n = i % 20
        const t = (Math.floor(i / 20))

        if (n === 0)
            newTab[t] = []

        newTab[t][n] = line
    })

    return newTab
}))

export const [useTabs] = bind(tabs$, [])
