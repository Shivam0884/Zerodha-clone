import React, { useEffect, useState } from "react";

const DateComponent = () => {
  const [storedDate, setStoredDate] = useState("");

  useEffect(() => {
    let savedDate = localStorage.getItem("staticDate");

    if (!savedDate) {
      const today = new Date();
      savedDate = `${today.getDate().toString().padStart(2, "0")}/${(
        today.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}/${today.getFullYear()}`;

      localStorage.setItem("staticDate", savedDate);
    }

    setStoredDate(savedDate);
  }, []);

  return <p style={{ fontSize: "0.8rem" }}>{storedDate}</p>;
};

export default DateComponent;
