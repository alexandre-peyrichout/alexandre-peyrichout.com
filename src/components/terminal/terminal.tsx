import React from "react"
import Terminal from "react-animated-term"
import "react-animated-term/dist/react-animated-term.css"
import { TerminalWrapper } from "./terminal.styles"

const spinnerFrames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"]
const spinnerLines = [
  {
    text: "node example.js",
    cmd: true,
  },
  {
    text: "",
    cmd: false,
    repeat: true,
    repeatCount: 2,
    frames: spinnerFrames.map(function (spinner) {
      return {
        text: spinner + " Loading app",
        delay: 80,
      }
    }),
    finalFrame: "✔ Loaded app",
  },
  {
    text: "",
    cmd: true,
  },
]
const termLines = [
  {
    text: "yarn",
    cmd: true,
  },
  {
    text: "yarn install v1.6.0",
    cmd: false,
  },
  {
    text: "[1/4] 🔍  Resolving packages...",
    cmd: false,
  },
  {
    text: "[2/4] 🚚  Fetching packages...",
    cmd: false,
  },
  {
    text: "[3/4] 🔗  Linking dependencies...",
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
    text: "[4/4] 📃  Building fresh packages...",
    cmd: false,
    frames: [
      {
        text: "[------------------------------------------------] 0/1000",
        delay: 200,
      },
      {
        text: "[#######-----------------------------------------] 100/1000",
        delay: 300,
      },
      {
        text: "[###########################---------------------] 500/1000",
        delay: 1200,
      },
      {
        text: "[################################################] 1000/1000",
        delay: 400,
      },
    ],
  },
  {
    text: "✨  Done in 4.91s.",
    cmd: false,
  },
  {
    text: "",
    cmd: true,
    repeat: true,
    repeatCount: 20,
  },
]
const TerminalComponent = () => {
  return (
    <TerminalWrapper>
      <Terminal lines={termLines} />
    </TerminalWrapper>
  )
}

export default TerminalComponent
