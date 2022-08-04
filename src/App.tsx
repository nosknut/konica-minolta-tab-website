import { Download } from '@mui/icons-material';
import { AppBar, Box, Button, Grid, InputAdornment, TextField, Toolbar, Typography, useTheme } from '@mui/material';
import useLocalStorage from '@rehooks/local-storage';

import { DisplayTabs } from './DisplayTabs';
import { fileReturn, MakeTabs } from './MakeTabs';
import { useTabs } from './streams/TabStreams';
import { TabInput } from './TabInput';
import { ThemeButton } from './Themes';
import { TutorialButton } from './Tutorial';

import './App.css';

function App() {
  const theme = useTheme()
  const tabs = useTabs()
  const [Model, setModel] = useLocalStorage('PrinterModel', "C754")

  function DownloadClick() {
    const TabFiles = MakeTabs(tabs, Model)
    TabFiles.forEach(downloadKSF)
  }

  function downloadKSF(tabString: fileReturn) {
    const element = document.createElement("a");
    const file = new Blob(["\ufeff" + tabString.write], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = tabString.name;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    document.body.removeChild(element)
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <AppBar title="Konica Minolta Tab Generator">
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography variant="h6" color="inherit">
            Konica Minolta Tab Generator
          </Typography>
          <Box>
            <TutorialButton />
            <ThemeButton />
          </Box>
        </Toolbar>
      </AppBar>
      <main style={{ width: '100%', height: '100%', paddingTop: theme.spacing(10) }}>
        <Grid container height="100%" justifyItems="center">
          <Grid item xs={6} height="100%">
            <TabInput />
          </Grid>
          <Grid
            container
            height="100%"
            xs={6}
            overflow="scroll"
            spacing={1}
            paddingX={1}
            alignItems="flex-start"
            justifyContent="center"
            direction="row"
          >
            <Grid item xs={12}>
              <TextField
                value={Model}
                fullWidth
                label="Model"
                id="model-input"
                color="secondary"
                placeholder="ex: C754 or C759"
                onChange={(e) => {
                  const val = e.target.value
                  setModel(val ? val : "")
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        size="small"
                        color="primary"
                        variant="contained"
                        id="download-configs-btn"
                        onClick={DownloadClick}
                        startIcon={<Download />}
                      >
                        Download
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <DisplayTabs tabs={tabs} />
          </Grid>
        </Grid>
      </main>
    </div >
  );
}

export default App;
