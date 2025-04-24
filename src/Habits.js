import React, { useState } from "react";

const habitsList = ["Drink water", "Sleep 8 hours", "Read a book"];

const Habit = () => {
  const [habits, setHabits] = useState(
    habitsList.map((habit) => ({ name: habit, done: false }))
  );

  const toggleHabit = (index) => {
    const updated = [...habits];
    updated[index].done = !updated[index].done;
    setHabits(updated);
  };

  return (
    <div className="habit container">
      <h2>Habits</h2>
      {habits.map((habit, index) => (
        <div
          key={index}
          className={`habit-item ${habit.done ? "completed" : ""}`}
          onClick={() => toggleHabit(index)}
        >
          <label>
            <input
              type="checkbox"
              checked={habit.done}
              onChange={() => toggleHabit(index)}
            />
            {habit.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Habit;
