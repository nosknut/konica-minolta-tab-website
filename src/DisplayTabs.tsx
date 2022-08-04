import Grid from "@mui/material/Grid"
import { useEffect, useState } from "react"

import { TabShow } from "./TabShow"

export function DisplayTabs(props: {
    tabs: string[][]
}) {
    const [pad, setpad] = useState<number>(0)

    useEffect(() => {
        const count = props.tabs.length
        setpad(count.toString().length)
    }, [props.tabs])

    return (
        <>
            {props.tabs.map((tabSection, i) => {
                const TabNString = (i + 1).toString().padStart(pad, "0")
                return (
                    <Grid item key={i}>
                        <TabShow
                            title={`Tab ${TabNString}/${props.tabs.length}`}
                            key={i}
                            tabs={tabSection}
                        />
                    </Grid>
                )
            })}
        </>
    )
}