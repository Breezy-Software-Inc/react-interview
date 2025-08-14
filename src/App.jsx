import React from "react";
import _ from "lodash";
import "./App.css";

const sort = (list, key, ascending) =>
  _.orderBy(list, [key], [ascending ? "asc" : "desc"]);

const App = ({ input }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Col 1</th>
          <th>Col 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Row 1, Col 1</td>
          <td>Row 1, Col 2</td>
        </tr>
        <tr>
          <td>Row 2, Col 1</td>
          <td>Row 2, Col 2</td>
        </tr>
      </tbody>
    </table>
  );
};

export default App;
