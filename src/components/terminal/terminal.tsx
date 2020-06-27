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
      text: spinner,
      delay: 80,
    }
  }),
}
const termLines = [
  {
    text: `📟  Connexion sécurisée activée à ${date.getHours()}:${
      (date.getMinutes() < 10 ? "0" : "") + date.getMinutes()
    }`,
    cmd: false,
    frames: spinnerFrames.map(spinner => {
      return {
        text:
          spinner +
          " Un développeur tente d'entrer en communication avec vous...",
        delay: 80,
      }
    }),
  },
  { text: "" },
  {
    text: " Hello, je m'appelle Alexandre Peyrichout",
    cmd: true,
  },
  {
    text: " Je suis développeur Full Stack JavaScript & Python",
    cmd: true,
  },
  waitingNewLine,
  {
    text: " Bienvenue dans mon laboratoire",
    cmd: true,
  },
  {
    text: " Tu y trouveras mon CV, mes projets ainsi que mes articles",
    cmd: true,
  },
  waitingNewLine,
  {
    text: `⛔ Tentative d'intrusion bloquée`,
    cmd: false,
    frames: [
      {
        text:
          "🕵️ intrusion: [------------------------------------------------] 0/1000",
        delay: 200,
      },
      {
        text:
          "🕵️ intrusion: [#######-----------------------------------------] 100/1000",
        delay: 2000,
      },
      {
        text:
          "🕵️ intrusion: [###########################---------------------] 500/1000",
        delay: 200,
      },
      {
        text:
          "🕵️ intrusion: [################################################] 1000/1000",
        delay: 400,
      },
    ],
  },
  {
    text: " Je dois fermer cette connexion, un intrus a été repéré...",
    cmd: true,
  },
  {
    text: " Bonne visite",
    cmd: true,
  },
  waitingNewLine,
  {
    text: "🛡️  Pare-feu actif, votre navigation est sécurisée",
    cmd: false,
    frames: [
      {
        text: "[------------------------------------------------] 0/1000",
        delay: 200,
      },
      {
        text: "[#######-----------------------------------------] 100/1000",
        delay: 2000,
      },
      {
        text: "[###########################---------------------] 500/1000",
        delay: 200,
      },
      {
        text: "[################################################] 1000/1000",
        delay: 400,
      },
    ],
  },

  {
    text: "🗨️  Alexandre a quitté la conversation",
    cmd: false,
    frames: spinnerFrames.map(spinner => {
      return {
        text: spinner + " Fermeture de la connexion",
        delay: 80,
      }
    }),
  },
  { text: "" },
]

const TerminalComponent = () => {
  return (
    <TerminalWrapper>
      <Terminal lines={termLines} interval={80} />
    </TerminalWrapper>
  )
}

export default TerminalComponent
