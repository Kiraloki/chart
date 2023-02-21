import { useState } from "react";
import Chart from "../components/Chart";

function App() {
  const [name, setname] = useState("");
  const [agex, setAgex] = useState("");
  const [agey, setAgey] = useState("");
  const [t, setT] = useState({
    dx: [],
    dy: [],
    l: false,
    b: false,
    p: false,
    t: ""
  });
  const [v, setV] = useState(true);
  const [p, setP] = useState(true);
  const [isline, setIsline] = useState(false);
  const [isBar, setisbar] = useState(false);
  const [isPie, setispie] = useState(false);

  const handlenameChange = (e) => {
    setname(e.target.value);
  };

  const handleAgexChange = (e) => {
    setAgex(e.target.value);
  };

  const handleAgeyChange = (e) => {
    setAgey(e.target.value);
  };

  const handlelineChange = () => {
    setIsline(!isline);
  };

  const handlepieChange = () => {
    setispie(!isPie);
  };

  const hanldebarChange = () => {
    setisbar(!isBar);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setT({
      dx: agex.split(","),
      dy: JSON.parse("[" + agey + "]"),
      l: isline,
      b: isBar,
      p: isPie,
      t: name
    });
    setP(v);
    console.log(p);
    setV(!v);
    console.log(v);
  };
  return p === v ? (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        style={{
          borderRadius: "5px",
          backgroundColor: "#f2f2f2",
          padding: "20px",
          height: "200%",
          width: "50%"
        }}
      >
        <label>Graph Title:</label>
        <br />
        <input
          type="text"
          value={name}
          style={{
            width: "100%",
            padding: "12px 20px",
            margin: "8px 0",
            display: "inline-block",
            border: "1px solid #ccc",
            bordeRadius: "4px",
            boxSizing: "border-box"
          }}
          required
          onChange={(e) => {
            handlenameChange(e);
          }}
        />
        <br />
        <label>X - Data (enter values separated by commas):</label>
        <br />
        <input
          type="text"
          value={agex}
          style={{
            width: "100%",
            padding: "12px 20px",
            margin: "8px 0",
            display: "inline-block",
            border: "1px solid #ccc",
            bordeRadius: "4px",
            boxSizing: "border-box"
          }}
          required
          onChange={(e) => {
            handleAgexChange(e);
          }}
        />
        <br />
        <label>Y -Data (enter values separated by commas):</label>
        <br />
        <input
          type="text"
          value={agey}
          style={{
            width: "100%",
            padding: "12px 20px",
            margin: "8px 0",
            display: "inline-block",
            border: "1px solid #ccc",
            bordeRadius: "4px",
            boxSizing: "border-box"
          }}
          required
          onChange={(e) => {
            handleAgeyChange(e);
          }}
        />
        <br />
        Select chart type
        <div className="topping">
          <input
            type="checkbox"
            id="Line"
            name="Line"
            value="Line Graph"
            checked={isline}
            onChange={handlelineChange}
          />
          Line Graph
        </div>
        <div>
          <input
            type="checkbox"
            id="Bar"
            name="Bar"
            value="Bar Graph"
            checked={isBar}
            onChange={hanldebarChange}
          />
          Bar Graph
        </div>
        <div>
          <input
            type="checkbox"
            id="Pie"
            name="Pie"
            value="Pie Chartr"
            checked={isPie}
            onChange={handlepieChange}
          />
          Pie Chart
        </div>
        <input
          type="submit"
          value="Submit"
          style={{
            width: "100%",
            backgroundColor: "#F54D28",
            color: "white",
            padding: "14px 20px",
            margin: "8px 0",
            border: "none",
            bordeRadius: "4px",
            cursor: "pointer"
          }}
        />
      </form>
    </div>
  ) : (
    <>
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          style={{
            borderRadius: "5px",
            backgroundColor: "#f2f2f2",
            padding: "20px",
            height: "200%",
            width: "50%"
          }}
        >
          <label>Graph Title:</label>
          <br />
          <input
            type="text"
            value={name}
            style={{
              width: "100%",
              padding: "12px 20px",
              margin: "8px 0",
              display: "inline-block",
              border: "1px solid #ccc",
              bordeRadius: "4px",
              boxSizing: "border-box"
            }}
            required
            onChange={(e) => {
              handlenameChange(e);
            }}
          />
          <br />
          <label>X - Data (enter values separated by commas):</label>
          <br />
          <input
            type="text"
            value={agex}
            style={{
              width: "100%",
              padding: "12px 20px",
              margin: "8px 0",
              display: "inline-block",
              border: "1px solid #ccc",
              bordeRadius: "4px",
              boxSizing: "border-box"
            }}
            required
            onChange={(e) => {
              handleAgexChange(e);
            }}
          />
          <br />
          <label>Y -Data (enter values separated by commas):</label>
          <br />
          <input
            type="text"
            value={agey}
            style={{
              width: "100%",
              padding: "12px 20px",
              margin: "8px 0",
              display: "inline-block",
              border: "1px solid #ccc",
              bordeRadius: "4px",
              boxSizing: "border-box"
            }}
            required
            onChange={(e) => {
              handleAgeyChange(e);
            }}
          />
          <br />
          Select chart type
          <div className="topping">
            <input
              type="checkbox"
              id="Line"
              name="Line"
              value="Line Graph"
              checked={isline}
              onChange={handlelineChange}
            />
            Line Graph
          </div>
          <div>
            <input
              type="checkbox"
              id="Bar"
              name="Bar"
              value="Bar Graph"
              checked={isBar}
              onChange={hanldebarChange}
            />
            Bar Graph
          </div>
          <div>
            <input
              type="checkbox"
              id="Pie"
              name="Pie"
              value="Pie Chartr"
              checked={isPie}
              onChange={handlepieChange}
            />
            Pie Chart
          </div>
          <input
            type="submit"
            value="Submit"
            style={{
              width: "100%",
              backgroundColor: "#F54D28",
              color: "white",
              padding: "14px 20px",
              margin: "8px 0",
              border: "none",
              bordeRadius: "4px",
              cursor: "pointer"
            }}
          />
        </form>
      </div>

      <div
        className="App"
        style={{
          alignItems: "center"
        }}
      >
        <Chart t={t} />
      </div>
    </>
  );
}

export default App;
