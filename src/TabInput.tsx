import TextField from "@mui/material/TextField";

import { setTabInput, useTabInput } from "./streams/TabStreams";

export function TabInput() {
  const input = useTabInput()

  return (
    <TextField
      label="Tabs"
      multiline
      fullWidth
      onChange={(e) => {
        setTabInput(e.target.value)
      }}
      value={input}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      style={{ height: '100%', overflowY: 'scroll' }}
    />
  )
}