export interface Finding {
  id: number;
  letter: string;
  title: string;
  sourceFile: string;
  orderId?: string;
  documented: string;
  actual: string;
  impact: string;
  isMostSerious?: boolean;
}

export interface OrderItem {
  id: string;
  amount: number;
  formattedAmount: string;
  status: 'shipped' | 'delivered' | 'refunded';
  includedInRevenue: boolean;
  treatment: string;
}

export const CANDIDATE_INFO = {
  candidateName: 'Ankalaiah Bandlamudi',
  role: 'Product Analyst Intern',
  company: 'Phyllo',
  projectTitle: 'Product Analyst Intern – Take-Home Assignment',
  footerText: 'Phyllo Product Analyst Intern Assignment — Ankalaiah Bandlamudi',
};

export const EXECUTIVE_SUMMARY = {
  overview:
    'This assignment involved comparing API documentation with captured API responses, calculating revenue, responding to a finance complaint, and preparing a bug report.',
  tasks: [
    {
      number: 'Task 1',
      title: 'What doesn\'t match?',
      desc: 'Compared official API documentation against captured responses to identify 5 contract mismatches, identifying the monetary format mismatch as the most serious issue.',
    },
    {
      number: 'Task 2',
      title: 'What\'s the total revenue?',
      desc: 'Audited the 6 order totals and calculated revenue of $225.70 under the stated assumption, excluding refunded order ord_1003.',
    },
    {
      number: 'Task 3',
      title: 'Write two things',
      desc: 'Composed (A) a clear, professional email reply to Priya addressing reconciliation causes, and (B) a factual engineering bug report.',
    },
  ],
};

export const FINDINGS: Finding[] = [
  {
    id: 1,
    letter: 'A',
    title: 'Status mismatch',
    sourceFile: 'orders_page1.json',
    orderId: 'ord_1003',
    documented: 'Documentation says status can be: pending, shipped, delivered, cancelled.',
    actual: 'orders_page1.json → ord_1003 → status = refunded',
    impact: 'Clients may mishandle or reject refunded orders.',
    isMostSerious: false,
  },
  {
    id: 2,
    letter: 'B',
    title: 'Monetary format mismatch',
    sourceFile: 'orders_page2.json',
    orderId: 'ord_1006',
    documented: 'Documentation says all monetary amounts are integers in the smallest currency unit.',
    actual:
      'orders_page2.json → ord_1006:\nsubtotal = 44.0\ntax = 3.63\nshipping = 5.99\ntotal = 53.62',
    impact:
      'This can cause incorrect financial calculations because the API format differs from the documented contract.',
    isMostSerious: true,
  },
  {
    id: 3,
    letter: 'C',
    title: 'Customer email mismatch',
    sourceFile: 'orders_page2.json',
    orderId: 'ord_1005',
    documented: 'Documentation says customer email is always present.',
    actual: 'orders_page2.json → ord_1005 → email = null',
    impact: 'Clients assuming email is always present may fail or behave incorrectly.',
    isMostSerious: false,
  },
  {
    id: 4,
    letter: 'D',
    title: 'Pagination mismatch',
    sourceFile: 'orders_page1.json & orders_page2.json',
    documented: 'Pagination flags indicate whether further records exist.',
    actual:
      'orders_page1.json reports:\nhas_more = false\nnext_cursor = cur_8f2a19bd\n\nBut orders_page2.json exists using that cursor.',
    impact: 'A client relying on has_more may stop after page 1 and miss orders.',
    isMostSerious: false,
  },
  {
    id: 5,
    letter: 'E',
    title: 'Missing-order response mismatch',
    sourceFile: 'order_ord_9999.json',
    orderId: 'ord_9999',
    documented: 'Documentation says GET /v1/orders/{id} returns HTTP 404 if the order does not exist.',
    actual: 'order_ord_9999.json returns HTTP 200 with:\norder = null',
    impact: 'Clients may incorrectly treat a missing order as a successful response.',
    isMostSerious: false,
  },
];

export const MOST_SERIOUS_ANALYSIS = {
  findingTitle: 'Finding B – Monetary format mismatch',
  statement:
    'The monetary-format mismatch is the most serious because it directly affects financial calculations and reporting.',
};

export const ORDERS_DATA: OrderItem[] = [
  { id: 'ord_1001', amount: 54.7, formattedAmount: '$54.70', status: 'shipped', includedInRevenue: true, treatment: 'Included in revenue' },
  { id: 'ord_1002', amount: 23.81, formattedAmount: '$23.81', status: 'delivered', includedInRevenue: true, treatment: 'Included in revenue' },
  {
    id: 'ord_1003',
    amount: 102.33,
    formattedAmount: '$102.33',
    status: 'refunded',
    includedInRevenue: false,
    treatment: 'Excluded (refunded order)',
  },
  { id: 'ord_1004', amount: 68.1, formattedAmount: '$68.10', status: 'shipped', includedInRevenue: true, treatment: 'Included in revenue' },
  { id: 'ord_1005', amount: 25.47, formattedAmount: '$25.47', status: 'delivered', includedInRevenue: true, treatment: 'Included in revenue' },
  { id: 'ord_1006', amount: 53.62, formattedAmount: '$53.62', status: 'shipped', includedInRevenue: true, treatment: 'Included in revenue' },
];

export const REVENUE_CALCULATION = {
  formula: '$54.70 + $23.81 + $68.10 + $25.47 + $53.62 = $225.70',
  calculatedRevenueText: 'Calculated revenue under the stated assumption: $225.70',
  totalAmount: '$225.70',
  assumption:
    'Assumption: ord_1003 was excluded because it is marked refunded. The provided data does not define how refunded orders should be treated for revenue, so this assumption should be confirmed with Finance.',
};

export const TASK_3A_EMAIL = {
  subject: 'Re: Revenue reconciliation',
  salutation: 'Hi Priya,',
  bodyParagraphs: [
    'I found a few API data issues that could explain the reconciliation difference. Most importantly, one order (ord_1006) returns monetary values in decimal dollars even though the API documentation says all amounts are integers in the smallest currency unit. The API also marks ord_1003 as refunded, so I excluded it from this calculation.',
    'Based on the six orders provided, excluding the refunded order, I calculate revenue of $225.70 under this assumption.',
    'I would also flag the pagination and undocumented refunded-status issues because they could cause incomplete or incorrect reporting.',
  ],
  signoff: 'Best,',
  sender: 'Ankalaiah',
  rawText: `Subject: Re: Revenue reconciliation

Hi Priya,

I found a few API data issues that could explain the reconciliation difference. Most importantly, one order (ord_1006) returns monetary values in decimal dollars even though the API documentation says all amounts are integers in the smallest currency unit. The API also marks ord_1003 as refunded, so I excluded it from this calculation.

Based on the six orders provided, excluding the refunded order, I calculate revenue of $225.70 under this assumption.

I would also flag the pagination and undocumented refunded-status issues because they could cause incomplete or incorrect reporting.

Best,
Ankalaiah`,
};

export const TASK_3B_BUG_REPORT = {
  title: 'API returns monetary amounts in decimal dollars instead of documented smallest currency units',
  problem:
    'GET /v1/orders?starting_after=cur_8f2a19bd returns ord_1006 with:\nsubtotal = 44.0\ntax = 3.63\nshipping = 5.99\ntotal = 53.62',
  expected:
    'Monetary fields should consistently be integers representing the smallest currency unit according to the API documentation.\n\nFor example:\nIf the intended amount is $53.62, the documented representation would be 5362.',
  impact:
    'Clients may interpret the values incorrectly, resulting in inaccurate revenue calculations and financial reporting.',
  suggestedFix:
    'Return monetary fields consistently using integer smallest-unit values, or formally update the API contract and consumers if decimal currency values are intended.',
  rawText: `Title:
API returns monetary amounts in decimal dollars instead of documented smallest currency units

Problem:
GET /v1/orders?starting_after=cur_8f2a19bd returns ord_1006 with:
subtotal = 44.0
tax = 3.63
shipping = 5.99
total = 53.62

Expected:
Monetary fields should consistently be integers representing the smallest currency unit according to the API documentation.

For example:
If the intended amount is $53.62, the documented representation would be 5362.

Impact:
Clients may interpret the values incorrectly, resulting in inaccurate revenue calculations and financial reporting.

Suggested fix:
Return monetary fields consistently using integer smallest-unit values, or formally update the API contract and consumers if decimal currency values are intended.`,
};

export const ASSUMPTIONS_LIMITATIONS = {
  title: 'Assumption / Limitations',
  statement:
    'The provided data does not define how refunded orders should be treated for revenue, so this assumption should be confirmed with Finance.',
};
