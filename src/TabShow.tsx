


export function TabShow(props: {
    title: string,
    tabs: string
}) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            padding: "0px",
            margin: "0px",
            border: "1px soild white",
            color: "white",
        }}>
            <div style={{
                padding: "1px",
                backgroundColor: "black"
            }}>
                {props.title}
            </div>
            {props.tabs.split("\n").map((e, i) => {
                return <div
                    key={i}
                    style={{
                        padding: "1px",
                        backgroundColor: (i % 2) == 0 ? "grey" : "black"
                    }}
                >{e}</div>
            })}
        </div>
    )
}