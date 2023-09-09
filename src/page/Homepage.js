import StatisticsTable from "../util/StatisticsTable";
import data from "../Database/Wine-Data.json";
import { useEffect, useState } from "react";
function Homepage(props) {
  const [updatedData, setUpdatedata] = useState(data);
  const [updated, setUpdated] = useState(false);
  const createGamma = async () => {
    const dataes = data.map((e) => {
      let value = ((e.Ash * e.Hue) / e.Magnesium).toFixed(2);
      return e.Alcohol !== null ? { ...e, Gamma: Number(value) } : e;
    });
    setUpdatedata(dataes);
    setUpdated(true);
  };

  useEffect(() => {
    createGamma();
  }, []);
  return (
    <>
      <div className="header">
        <h1>My Wine Data Analytics</h1>
      </div>
      <div>
        <h2>Flavanoids Table Analytics</h2>
        <StatisticsTable datas={updatedData} name={"Flavanoids"} />
      </div>

      <div>
        <h2>Gamma Table Analytics</h2>
        {updated && <StatisticsTable datas={updatedData} name={"Gamma"} />}
      </div>
    </>
  );
}
export default Homepage;
