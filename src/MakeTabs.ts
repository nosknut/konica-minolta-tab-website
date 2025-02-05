import { TabString } from "./TabExport"

export type fileReturn = { name: string, write: string }

export function MakeTabs(tabNames: string[][], Model: string): fileReturn[] {
    const files: fileReturn[] = []

    for (let k = 0; k < tabNames.length; k++) {
        let stri = TabString
        stri = stri.replaceAll("{Name}", `Tabs_${k + 1}/${tabNames.length}`)
        stri = stri.replace("{Count}", tabNames[k].length.toString())
        stri = stri.replace("{Model}", Model)

        for (let i = 0; i < tabNames[k].length; i++) {
            stri = stri.replace(`{${i + 1}}`, tabNames[k][i])
        }

        files.push({
            name: `Tabs_${k + 1}_of_${tabNames.length}.KSF`,
            write: stri
        })
    }

    return files
}