import React from "react";
import './usertable.css';

const Tableuser = ({ data }) => {
  const keys = data.length > 0 ? Object.keys(data[0]) : null;
  console.log(keys);

  let header = null;
  if (keys) {
    header = (
      <thead>
        <tr>
          {keys.map((item) => (
            <th>{item}</th>
          ))}
        </tr>
      </thead>
    );
  }

  return (
    <>
      <div>
        <table class="styled-table">
          {header}
          <tbody>
            {data.length > 0 &&
              data.map((item) => (
                <tr class="active-row">
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.mob}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tableuser;
