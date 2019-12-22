import React from "react";
import moment from "moment";

const AverageSpend = ({ transactions }) => {
  const calculateAverage = period => {
    let expenditures = {};
    transactions.forEach(transaction => {
      const year = moment(transaction.created).year();
      const month = moment(transaction.created).month();
      const week = moment(transaction.created).week();
      const key = period === "month" ? `${month}${year}` : `${week}${year}`;
      if (key in expenditures) {
        expenditures[key] = expenditures[key] + Math.abs(transaction.amount);
      } else {
        expenditures[key] = Math.abs(transaction.amount);
      }
    });

    const sum = Object.values(expenditures).reduce(
      (total, current) => (total += current)
    );
    return sum / Object.keys(expenditures).length;
  };

  const formatExpenditure = amount =>
    `${transactions[0].currency}${amount / 100}`;

  return (
    <>
      <div>
        Monthly Average: {formatExpenditure(calculateAverage("month"))}{" "}
      </div>
      <div>Weekly Average: {formatExpenditure(calculateAverage("week"))} </div>
    </>
  );
};

export default AverageSpend;
