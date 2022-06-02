import { Button } from "react-bootstrap";
import img1 from "../local_images/logo.JPEG";

const About = () => {
  return (
    <div className="about">
      <h4>Terms of use</h4>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus et
        delectus numquam enim quaerat repellendus adipisci, voluptatibus
        voluptas commodi rem, amet fugit corrupti nesciunt sapiente est corporis
        ea aliquam architecto?
      </p>
      <hr />
      <br />
      <h4>Questions? Contact us! </h4>
      <div className="d-grid gap-2">
        <br />
        <Button variant="outline-success" size="lg">Send us an email</Button>{" "}
      </div>
      <br />
      <hr />

      {
        <div>
          {" "}
          <br />
          <img
            src={img1}
            className="img-fluid"
            alt="logo"
            style={{ maxWidth: "23rem" }}
          ></img>{" "}
        </div>
      }

    </div>
  );
};

export default About;
