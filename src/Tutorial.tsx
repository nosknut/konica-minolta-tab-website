import { Help } from "@mui/icons-material"
import IconButton from "@mui/material/IconButton"
import useLocalStorage from "@rehooks/local-storage"
import { Step, Steps } from "intro.js-react"
import React, { useMemo } from "react"

function makeSteps(): Step[] {
    return [
        { element: "#toggle-tutorial-btn", intro: 'Toggle Tutorial' },
        { element: "#change-theme-btn", intro: 'Toggle Dark Mode' },
        { element: "#model-input", intro: 'Input the correct model' },
        { element: "#download-configs-btn", intro: 'Download the config file after filling out the tabs' },
        { intro: 'All set! Happy printing :)' },
    ]
}

export type TutorialState = {
    show: boolean
    step: number
}

export function useTutorial(): [TutorialState, (tutorial: TutorialState) => void] {
    const [tutorial, setTutorial] = useLocalStorage<TutorialState>('tutorial', { show: true, step: 0 })
    return [tutorial, setTutorial]
}

export function TutorialButton() {
    const [tutorial, setTutorial] = useTutorial()
    return (
        <IconButton id="toggle-tutorial-btn" style={{ color: 'white' }} onClick={() => setTutorial({ ...tutorial, show: true })}>
            <Help />
        </IconButton>
    )
}

export function Tutorial() {
    const [tutorial, setTutorial] = useTutorial()

    return (
        <Steps
            enabled={tutorial.show}
            initialStep={tutorial.step || 0}
            steps={useMemo(() => makeSteps(), [])}
            onExit={(step) => setTutorial({ show: false, step })}
            onComplete={() => setTutorial({ show: false, step: 0 })}
            onChange={(step) => setTutorial({ ...tutorial, step })}
            options={{
                disableInteraction: false,
                showProgress: true,
                showStepNumbers: true,
            }}
        />
    )
}