import React from "react";
import { Col, Row } from "react-bootstrap";

export default function NotFound() {
  return (
    <div className="container-fluid" style={{ height: "100vh", marginTop: "-80px", marginBottom: "-14px" }}>
        <Row className="h-100">
            <Col className="text-center m-auto">
                <h1 className="text-xl">404</h1>
                <p style={{  }}>Maybe you want to go back to the <a href="/">homepage</a>?</p>
            </Col>
        </Row>
    </div>
  );
}
