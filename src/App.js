import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function KMML() {
  const [change, setChange] = React.useState(false);
  const [mile, setML] = React.useState(0);
  const [kilometer, setKM] = React.useState(0);

  React.useEffect(() => {
    if (!change) {
      setML(Math.round(kilometer / 1.609));
    } else {
      setKM(mile * 1.609);
    }
  }, [kilometer, mile, change]);

  const reset = () => {
    setML(0);
    setKM(0);
  };

  const invert = () => {
    setChange((now) => !now);
  };

  return (
    <div>
      <h3>킬로미터/마일 변환기</h3>
      <div>
        <label>킬로미터: </label>
        <input
          placeholder="Kilometer"
          type="number"
          value={kilometer}
          onChange={(e) => setKM(Number(e.target.value))}
          disabled={change}
        />
      </div>
      <div>
        <label>마일: </label>
        <input
          placeholder="Mile"
          type="number"
          value={mile}
          onChange={(e) => setML(Number(e.target.value))}
          disabled={!change}
        />
      </div>
      <br />
      <div>
        <button className="resetButton" onClick={reset}>
          리셋
        </button>
        <button className="invertButton" onClick={invert}>
          전환
        </button>
      </div>
    </div>
  );
}

function MNHR() {
  const [change, setChange] = React.useState(false);
  const [minutes, setMN] = React.useState(0);
  const [hours, setHR] = React.useState(0);

  React.useEffect(() => {
    if (!change) {
      setHR(Math.round(minutes / 60));
    } else {
      setMN(hours * 60);
    }
  }, [minutes, hours, change]);

  const reset = () => {
    setMN(0);
    setHR(0);
  };

  const invert = () => {
    setChange((now) => !now);
  };

  return (
    <div>
      <h3>분/시 변환기</h3>
      <div>
        <label>분: </label>
        <input
          placeholder="Minutes"
          type="number"
          value={minutes}
          onChange={(e) => setMN(Number(e.target.value))}
          disabled={change}
        />
      </div>
      <div>
        <label>시: </label>
        <input
          placeholder="Hours"
          type="number"
          value={hours}
          onChange={(e) => setHR(Number(e.target.value))}
          disabled={!change}
        />
      </div>
      <br />
      <div>
        <button className="resetButton" onClick={reset}>
          리셋
        </button>
        <button className="invertButton" onClick={invert}>
          전환
        </button>
      </div>
    </div>
  );
}

function App() {
  const [selectedConverter, setSelectedConverter] =
    React.useState("minutesHours");

  return (
    <div className="container">
      <h1>변환기</h1>
      <select onChange={(e) => setSelectedConverter(e.target.value)}>
        <option value="minutesHours">분/시 변환기</option>
        <option value="kmMiles">킬로미터/마일 변환기</option>
      </select>
      <hr />
      {selectedConverter === "minutesHours" ? <MNHR /> : <KMML />}
    </div>
  );
}

export default App;
