const ConsolationFinal = () => {
  return (
    <div className="mt-4">
    <table>
      <tr>
        <th className="tournamentProgress1">Time: 09:30</th>
        <th className="tournamentProgress2">Field: 1</th>
        <th className="tournamentProgress3">Result</th>
      </tr>
      <tr>
        <td className="tournamentProgress1">A. Number 1 group A</td>
        <td className="tournamentProgress2">Number 2 group B</td>
        <td className="tournamentProgress3">2-0</td>
      </tr>
      <tr>
        <td className="tournamentProgressTEAMNAME">TEAMNAME-A</td>
        <td className="tournamentProgressTEAMNAME">TEAMNAME-B</td>
      </tr>
    </table>

    <hr />
    <br />
    <center>
      <h5>Third Place <br />
      </h5>
      {/* Third place image with teamname */}
    </center>
  </div>
  );
};

export default ConsolationFinal;
