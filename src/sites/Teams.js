import { useEffect, useState } from "react";
import Team1 from "../components/Teams/Team1";
import Team2 from "../components/Teams/Team2";
import Team3 from "../components/Teams/Team3";
import Team4 from "../components/Teams/Team4";

export default function Teams() {
  const [car, setCar] = useState("selectDreamCar");

  const [team1ContentVisible, setTeam1ContentVisible] = useState(false);
  const [team2ContentVisible, setTeam2ContentVisible] = useState(false);
  const [team3ContentVisible, setTeam3ContentVisible] = useState(false);
  const [team4ContentVisible, setTeam4ContentVisible] = useState(false);

  useEffect(() => {
    car === "team1"
      ? setTeam1ContentVisible(true)
      : setTeam1ContentVisible(false);
    car === "team2" ? setTeam2ContentVisible(true) : setTeam2ContentVisible(false);
    car === "team3" ? setTeam3ContentVisible(true) : setTeam3ContentVisible(false);
    car === "team4" ? setTeam4ContentVisible(true) : setTeam4ContentVisible(false);
  }, [car]);

  const handleOnChange = (e) => {
    setCar(e.target.value);
  };

  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderResult = () => {
    let result;
    car === "selectDreamCar"
      ? (result = "Select your stage")
      : (result = makeFirstLetterCapital(car));
    return result;
  };

  return (
    <div className="container mt-3">
      <div>
        <center><h1>{renderResult()}</h1></center>
      </div>
      <div className="mt-5">
        <select className="form-select" value={car} onChange={handleOnChange}>
          <option value="selectDreamCar">Select your team</option>
          <option value="team1">Team 1</option>
          <option value="team2">Team 2</option>
          <option value="team3">Team 3</option>
          <option value="team4">Team 4</option>
        </select>
      </div>
      <br />
      <hr />
      {team1ContentVisible && <Team1 />}
      {team2ContentVisible && <Team2 />}
      {team3ContentVisible && <Team3 />}
      {team4ContentVisible && <Team4 />}
    </div>
  );
}
