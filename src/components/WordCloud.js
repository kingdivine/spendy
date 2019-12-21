import React from "react";
import { TagCloud } from "react-tagcloud";

const WordCloud = ({ transactions }) => {
  let spendCount = {};
  const outgoings = transactions
    .filter(transaction => transaction.amount < 0)
    .filter(outgoing => outgoing.merchant !== null);

  for (let i = 0; i < outgoings.length; i++) {
    const merchantName = outgoings[i].merchant.name;
    if (merchantName in spendCount) {
      spendCount[merchantName] = spendCount[merchantName] + 1;
    } else {
      spendCount[merchantName] = 1;
    }
  }

  let tagData = [];
  Object.keys(spendCount).forEach(key => {
    tagData.push({ value: key, count: spendCount[key] });
  });

  return <TagCloud minSize={12} maxSize={35} tags={tagData} />;
};

export default WordCloud;
