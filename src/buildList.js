const { version } = require("../package.json");
const aeonTestnet = require("./tokens/1aeon.testnet.json");
const bscTestnet = require("./tokens/bsc.testnet.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "1Aeon Labs List",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "ipfs://QmNa8mQkrNKp1WEEeGjFezDmDeodkWRevGFN8JCV7b4Xir",
    keywords: ["1aeon", "default"],
    tokens: [...aeonTestnet, ...bscTestnet]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
