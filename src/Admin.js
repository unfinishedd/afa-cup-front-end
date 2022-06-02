import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const Admin = () => {
  return (
    <div className="admin">
      <div className="d-grid gap-2">

        <Link to="/create">
          <Button variant="outline-dark" size="lg">
            Create Post
          </Button>
        </Link>

        <Link to="/images">
          <Button variant="outline-dark" size="lg">
            Upload Image
          </Button>
        </Link>

      </div>
    </div>
  );
};

export default Admin;
