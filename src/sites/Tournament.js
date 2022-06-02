import { useEffect, useState } from "react";
import GroupStage from "../components/Tournament/GroupStage";
import Last16 from "../components/Tournament/Last16";
import QuaterFinals from "../components/Tournament/QuaterFinals";
import SemiFinals from "../components/Tournament/SemiFinals";
import ConsolationFinal from "../components/Tournament/ConsolationFinal";
import Final from "../components/Tournament/Final";

export default function TESTINGTAB() {
  const [car, setCar] = useState("selectDreamCar");

  const [groupStageContentVisible, setGroupStageContentVisible] = useState(false);
  const [last16ContentVisible, setLast16ContentVisible] = useState(false);
  const [quaterFinalsContentVisible, setQuaterFinalsContentVisible] = useState(false);
  const [semiFinalsContentVisible, setSemiFinalsContentVisible] = useState(false);
  const [consolationFinalContentVisible, setConsolationFinalContentVisible] = useState(false);
  const [finalContentVisible, setFinalContentVisible] = useState(false);

  useEffect(() => {
    car === "groupStage"
      ? setGroupStageContentVisible(true)
      : setGroupStageContentVisible(false);
    car === "last16" ? setLast16ContentVisible(true) : setLast16ContentVisible(false);
    car === "quaterFinals" ? setQuaterFinalsContentVisible(true) : setQuaterFinalsContentVisible(false);
    car === "semiFinals" ? setSemiFinalsContentVisible(true) : setSemiFinalsContentVisible(false);
    car === "consolationFinal" ? setConsolationFinalContentVisible(true) : setConsolationFinalContentVisible(false);
    car === "final" ? setFinalContentVisible(true) : setFinalContentVisible(false);
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
          <option value="selectDreamCar">Select your stage</option>
          <option value="groupStage">Groupstage</option>
          <option value="last16">Last 16</option>
          <option value="quaterFinals">Quater-Finals</option>
          <option value="semiFinals">Semi-Finals</option>
          <option value="consolationFinal">Consolation-Final</option>
          <option value="final">Final</option>
        </select>
      </div>
      <br />
      <hr />
      {groupStageContentVisible && <GroupStage />}
      {last16ContentVisible && <Last16 />}
      {quaterFinalsContentVisible && <QuaterFinals />}
      {semiFinalsContentVisible && <SemiFinals />}
      {consolationFinalContentVisible && <ConsolationFinal />}
      {finalContentVisible && <Final />}
    </div>
  );
}
