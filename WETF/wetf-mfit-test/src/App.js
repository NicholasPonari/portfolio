import "./App.css";
import WETFToken from "./artifacts/contracts/wetftoken.sol/WETFToken.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Faucet from "./components/Faucet.js";
import Stock from "./components/Stock";
import TokenSend from "./components/TokenSend.js";
import { useState } from "react";
import { ethers } from "ethers";
import Poll from "./components/Poll";

function App() {
  // properties

  const Token = WETFToken;
  const [walletAddress, setWalletAddress] = useState("");

  // Helper Functions

  async function requestAccount() {
    console.log("requesting account");
    if (window.ethereum) {
      console.log("detected");
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log("Error Connecting");
      }
    } else {
      console.log("Not Found");
    }
  }

  async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <header className="App-header">
            <button onClick={requestAccount}>Connect Wallet</button>
            <h3>This is your Wallet Address: {walletAddress} </h3>
          </header>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <Faucet tokenContract={Token} />;
          </Col>
          <Col>
            <TokenSend tokenContract={Token} />
          </Col>
        </Row>
        <Row>
          <h1>It's voting time!</h1>
        </Row>
        <Row>
          <h2>Which security do you believe will perform the best?</h2>
        </Row>
        <Row>
          <Stock></Stock>
        </Row>
        <Row>
          <Poll />
        </Row>
      </Container>
    </div>
  );
}

export default App;
