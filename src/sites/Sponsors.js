import img1 from "../local_images/logo.JPEG";
import img2 from "../local_images/trone.gif";

const Sponsors = () => {
  return (
    <div className="sponsors">
      <h4> Mede mogelijk gemaakt door</h4>
      <hr></hr>
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
      <br />
      <hr />

      {
        <div>
          {" "}
          <br />
          <center>
            {" "}
            <img
              src={img2}
              className="img-fluid"
              alt="logo"
              style={{ maxWidth: "23rem" }}
            ></img>{" "}
          </center>
        </div>
      }
      <br />
      <br />
      <center>
        <h6>
          Deze (web)applicatie is ontwikkeld door <br />
          Trone Software <br />
          A. hofmanweg 5 A 2031 BH Haarlem <br />
          06 81561851 info@trone.nl <br />
         <a href="www.trone.nl"> www.trone.nl</a>
        </h6>
      </center>
    </div>
  );
};

export default Sponsors;
