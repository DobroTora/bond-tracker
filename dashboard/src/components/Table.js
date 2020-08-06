import React from 'react';

function maxProfit(arr) {
  let maxDiff = -1;
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > min && maxDiff < arr[i] - min) {
      maxDiff = arr[i] - min;
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return maxDiff;
}



function Table(props) {

 let data = props.data.reduce((acc,ele) => {
    let values = Object.values(ele);
    let bond_name = values.shift();
    let temp ={} ; 
      temp.profit= maxProfit(values) > 0 ? maxProfit(values): -1;
      temp.bond_name=bond_name;
    acc.push(temp);
      return acc;
     },[])
   
 data.sort(function(a, b) {
  return b["profit"] - a["profit"] || b["bond_name"] - a["bond_name"];
});



  return (
    <div>
      <table className="striped">
        <thead>
          <tr>
            <th>bond</th>
            <th>value</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(row => (
              <tr>
                <td>{row.profit}</td>
                <td>bond_{row.bond_name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;