import "./StatisticsTable.css";
function StatisticsTable(props) {
  const tablehead = [1, 2, 3];
  const calculateMean = (value) => {
    const filtereddata = props.datas.filter((e) => {
      return e.Alcohol === value;
    });
    let sum = 0.0;
    for (let i = 0; i < filtereddata.length; i++) {
      sum += Number(filtereddata[i][props.name]);
    }

    return (sum / filtereddata.length).toFixed(3);
  };
  const calculateMedian = (value) => {
    const filtereddata = props.datas.filter((e) => {
      return e.Alcohol === value;
    });
    const sortedNumbers = [...filtereddata].sort(
      (a, b) => a[props.name] - b[props.name]
    );
    const middleIndex = Math.floor(sortedNumbers.length / 2);

    if (sortedNumbers.length % 2 === 0) {
      return (
        (sortedNumbers[middleIndex - 1][props.name] +
          sortedNumbers[middleIndex][props.name]) /
        2
      ).toFixed(3);
    }
    return sortedNumbers[middleIndex][props.name].toFixed(3);
  };
  const calculateMode = (value) => {
    const numberCountMap = new Map();
    let maxFrequency = 0;
    let modes = [];
    const numbers = props.datas.filter((e) => {
      return e.Alcohol === value;
    });
    numbers.forEach((number) => {
      if (numberCountMap.has(number[props.name])) {
        const newFrequency = numberCountMap.get(number[props.name]) + 1;
        numberCountMap.set(number[props.name], newFrequency);
        if (newFrequency > maxFrequency) {
          maxFrequency = newFrequency;
          modes = [number[props.name]];
        } else if (newFrequency === maxFrequency) {
          modes.push(number[props.name]);
        }
      } else {
        numberCountMap.set(number[props.name], 1);
      }
    });
    if (modes.length > 1) return modes.toString();
    return modes[0].toFixed(3);
  };
  return (
    <>
      <div className="table-div">
        <table className="table">
          <thead className="table-header">
            <tr className="table-head-row">
              <th table-data>Measures</th>
              {tablehead.map((e) => {
                return <th key={e}>Alcohol {e}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <td className="table-data">{props.name} Mean</td>
              {tablehead.map((e) => {
                return <td key={e}>{calculateMean(e)}</td>;
              })}
            </tr>
            <tr className="table-row">
              <td className="table-data">{props.name} Median</td>
              {tablehead.map((e) => {
                return <td key={e}>{calculateMedian(e)}</td>;
              })}
            </tr>
            <tr className="table-row">
              <td className="table-data">{[props.name]} Mode</td>
              {tablehead.map((e) => {
                return <td key={e}>{calculateMode(e)}</td>;
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StatisticsTable;
