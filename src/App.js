import React, { useState } from "react";
import XTerm from "./components/XTerm";
import { Button, Input, InputGroup } from "rsuite";
import "./styles.css";

export default function App() {
  const [wsUrl, setWSUrl] = useState("");
  const [input, setInput] = useState(
    "wss://devops.hypers.cc/api/project-groups/3/clusters/1/services/devops-fe/pods/devops-fe-7f6c4b5cf6-j6wb4/exec"
  );

  return (
    <div className="App">
      <h1>Docker attach websocket demo</h1>
      <header>
        <InputGroup>
          <InputGroup.Addon>WebSocket URL</InputGroup.Addon>
          <Input
            placeholder="wss://echo.websocket.org"
            value={input}
            onChange={(value) => setInput(value)}
          />
        </InputGroup>
        <Button appearance="primary" onClick={() => setWSUrl(input)}>
          Connect
        </Button>
      </header>
      <main>{wsUrl && <XTerm key={wsUrl} wsUrl={wsUrl} />}</main>
    </div>
  );
}
