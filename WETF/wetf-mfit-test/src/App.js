import "./App.css";
import WETFToken from "./artifacts/contracts/wetftoken.sol/WETFToken.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Faucet from "./components/Faucet.js";
import TokenSend from "./components/TokenSend.js";

function App() {
  const Token = WETFToken;

  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <Faucet tokenContract={Token} />;
          </Col>
          <Col>
            <TokenSend tokenContract={Token} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
