import React from "react";
import { Alert } from "react-bootstrap";

const ErrorAlert = ({ message }) => {
  return (
    <Alert variant="danger">
      <strong>Error:</strong> {message}
    </Alert>
  );
};

export default ErrorAlert;
