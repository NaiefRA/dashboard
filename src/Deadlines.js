import { useEffect, useState, useCallback } from "react";

const Deadlines = ({ progress }) => {
  const [deadlines, setDeadlines] = useState([
    {
      title: "Something",
      dueDate: "2025-04-27T23:51:41",
      progress: 80,
      timeLeft: { days: 0, hours: 0, mins: 0, secs: 0 },
    },
    {
      title: "Something else",
      dueDate: "2025-04-26T23:59:00",
      progress: 10,
      timeLeft: { days: 0, hours: 0, mins: 0, secs: 0 },
    },
  ]);

  const updateTimeLeft = useCallback(() => {
    setDeadlines((prevDeadlines) =>
      prevDeadlines.map((deadline) => {
        const now = new Date();
        const due = new Date(deadline.dueDate);

        const timeLeftms = due - now;

        const secs = Math.floor(timeLeftms / 1000) % 60;
        const mins = Math.floor(timeLeftms / (1000 * 60)) % 60;
        const hours = Math.floor(timeLeftms / (1000 * 60 * 60)) % 24;
        const days = Math.floor(timeLeftms / (1000 * 60 * 60 * 24));

        const timeLeftNew = { days, hours, mins, secs };

        return { ...deadline, timeLeft: timeLeftNew };
      })
    );
  }, []);

  useEffect(() => {
    updateTimeLeft();

    const interval = setInterval(() => {
      updateTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
  }, [updateTimeLeft]);

  return (
    <div className="container dead">
      <h2>Deadlines</h2>
      {deadlines.map((deadline, i) => {
        return (
          <div key={i}>
            <h3>{deadline.title}</h3>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ "--progress-width": `${deadline.progress}%` }}
              >
                ​
              </div>
            </div>
            <div className="date">
              {`${deadline.timeLeft.days} days, ${deadline.timeLeft.hours} hrs, ${deadline.timeLeft.mins} mins, ${deadline.timeLeft.secs} secs left`}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Deadlines;
