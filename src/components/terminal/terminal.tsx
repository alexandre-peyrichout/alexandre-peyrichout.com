import React from "react"
import Terminal from "react-animated-term"
import "react-animated-term/dist/react-animated-term.css"
import { TerminalWrapper } from "./terminal.styles"

const spinnerFrames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"]

let date = new Date()

const waitingNewLine = {
  text: " ",
  cmd: false,
  frames: spinnerFrames.map(spinner => {
    return {
      text: spinner + " ",
      delay: 50,
    }
  }),
}
const termLines = [
  {
    text: `Connexion sécurisée activée à ${date.getHours()}:${
      (date.getMinutes() < 10 ? "0" : "") + date.getMinutes()
    }`,
    cmd: false,
    frames: spinnerFrames.map(spinner => {
      return {
        text: spinner + " Connexion en cours",
        delay: 80,
      }
    }),
  },
  waitingNewLine,
  {
    text: " Bonjour",
    cmd: true,
  },
  waitingNewLine,
  {
    text: " Tu te demandes peut-être qui je suis...",
    cmd: true,
  },
  waitingNewLine,
  {
    text: " Mon nom est Alexandre Peyrichout",
    cmd: true,
  },
  {
    text: " Je suis développeur Full Stack JavaScript & Python",
    cmd: true,
  },
  waitingNewLine,
  {
    text: " Tu as maintenant accès à mon laboratoire",
    cmd: true,
  },
  {
    text: " Tu y trouveras mon CV, mes projets et mes articles",
    cmd: true,
  },
  waitingNewLine,
  {
    text: " Je dois fermer cette connexion, nous ne sommes pas seuls...",
    cmd: true,
  },
  {
    text: " Bonne visite et n'oublies pas de suivre le lapin blanc",
    cmd: true,
  },
  waitingNewLine,
  {
    text: "Alexandre a quitté la conversation",
    cmd: false,
  },
]

const TerminalComponent = () => {
  return (
    <TerminalWrapper>
      <Terminal lines={termLines} interval={80} />
    </TerminalWrapper>
  )
}

export default TerminalComponent
