# bond-tracker

Initial Thoughts: 
Originally I was thinking about implementing the MAP data structure as
it eliminates duplicates and cares about unique keys. I guess that
would be the next step to expand this application. 

STEPS:
1. extracting the minimum value from a bond
2. extracting the maximum value from a bond
3. substracting both values
4. based on a substraction result displaying the top 3 highest numbers
5. connecting the results within react application using props



function noProfit(arr) {
  let noProfit = -1;
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > min && noProfit < arr[i] - min) {
      noProfit = arr[i] - min;
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return noProfit;
}


//passing the values to the table via props object to display the data
function Table(props) {

//reduce method is going to give a single value which is going to be stored in accumulator
represented by an empty array. 

 let data= props.data.reduce((acc,ele)=>{
    // getting all the values is going to loop over the values of properties on the object
    // in that case bonds prices
    let values=Object.values(ele);
    // removing the first value as its non integer
    let bond_name=values.shift(); 
    let temp={} ; // to store the attributes for every bond
      temp.profit= maxProfit(values) > 0 ? maxProfit(values):-1;
      temp.bond_name=bond_name;
    acc.push(temp);
      return acc;
     },[])
   
// sorting it on the basis of two keys. we need to substract the profit 
 data.sort(function(a, b) {
  return b["profit"] - a["profit"] || b["bond_name"] - a["bond_name"];
});



here is an commented attempt to display only the top 3 values
as there are duplicates displayed at the moment.
 let top_three = data.reduce((acc,ele)=>{
  let acc_find=acc.find(el=>el.profit === ele.profit); 
   if(!acc_find)
   {
     ele.bond_name=`bond_${ele.bond_name}`
     acc.push(ele);
   }
   return acc;
   },[]);


I am creating a table to map over the elements and display a values I need
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
                <td>bond_{row.top_three}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
  
    </div>
  );
}
