const fs = require('fs');

const ts = fs.readFileSync('src/data/products.ts', 'utf-8');
const existingIds = new Set([...ts.matchAll(/"id":\s*"([^"]+)"/g)].map(m => m[1]));
const existingCodes = new Set([...ts.matchAll(/"code":\s*"([^"]+)"/g)].map(m => m[1]));

// 16 Boom Barriers
const boomBarriers = [
  {
    id: "azbb113-azbto12m",
    code: "AZBB113/AZBTO12M",
    series: "ZEN",
    name: "BLDC Boom Barrier",
    category: "Boom Barriers",
    price: 47400,
    priceNote: "+18% TAX EXTRA",
    particulars: [
      "BLDC BARRIER - AZBB113",
      "BOOM 2M ROUND LED - AZBT012M",
      "TRANSMITTER - AZBLDCTX22 (2 NOS)"
    ],
    accordions: [
      {
        title: "PARTICULARS",
        items: [
          "BLDC BARRIER - AZBB113",
          "BOOM 2M ROUND LED - AZBT012M",
          "TRANSMITTER - AZBLDCTX22 (2 NOS)"
        ]
      }
    ]
  },
  {
    id: "azbb115a-azbt01a6m",
    code: "AZBB115A/AZBT01A6M",
    series: "ROD",
    name: "Telescopic Hybrid BLDC Boom Barrier",
    category: "Boom Barriers",
    price: 72700,
    priceNote: "+18% TAX EXTRA",
    particulars: [
      "BLDC BARRIER - AZBB115A",
      "TELESCOPIC BOOM 6 MTR - AZBT01A6M",
      "TRANSMITTER - AZBLDCTX23 (2 Nos)",
      "V HOLDER - AZBBVH01A"
    ],
    accordions: [
      {
        title: "PARTICULARS",
        items: [
          "BLDC BARRIER - AZBB115A",
          "TELESCOPIC BOOM 6 MTR - AZBT01A6M",
          "TRANSMITTER - AZBLDCTX23 (2 Nos)",
          "V HOLDER - AZBBVH01A"
        ]
      }
    ]
  },
  {
    id: "azbb115a-azba06a",
    code: "AZBB115A/AZBA06A",
    series: "ROD",
    name: "Arm Out Hybrid BLDC Boom Barrier",
    category: "Boom Barriers",
    price: 76500,
    priceNote: "+18% TAX EXTRA",
    particulars: [
      "BLDC BARRIER - AZBB115A",
      "ARM OUT SQUARE BOOM 6 MTR - AZBA06A",
      "TRANSMITTER - AZBLDCTX23 (2 Nos)",
      "V HOLDER - AZBBVH01A"
    ],
    accordions: [
      {
        title: "PARTICULARS",
        items: [
          "BLDC BARRIER - AZBB115A",
          "ARM OUT SQUARE BOOM 6 MTR - AZBA06A",
          "TRANSMITTER - AZBLDCTX23 (2 Nos)",
          "V HOLDER - AZBBVH01A"
        ]
      }
    ]
  },
  {
    id: "azbb115a-azblo7a6m",
    code: "AZBB115A/AZBLO7A6M",
    series: "ROD",
    name: "LED BLDC Hybrid Boom Barrier",
    category: "Boom Barriers",
    price: 93400,
    priceNote: "+18% TAX EXTRA",
    particulars: [
      "BLDC BARRIER - AZBB115A",
      "LED BOOM 6 MTR - AZBL07A6M",
      "TRANSMITTER - AZBLDCTX23 (2 Nos)",
      "V HOLDER - AZBBVH01A"
    ],
    accordions: [
      {
        title: "PARTICULARS",
        items: [
          "BLDC BARRIER - AZBB115A",
          "LED BOOM 6 MTR - AZBL07A6M",
          "TRANSMITTER - AZBLDCTX23 (2 Nos)",
          "V HOLDER - AZBBVH01A"
        ]
      }
    ]
  },
  {
    id: "azbb115a-azbf05a90d",
    code: "AZBB115A/AZBF05A90D",
    series: "ROD",
    name: "Folding Hybrid BLDC Boom Barrier 90 Degree",
    category: "Boom Barriers",
    price: 101400,
    priceNote: "+18% TAX EXTRA",
    particulars: [
      "BLDC BARRIER - AZBB115A",
      "FOLDING BOOM 4 MTR - AZBF05A90D",
      "TRANSMITTER - AZBLDCTX23 (2 Nos)",
      "V HOLDER - AZBBVH01A"
    ],
    accordions: [
      {
        title: "PARTICULARS",
        items: [
          "BLDC BARRIER - AZBB115A",
          "FOLDING BOOM 4 MTR - AZBF05A90D",
          "TRANSMITTER - AZBLDCTX23 (2 Nos)",
          "V HOLDER - AZBBVH01A"
        ]
      }
    ]
  },
  {
    id: "azbb115a-azbf10a180d",
    code: "AZBB115A/AZBF10A180D",
    series: "ROD",
    name: "Folding Hybrid BLDC Boom Barrier 180 Degree",
    category: "Boom Barriers",
    price: 104500,
    priceNote: "+18% TAX EXTRA",
    particulars: [
      "BLDC BARRIER - AZBB115A",
      "FOLDING BOOM 4 MTR - AZBF10A180D",
      "TRANSMITTER - AZBLDCTX23 (2 Nos)",
      "V HOLDER - AZBBVH01A"
    ],
    accordions: [
      {
        title: "PARTICULARS",
        items: [
          "BLDC BARRIER - AZBB115A",
          "FOLDING BOOM 4 MTR - AZBF10A180D",
          "TRANSMITTER - AZBLDCTX23 (2 Nos)",
          "V HOLDER - AZBBVH01A"
        ]
      }
    ]
  },
  {
    id: "azbb115a-azbfo3a4-5m",
    code: "AZBB115A/AZBFO3A4.5M",
    series: "ROD",
    name: "Fence Hybrid BLDC Boom Barrier",
    category: "Boom Barriers",
    price: 98400,
    priceNote: "+18% TAX EXTRA",
    particulars: [
      "BLDC BARRIER - AZBB115A",
      "FENCE BOOM 4.5 MTR - AZBFO3A4.5M",
      "TRANSMITTER - AZBLDCTX23 (2 Nos)"
    ],
    accordions: [
      {
        title: "PARTICULARS",
        items: [
          "BLDC BARRIER - AZBB115A",
          "FENCE BOOM 4.5 MTR - AZBFO3A4.5M",
          "TRANSMITTER - AZBLDCTX23 (2 Nos)"
        ]
      }
    ]
  },
  {
    id: "azbbl18-azbt01a6m",
    code: "AZBBL18/AZBT01A6M",
    series: "RUSH",
    name: "Telescopic BLDC Boom Barrier (Non Spring)",
    category: "Boom Barriers",
    price: 85000,
    priceNote: "+18% TAX EXTRA",
    particulars: [
      "BLDC BARRIER - AZBBL18",
      "TELESCOPIC BOOM 6 MTR - AZBT01A6M",
      "TRANSMITTER - AZBLDCTX23 (2 Nos)",
      "V HOLDER - AZBBVH01A"
    ],
    accordions: [
      {
        title: "PARTICULARS",
        items: [
          "BLDC BARRIER - AZBBL18",
          "TELESCOPIC BOOM 6 MTR - AZBT01A6M",
          "TRANSMITTER - AZBLDCTX23 (2 Nos)",
          "V HOLDER - AZBBVH01A"
        ]
      }
    ]
  },
  {
    id: "azbbl18-azba06a",
    code: "AZBBL18/AZBA06A",
    series: "RUSH",
    name: "Arm Out BLDC Boom Barrier (Non Spring)",
    category: "Boom Barriers",
    price: 89900,
    priceNote: "+18% TAX EXTRA",
    particulars: [
      "BLDC BARRIER - AZBBL18",
      "ARM OUT SQUARE BOOM 6 MTR - AZBA06A",
      "TRANSMITTER - AZBLDCTX23 (2 Nos)",
      "V HOLDER - AZBBVH01A"
    ],
    accordions: [
      {
        title: "PARTICULARS",
        items: [
          "BLDC BARRIER - AZBBL18",
          "ARM OUT SQUARE BOOM 6 MTR - AZBA06A",
          "TRANSMITTER - AZBLDCTX23 (2 Nos)",
          "V HOLDER - AZBBVH01A"
        ]
      }
    ]
  },
  {
    id: "azbbl18-azblo7a6m",
    code: "AZBBL18/AZBLO7A6M",
    series: "RUSH",
    name: "LED BLDC Boom Barrier (Non Spring)",
    category: "Boom Barriers",
    price: 98200,
    priceNote: "+18% TAX EXTRA",
    particulars: [
      "BLDC BARRIER - AZBBL18",
      "LED BOOM 6 MTR - AZBL07A6M",
      "TRANSMITTER - AZBLDCTX23 (2 Nos)",
      "V HOLDER - AZBBVH01A"
    ],
    accordions: [
      {
        title: "PARTICULARS",
        items: [
          "BLDC BARRIER - AZBBL18",
          "LED BOOM 6 MTR - AZBL07A6M",
          "TRANSMITTER - AZBLDCTX23 (2 Nos)",
          "V HOLDER - AZBBVH01A"
        ]
      }
    ]
  },
  {
    id: "azbbl18-azbf05a90d",
    code: "AZBBL18/AZBF05A90D",
    series: "RUSH",
    name: "Folding BLDC Boom Barrier 90 Degree (Non Spring)",
    category: "Boom Barriers",
    price: 109800,
    priceNote: "+18% TAX EXTRA",
    particulars: [
      "BLDC BARRIER - AZBBL18",
      "FOLDING BOOM 4 MTR - AZBF05A90D",
      "TRANSMITTER - AZBLDCTX23 (2 Nos)",
      "V HOLDER - AZBBVH01A"
    ],
    accordions: [
      {
        title: "PARTICULARS",
        items: [
          "BLDC BARRIER - AZBBL18",
          "FOLDING BOOM 4 MTR - AZBF05A90D",
          "TRANSMITTER - AZBLDCTX23 (2 Nos)",
          "V HOLDER - AZBBVH01A"
        ]
      }
    ]
  },
  {
    id: "azbbl18-azbf10a180d",
    code: "AZBBL18/AZBF10A180D",
    series: "RUSH",
    name: "Folding BLDC Boom Barrier 180 Degree (Non Spring)",
    category: "Boom Barriers",
    price: 110500,
    priceNote: "+18% TAX EXTRA",
    particulars: [
      "BLDC BARRIER - AZBBL18",
      "FOLDING BOOM 4 MTR - AZBF10A180D",
      "TRANSMITTER - AZBLDCTX23 (2 Nos)",
      "V HOLDER - AZBBVH01A"
    ],
    accordions: [
      {
        title: "PARTICULARS",
        items: [
          "BLDC BARRIER - AZBBL18",
          "FOLDING BOOM 4 MTR - AZBF10A180D",
          "TRANSMITTER - AZBLDCTX23 (2 Nos)",
          "V HOLDER - AZBBVH01A"
        ]
      }
    ]
  },
  {
    id: "azbbl18-azbfo3a4-5m",
    code: "AZBBL18/AZBFO3A4.5M",
    series: "RUSH",
    name: "Fence BLDC Boom Barrier (Non Spring)",
    category: "Boom Barriers",
    price: 107000,
    priceNote: "+18% TAX EXTRA",
    particulars: [
      "BLDC BARRIER - AZBBL18",
      "FENCE BOOM 4.5 MTR - AZBF03A4.5M",
      "TRANSMITTER - AZBLDCTX23 (2 Nos)"
    ],
    accordions: [
      {
        title: "PARTICULARS",
        items: [
          "BLDC BARRIER - AZBBL18",
          "FENCE BOOM 4.5 MTR - AZBF03A4.5M",
          "TRANSMITTER - AZBLDCTX23 (2 Nos)"
        ]
      }
    ]
  },
  {
    id: "azbb115-azbf036m",
    code: "AZBB115/AZBF036M",
    series: "STAR",
    name: "Fence BLDC Boom Barrier",
    category: "Boom Barriers",
    price: 113200,
    priceNote: "+18% TAX EXTRA",
    particulars: [
      "BLDC BARRIER - AZBB115",
      "FENCE BOOM 6MTR - AZBF036M",
      "TRANSMITTER - AZBLDCTX22 - 2 NOS"
    ],
    accordions: [
      {
        title: "PARTICULARS",
        items: [
          "BLDC BARRIER - AZBB115",
          "FENCE BOOM 6MTR - AZBF036M",
          "TRANSMITTER - AZBLDCTX22 - 2 NOS"
        ]
      }
    ]
  },
  {
    id: "azbb119-azbt088m",
    code: "AZBB119/AZBT088M",
    series: "TITAN",
    name: "8M Telescopic BLDC Boom Barrier",
    category: "Boom Barriers",
    price: 187000,
    priceNote: "+18% TAX EXTRA",
    particulars: [
      "BLDC BARRIER - AZBB119",
      "TELESCOPIC BOOM 8 MTR - AZBT088M (1+7 = 8M)",
      "TRANSMITTER - AZBLDCTX23 (2 Nos)",
      "V HOLDER - AZBBVH01A"
    ],
    accordions: [
      {
        title: "PARTICULARS",
        items: [
          "BLDC BARRIER - AZBB119",
          "TELESCOPIC BOOM 8 MTR - AZBT088M (1+7 = 8M)",
          "TRANSMITTER - AZBLDCTX23 (2 Nos)",
          "V HOLDER - AZBBVH01A"
        ]
      }
    ]
  },
  {
    id: "azbba117b-azba09a",
    code: "AZBBA117B/AZBA09A",
    series: "ADD",
    name: "Advertising BLDC Boom Barrier",
    category: "Boom Barriers",
    price: 230000,
    priceNote: "+18% TAX EXTRA",
    particulars: [
      "BLDC BARRIER - AZBB117B",
      "BOOM - 4 MTR 6SEC - AZBA09A",
      "TRANSMITTER - AZBLDCTX23 (2 Nos)"
    ],
    accordions: [
      {
        title: "PARTICULARS",
        items: [
          "BLDC BARRIER - AZBB117B",
          "BOOM - 4 MTR 6SEC - AZBA09A",
          "TRANSMITTER - AZBLDCTX23 (2 Nos)"
        ]
      }
    ]
  }
];

// 39 Brand New Accessories
const newAccessoriesList = [
  {
    id: "azbldctx22",
    code: "AZBLDCTX22",
    name: "BLDC Transmitter (Suitable for AZBB113, AZBB114, AZBB115, AZBB116)",
    category: "Accessories",
    price: 2000,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No Transmitter"],
    accordions: [{ title: "PARTICULARS", items: ["1 No Transmitter"] }]
  },
  {
    id: "azbldctx23",
    code: "AZBLDCTX23",
    name: "BLDC Transmitter (Suitable for AZBL18, AZBB119, AZBB117B, AZBB115A)",
    category: "Accessories",
    price: 3100,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No Transmitter"],
    accordions: [{ title: "PARTICULARS", items: ["1 No Transmitter"] }]
  },
  {
    id: "azt142",
    code: "AZT142",
    name: "Transmitter",
    category: "Accessories",
    price: 2610,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No Transmitter"],
    accordions: [{ title: "PARTICULARS", items: ["1 No Transmitter"] }]
  },
  {
    id: "azlb33",
    code: "AZLB33",
    name: "Loop Detector Single Channel",
    category: "Accessories",
    price: 4990,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No Single Channel Loop Detector"],
    accordions: [{ title: "PARTICULARS", items: ["1 No Single Channel Loop Detector"] }]
  },
  {
    id: "azlb34",
    code: "AZLB34",
    name: "Loop Detector Double Channel",
    category: "Accessories",
    price: 11350,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No Double Channel Loop Detector"],
    accordions: [{ title: "PARTICULARS", items: ["1 No Double Channel Loop Detector"] }]
  },
  {
    id: "azbbvh01",
    code: "AZBBVH01",
    name: "V-Holder",
    category: "Accessories",
    price: 4020,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No V-Holder"],
    accordions: [{ title: "PARTICULARS", items: ["1 No V-Holder"] }]
  },
  {
    id: "azbbvh01a",
    code: "AZBBVH01A",
    name: "V-Holder",
    category: "Accessories",
    price: 5020,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No V-Holder"],
    accordions: [{ title: "PARTICULARS", items: ["1 No V-Holder"] }]
  },
  {
    id: "azbbmvh02",
    code: "AZBBMVH02",
    name: "Boom Barrier Mobile Stand",
    category: "Accessories",
    price: 1990,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No Mobile Stand"],
    accordions: [{ title: "PARTICULARS", items: ["1 No Mobile Stand"] }]
  },
  {
    id: "azbt016m",
    code: "AZBT016M",
    name: "Telescopic Boom 6 Mtr (Suitable for AZBB114, AZBB115)",
    category: "Accessories",
    price: 14382,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No 6m Telescopic Boom"],
    accordions: [{ title: "PARTICULARS", items: ["1 No 6m Telescopic Boom"] }]
  },
  {
    id: "azbt014m",
    code: "AZBT014M",
    name: "Telescopic Boom 4 Mtr (Suitable for AZBB114, AZBB115)",
    category: "Accessories",
    price: 10700,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No 4m Telescopic Boom"],
    accordions: [{ title: "PARTICULARS", items: ["1 No 4m Telescopic Boom"] }]
  },
  {
    id: "azbf0590d",
    code: "AZBF0590D",
    name: "Folding Boom 90 Degree 6Mtr (Suitable for AZBB114, AZBB115)",
    category: "Accessories",
    price: 57400,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No 6m 90° Folding Boom"],
    accordions: [{ title: "PARTICULARS", items: ["1 No 6m 90° Folding Boom"] }]
  },
  {
    id: "azbl076m",
    code: "AZBL076M",
    name: "LED Boom 6Mtr (Suitable for AZBB114, AZBB115)",
    category: "Accessories",
    price: 36000,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No 6m LED Boom"],
    accordions: [{ title: "PARTICULARS", items: ["1 No 6m LED Boom"] }]
  },
  {
    id: "azba04",
    code: "AZBA04",
    name: "Arm Out Round Boom 4Mtr (Suitable for AZBB114, AZBB115)",
    category: "Accessories",
    price: 17900,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No 4m Round Boom"],
    accordions: [{ title: "PARTICULARS", items: ["1 No 4m Round Boom"] }]
  },
  {
    id: "azbf034-5m",
    code: "AZBF034.5M",
    name: "Fence Boom 4.5Mtr (Suitable for AZBB114, AZBB115)",
    category: "Accessories",
    price: 43800,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No 4.5m Fence Boom"],
    accordions: [{ title: "PARTICULARS", items: ["1 No 4.5m Fence Boom"] }]
  },
  {
    id: "azbf036m",
    code: "AZBF036M",
    name: "Fence Boom 6Mtr (Suitable for AZBB114, AZBB115)",
    category: "Accessories",
    price: 58200,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No 6m Fence Boom"],
    accordions: [{ title: "PARTICULARS", items: ["1 No 6m Fence Boom"] }]
  },
  {
    id: "azbbldccb730",
    code: "AZBBLDCCB730",
    name: "BLDC Control Board (Suitable for AZBB113)",
    category: "Accessories",
    price: 15900,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No Control Board"],
    accordions: [{ title: "PARTICULARS", items: ["1 No Control Board"] }]
  },
  {
    id: "azbbldccb704",
    code: "AZBBLDCCB704",
    name: "BLDC Control Board (Suitable for AZBB114, AZBB115, AZBB116)",
    category: "Accessories",
    price: 18500,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No Control Board"],
    accordions: [{ title: "PARTICULARS", items: ["1 No Control Board"] }]
  },
  {
    id: "azbbai606",
    code: "AZBBAI606",
    name: "Arrow Indication LED Light",
    category: "Accessories",
    price: 2230,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No Arrow Indication LED Light"],
    accordions: [{ title: "PARTICULARS", items: ["1 No Arrow Indication LED Light"] }]
  },
  {
    id: "azbt01a6m",
    code: "AZBT01A6M",
    name: "Telescopic Boom 6 Mtr (Suitable for AZBBL18, AZBB115A)",
    category: "Accessories",
    price: 24800,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No 6m Telescopic Boom"],
    accordions: [{ title: "PARTICULARS", items: ["1 No 6m Telescopic Boom"] }]
  },
  {
    id: "azbl07a6m",
    code: "AZBL07A6M",
    name: "LED Boom 6Mtr (Suitable for AZBBL18, AZBB115A)",
    category: "Accessories",
    price: 39500,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No 6m LED Boom"],
    accordions: [{ title: "PARTICULARS", items: ["1 No 6m LED Boom"] }]
  },
  {
    id: "azbf03a4-5m",
    code: "AZBF03A4.5M",
    name: "Two Fence Boom 4.5 Mtr (Suitable for AZBBL18, AZBB115A)",
    category: "Accessories",
    price: 43800,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No 4.5m Two Fence Boom"],
    accordions: [{ title: "PARTICULARS", items: ["1 No 4.5m Two Fence Boom"] }]
  },
  {
    id: "azbf05a90d",
    code: "AZBF05A90D",
    name: "Folding Boom 90 Degree 4Mtr (Suitable for AZBBL18, AZBB115A)",
    category: "Accessories",
    price: 46800,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No 4m 90° Folding Boom"],
    accordions: [{ title: "PARTICULARS", items: ["1 No 4m 90° Folding Boom"] }]
  },
  {
    id: "azbf10a180d",
    code: "AZBF10A180D",
    name: "Folding Boom 180 Degree 4Mtr (Suitable for AZBBL18, AZBB115A)",
    category: "Accessories",
    price: 48200,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No 4m 180° Folding Boom"],
    accordions: [{ title: "PARTICULARS", items: ["1 No 4m 180° Folding Boom"] }]
  },
  {
    id: "azbt088m",
    code: "AZBT088M",
    name: "Telescopic Boom 8M (7+1) (Suitable for AZBBL119)",
    category: "Accessories",
    price: 38800,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No 8m Telescopic Boom"],
    accordions: [{ title: "PARTICULARS", items: ["1 No 8m Telescopic Boom"] }]
  },
  {
    id: "azba09a",
    code: "AZBA09A",
    name: "Advertisement Boom 2.8 Mtr (Suitable for AZBBA117B)",
    category: "Accessories",
    price: 89700,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No 2.8m Advertisement Boom"],
    accordions: [{ title: "PARTICULARS", items: ["1 No 2.8m Advertisement Boom"] }]
  },
  {
    id: "azba06a",
    code: "AZBA06A",
    name: "Arm Out Square Boom 6Mtr (Suitable for AZBBL18)",
    category: "Accessories",
    price: 25500,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No 6m Square Boom"],
    accordions: [{ title: "PARTICULARS", items: ["1 No 6m Square Boom"] }]
  },
  {
    id: "azbbcbns03",
    code: "AZBBCBNS03",
    name: "Controller (Suitable for AZBBL18, AZBB117B)",
    category: "Accessories",
    price: 21200,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No Controller"],
    accordions: [{ title: "PARTICULARS", items: ["1 No Controller"] }]
  },
  {
    id: "azbbcbns04",
    code: "AZBBCBNS04",
    name: "Controller (Suitable for AZBB119)",
    category: "Accessories",
    price: 35866,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No Controller"],
    accordions: [{ title: "PARTICULARS", items: ["1 No Controller"] }]
  },
  {
    id: "azbbcbns05",
    code: "AZBBCBNS05",
    name: "Controller (Suitable for AZBB115A)",
    category: "Accessories",
    price: 21200,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No Controller"],
    accordions: [{ title: "PARTICULARS", items: ["1 No Controller"] }]
  },
  {
    id: "azbbaom01",
    code: "AZBBAOM01",
    name: "Power Failure Auto Opening Module (Suitable for AZBB115A, AZBBL18, AZBB119)",
    category: "Accessories",
    price: 17500,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No Auto Opening Module"],
    accordions: [{ title: "PARTICULARS", items: ["1 No Auto Opening Module"] }]
  },
  {
    id: "azbbbm19",
    code: "AZBBBM19",
    name: "Battery Backup Module (Suitable for AZBB115A, AZBBL18)",
    category: "Accessories",
    price: 6200,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No Battery Backup Module"],
    accordions: [{ title: "PARTICULARS", items: ["1 No Battery Backup Module"] }]
  },
  {
    id: "azbbps708",
    code: "AZBBPS708",
    name: "Power Supply 24V 8A (Suitable for AZBBL18)",
    category: "Accessories",
    price: 6900,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No 24V 8A Power Supply"],
    accordions: [{ title: "PARTICULARS", items: ["1 No 24V 8A Power Supply"] }]
  },
  {
    id: "azbbps720",
    code: "AZBBPS720",
    name: "Power Supply 24V 20.8A (Suitable for AZBB117B)",
    category: "Accessories",
    price: 7500,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No 24V 20.8A Power Supply"],
    accordions: [{ title: "PARTICULARS", items: ["1 No 24V 20.8A Power Supply"] }]
  },
  {
    id: "azbbps709",
    code: "AZBBPS709",
    name: "Power Supply for LED 12V 15A (Suitable for AZBB117B)",
    category: "Accessories",
    price: 6900,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No 12V 15A Power Supply"],
    accordions: [{ title: "PARTICULARS", items: ["1 No 12V 15A Power Supply"] }]
  },
  {
    id: "azbbps710",
    code: "AZBBPS710",
    name: "Power Supply 24V 10A (Suitable for AZBB119)",
    category: "Accessories",
    price: 7500,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No 24V 10A Power Supply"],
    accordions: [{ title: "PARTICULARS", items: ["1 No 24V 10A Power Supply"] }]
  },
  {
    id: "azbbleds20",
    code: "AZBBLEDS20",
    name: "LED Strip 6 Meter",
    category: "Accessories",
    price: 10450,
    priceNote: "+18% TAX EXTRA",
    particulars: ["6 Mtr (1 No) LED Strip"],
    accordions: [{ title: "PARTICULARS", items: ["6 Mtr (1 No) LED Strip"] }]
  },
  {
    id: "azbted21",
    code: "AZBTED21",
    name: "Edge Rubber (Suitable for AZBT01A6M, AZBT088M, AZBA06A)",
    category: "Accessories",
    price: 4450,
    priceNote: "+18% TAX EXTRA",
    particulars: ["3 Mtr Edge Rubber"],
    accordions: [{ title: "PARTICULARS", items: ["3 Mtr Edge Rubber"] }]
  },
  {
    id: "azbbssb01",
    code: "AZBBSSB01",
    name: "Stop Sign Board",
    category: "Accessories",
    price: 450,
    priceNote: "+18% TAX EXTRA",
    particulars: ["1 No Stop Sign Board"],
    accordions: [{ title: "PARTICULARS", items: ["1 No Stop Sign Board"] }]
  }
];

console.log('Total new boom barriers to add:', boomBarriers.length);
console.log('Total new accessories to add:', newAccessoriesList.length);

// Check if any id clashes with existingIds
const allNew = [...boomBarriers, ...newAccessoriesList];
const duplicates = allNew.filter(p => existingIds.has(p.id));
console.log('Duplicate IDs found with existing products:', duplicates.map(p => p.id));
