import React from "react";
import { TagCloud } from "react-tagcloud";

const WordCloud = ({ transactions }) => {
  let spendCount = {};

  for (let i = 0; i < transactions.length; i++) {
    const merchantName = transactions[i].merchant.name;
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

  return <TagCloud minSize={6} maxSize={45} tags={tagData} />;
};

export default WordCloud;
