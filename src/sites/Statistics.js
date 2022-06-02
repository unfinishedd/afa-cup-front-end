const Statistics = () => {
  return (
    <div className="statistics">
      <h4>Statistics</h4>
      <hr />
      <br />
      <h5 className="Topscorers">Topscorers</h5>
      <table className="stats">
        <tbody>
          <tr>
            <td className="TopscorersText1">1.</td>
            <td className="TopscorersText2">PLAYERNAME</td>
            <td className="TopscorersText3">TEAMNAME</td>
            <td className="TopscorersText4">.. goals</td>
          </tr>
          <tr>
            <td className="TopscorersText1">2.</td>
            <td className="TopscorersText2">PLAYERNAME</td>
            <td className="TopscorersText3">TEAMNAME</td>
            <td className="TopscorersText4">.. goals</td>
          </tr>
          <tr>
            <td className="TopscorersText1">3.</td>
            <td className="TopscorersText2">PLAYERNAME</td>
            <td className="TopscorersText3">TEAMNAME</td>
            <td className="TopscorersText4">.. goals</td>
          </tr>
        </tbody>
      </table>

      <br />

      <h5 className="Topscorers">Best Scoring Teams</h5>
      <table className="stats">
        <tbody>
          <tr>
            <td className="TopscorersText1">1.</td>
            <td className="TopscorersText2">TEAMNAME</td>
            <td className="TopscorersText3"></td>
            <td className="TopscorersText4">.. goals</td>
          </tr>
          <tr>
            <td className="TopscorersText1">2.</td>
            <td className="TopscorersText2">TEAMNAME</td>
            <td className="TopscorersText3"></td>
            <td className="TopscorersText4">.. goals</td>
          </tr>
          <tr>
            <td className="TopscorersText1">3.</td>
            <td className="TopscorersText2">TEAMNAME</td>
            <td className="TopscorersText3"></td>
            <td className="TopscorersText4">.. goals</td>
          </tr>
        </tbody>
      </table>

      <br />

      <div className="TotalGoalsss">
        <h5 className="Topscorers">Total goals</h5>
        <table className="TotalGoals">
          <tbody>
            <tr>
              <th className="TopscorersText1">Saturday</th>
              <th className="TopscorersText1">Sunday</th>
            </tr>
            <tr>
              <td className="TotalGoalsAmount">33</td>
              <td className="TotalGoalsAmount">23</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="TotalMatches">
        <h5 className="Topscorers">Total matches</h5>
        <table className="TotalGoals">
          <tbody>
            <tr>
              <th className="TopscorersText1">Saturday</th>
              <th className="TopscorersText1">Sunday</th>
            </tr>
            <tr>
              <td className="TotalGoalsAmount">33</td>
              <td className="TotalGoalsAmount">23</td>
            </tr>
          </tbody>
        </table>
      </div>

      <br />
      <br />

      <div className="TotalGoalsss">
        <h5 className="Topscorers">Total yellow cards</h5>
        <table className="TotalGoals">
          <tbody>
            <tr>
              <th className="TopscorersText1">Saturday</th>
              <th className="TopscorersText1">Sunday</th>
            </tr>
            <tr>
              <td className="TotalGoalsAmount">12</td>
              <td className="TotalGoalsAmount">19</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="TotalMatches">
        <h5 className="Topscorers">Total red cards</h5>
        <table className="TotalGoals">
          <tbody>
            <tr>
              <th className="TopscorersText1">Saturday</th>
              <th className="TopscorersText1">Sunday</th>
            </tr>
            <tr>
              <td className="TotalGoalsAmount">3</td>
              <td className="TotalGoalsAmount">4</td>
            </tr>
          </tbody>
        </table>
      </div>

      <br />
      <br />

      <div>
        <table className="stats">
          <tbody>
            <tr>
              <th colSpan="2">
                <h5 className="Topscorers">Fair play award</h5>
              </th>
              <th>
                <h5 className="Topscorers">Yellow</h5>
              </th>
              <th>
                <h5 className="Topscorers">Red</h5>
              </th>
            </tr>
            <tr>
              <td className="TopscorersText1">1.</td>
              <td className="TopscorersText2">TEAMNAME</td>
              <td className="TopscorersText3">1x</td>
              <td className="TopscorersText4">0x</td>
            </tr>
            <tr>
              <td className="TopscorersText1">2.</td>
              <td className="TopscorersText2">TEAMNAME</td>
              <td className="TopscorersText3">2x</td>
              <td className="TopscorersText4">0x</td>
            </tr>
            <tr>
              <td className="TopscorersText1">3.</td>
              <td className="TopscorersText2">TEAMNAME</td>
              <td className="TopscorersText3">3x</td>
              <td className="TopscorersText4">1x</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default Statistics;
