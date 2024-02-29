import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [speed, setSpeed] = useState("");
  return (
    <div className="app">
      <div className="sidebar">
        <RunnerDetails
          name={name}
          setName={setName}
          speed={speed}
          setSpeed={setSpeed}
        />
        <ListofParticipants name={name} speed={speed} />
      </div>
    </div>
  );
}

export function RunnerDetails({ name, setName, speed, setSpeed }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleRunner(e) {
    console.log(e.target.value);

    setName(e.target.value);
  }
  function handleSpeed(e) {
    console.log(e.target.value);
    setSpeed(e.target.value);
  }

  return (
    <form className="runner-details" onSubmit={handleSubmit}>
      <h2 className="head-runner">RUNNER DETAILS</h2>
      <div className="name">
        <label className="label">Name</label>
      </div>
      <div className="center">
        <input
          type="text"
          value={name}
          onChange={handleRunner}
          className="input"
        />
      </div>
      <div className="speed">
        <label className="label">Speed</label>
      </div>
      <div className="center">
        <input
          type="text"
          value={speed}
          onChange={handleSpeed}
          className="input"
        />
      </div>

      <div className="time">
        <label className="label">Start Time</label>
      </div>
      <div className="center">
        <input type="text" className="input" />
      </div>
      <button onClick={(handleRunner, handleSpeed)} className="btn">
        + ADD RUNNER
      </button>
    </form>
  );
}

function ListofParticipants({ name, speed }) {
  return (
    <div className="list">
      <div className="y">
        <p className="participants">LIST OF PARTICIPANTS</p>

        <div className="runners-track">
          <div>
            Name
            <p>{name}</p>
          </div>
          <div>
            Speed
            <p>{speed}</p>
          </div>
          <div>
            Start Time<p></p>
          </div>
          <div>
            End Time<p></p>
          </div>
        </div>
      </div>
      <div className="x">
        <button className="btn-race">
          <div className="btn-text">Start race</div>
        </button>
      </div>
    </div>
  );
}
