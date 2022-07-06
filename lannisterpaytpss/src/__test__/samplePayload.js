export const sample1 = {
  ID: 1308,
  Amount: 12580,
  Currency: "NGN",
  CustomerEmail: "anon8@customers.io",
  SplitInfo: [
    {
      SplitType: "FLAT",
      SplitValue: 45,
      SplitEntityId: "LNPYACC0019",
    },
    {
      SplitType: "RATIO",
      SplitValue: 3,
      SplitEntityId: "LNPYACC0011",
    },
    {
      SplitType: "PERCENTAGE",
      SplitValue: 3,
      SplitEntityId: "LNPYACC0015",
    },
  ],
};

export const sample2 = {
  ID: 13092,
  Amount: 4500,
  Currency: "NGN",
  CustomerEmail: "anon8@customers.io",
  SplitInfo: [
    {
      SplitType: "FLAT",
      SplitValue: 450,
      SplitEntityId: "LNPYACC0019",
    },
    {
      SplitType: "RATIO",
      SplitValue: 3,
      SplitEntityId: "LNPYACC0011",
    },
    {
      SplitType: "PERCENTAGE",
      SplitValue: 3,
      SplitEntityId: "LNPYACC0015",
    },
    {
      SplitType: "RATIO",
      SplitValue: 2,
      SplitEntityId: "LNPYACC0016",
    },
    {
      SplitType: "FLAT",
      SplitValue: 2450,
      SplitEntityId: "LNPYACC0029",
    },
    {
      SplitType: "PERCENTAGE",
      SplitValue: 10,
      SplitEntityId: "LNPYACC0215",
    },
  ],
};

export const sampleOneResult = {
  ID: 1308,
  Balance: 0,
  SplitBreakdown: [
    {
      SplitEntityId: "LNPYACC0019",
      Amount: 5000,
    },
    {
      SplitEntityId: "LNPYACC0011",
      Amount: 2000,
    },
    {
      SplitEntityId: "LNPYACC0015",
      Amount: 2000,
    },
  ],
};

export const sampleTwoResult = {
  ID: 13092,
  Balance: 0,
  SplitBreakdown: [
    {
      SplitEntityId: "LNPYACC0019",
      Amount: 450,
    },
    {
      SplitEntityId: "LNPYACC0011",
      Amount: 2450,
    },
    {
      SplitEntityId: "LNPYACC0015",
      Amount: 48,
    },
    {
      SplitEntityId: "LNPYACC0016",
      Amount: 155.2,
    },
    {
      SplitEntityId: "LNPYACC0029",
      Amount: 838.08,
    },
    {
      SplitEntityId: "LNPYACC0215",
      Amount: 558.72,
    },
  ],
};
