import { Card, CardContent, CardHeader, useTheme } from "@mui/material"

export function TabShow(props: {
    title: string,
    tabs: string[]
}) {
    const theme = useTheme()
    return (
        <Card elevation={5}>
            <CardHeader subheader={props.title} />
            <CardContent>
                {props.tabs.map((e, i) => {
                    return <div
                        key={i}
                        style={{
                            fontSize: "11px",
                            backgroundColor: (i % 2) === 0 ? theme.palette.grey[600] : theme.palette.background.default
                        }}
                    >
                        <span style={{
                            float: "left",
                            marginLeft: "2px",
                            marginRight: "5px"
                        }}>
                            {(i + 1).toString().padStart(2, "0")}:
                        </span>
                        <span >
                            {e}
                        </span>
                    </div>
                })}
            </CardContent>
        </Card>
    )
}