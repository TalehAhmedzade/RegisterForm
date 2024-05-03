import React, { useEffect, useState } from "react";
import "./employee.css";
const Employee = () => {
  const [state, setState] = useState([]);
  const [employeesState, setEmployeesState] = useState([
    {
      id: 1,
      name: "Frodo Baggins",
      department: "Management",
      role: "CEO",
      alive: false,
    },

    {
      id: 2,
      name: "Samwise Gamgee",
      department: "Management",
      role: "CTO",
      alive: true,
    },
    {
      id: 3,
      name: "Gandalf the Gray",
      department: "Recruitment",
      role: "Lead-recruiter",
      alive: true,
    },
    {
      id: 4,
      name: "Aragorn",
      department: "Security",
      role: "Security officer",
      alive: false,
    },
    {
      id: 5,
      name: "Legolas",
      department: "Management",
      role: "Office manager",
      alive: true,
    },
  ]);
  useEffect(() => {
    fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
      .then((res) => res.json())
      .then((data) => setState(() => data));
  }, []);

  const [allEmployee, setAllEmployee] = useState(false);
  const [aliveEmployee, setAliveEmployee] = useState(false);
  const [notALiveEmployee, setnotAliveEmployee] = useState(false);

  const handleAliveButton = () => {
    setAllEmployee(false);
    setnotAliveEmployee(false);
    setAliveEmployee(true);
  };
  const handleNotAliveButton = () => {
    setAllEmployee(false);
    setnotAliveEmployee(true);
    setAliveEmployee(false);
  };
  const handleAllButton = () => {
    setAllEmployee(true);
    setnotAliveEmployee(false);
    setAliveEmployee(false);
  };

  return (
    <div>
      <button onClick={handleAliveButton}>Alive</button>
      <button onClick={handleNotAliveButton}>Not alive</button>
      <button onClick={handleAllButton}>All</button>
      {allEmployee &&
        employeesState.map((item) => {
          return (
            <div className="main" key={item.id}>
              <p>{item.id}</p> <p>{item.name}</p> <p>{item.department}</p>
              <p>{item.role}</p>
            </div>
          );
        })}
      {notALiveEmployee &&
        employeesState
          .filter((emp) => emp.alive === false)
          .map((item) => {
            return (
              <div className="main" key={item.id}>
                <p>{item.id}</p> <p>{item.name}</p> <p>{item.department}</p>
                <p>{item.role}</p>
              </div>
            );
          })}
      {aliveEmployee &&
        employeesState
          .filter((emp) => emp.alive === true)
          .map((item) => {
            return (
              <div className="main" key={item.id}>
                <p>{item.id}</p> <p>{item.name}</p> <p>{item.department}</p>
                <p>{item.role}</p>
              </div>
            );
          })}
    </div>
  );
};

export default Employee;
