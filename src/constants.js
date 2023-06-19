let score = 0;
let lastKey = "";
let SIZE = 30;

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

// Grid map
const map = [
  [
    "1",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "^",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "2",
  ],
  [
    "|",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    "|",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    "|",
  ],
  [
    "|",
    "p",
    "[",
    "]",
    ".",
    "[",
    "_",
    "]",
    ".",
    "u",
    ".",
    "[",
    "_",
    "]",
    ".",
    "[",
    "]",
    "p",
    "|",
  ],
  [
    "|",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    "|",
  ],
  [
    "|",
    ".",
    "[",
    "]",
    ".",
    "n",
    ".",
    "[",
    "_",
    "^",
    "_",
    "]",
    ".",
    "n",
    ".",
    "[",
    "]",
    ".",
    "|",
  ],
  [
    "|",
    ".",
    ".",
    ".",
    ".",
    "|",
    ".",
    ".",
    ".",
    "|",
    ".",
    ".",
    ".",
    "|",
    ".",
    ".",
    ".",
    ".",
    "|",
  ],
  [
    "8",
    "_",
    "_",
    "6",
    ".",
    "<",
    "_",
    "]",
    ".",
    "u",
    ".",
    "[",
    "_",
    ">",
    ".",
    "5",
    "_",
    "_",
    "7",
  ],
  [
    " ",
    " ",
    " ",
    "|",
    ".",
    "|",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    "|",
    ".",
    "|",
    " ",
    " ",
    " ",
  ],
  [
    "[",
    "_",
    "_",
    "7",
    ".",
    "u",
    ".",
    "5",
    "]",
    "d",
    "[",
    "6",
    ".",
    "u",
    ".",
    "8",
    "_",
    "_",
    "]",
  ],
  [
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    "|",
    " ",
    " ",
    " ",
    "|",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
  ],
  [
    "[",
    "_",
    "_",
    "6",
    ".",
    "n",
    ".",
    "8",
    "_",
    "_",
    "_",
    "7",
    ".",
    "n",
    ".",
    "5",
    "_",
    "_",
    "]",
  ],
  [
    " ",
    " ",
    " ",
    "|",
    ".",
    "|",
    ".",
    ".",
    ".",
    " ",
    ".",
    ".",
    ".",
    "|",
    ".",
    "|",
    " ",
    " ",
    " ",
  ],
  [
    "5",
    "_",
    "_",
    "7",
    ".",
    "u",
    ".",
    "[",
    "_",
    "^",
    "_",
    "]",
    ".",
    "u",
    ".",
    "8",
    "_",
    "_",
    "6",
  ],
  [
    "|",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    "|",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    "|",
  ],
  [
    "|",
    ".",
    "[",
    "6",
    ".",
    "[",
    "_",
    "]",
    ".",
    "u",
    ".",
    "[",
    "_",
    "]",
    ".",
    "5",
    "]",
    ".",
    "|",
  ],
  [
    "|",
    ".",
    ".",
    "|",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    "|",
    ".",
    ".",
    "|",
  ],
  [
    "<",
    "]",
    ".",
    "u",
    ".",
    "n",
    ".",
    "[",
    "_",
    "^",
    "_",
    "]",
    ".",
    "n",
    ".",
    "u",
    ".",
    "[",
    ">",
  ],
  [
    "|",
    ".",
    ".",
    ".",
    ".",
    "|",
    ".",
    ".",
    ".",
    "|",
    ".",
    ".",
    ".",
    "|",
    ".",
    ".",
    ".",
    ".",
    "|",
  ],
  [
    "|",
    "p",
    "[",
    "_",
    "_",
    "v",
    "_",
    "]",
    ".",
    "u",
    ".",
    "[",
    "_",
    "v",
    "_",
    "_",
    "]",
    "p",
    "|",
  ],
  [
    "|",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    "|",
  ],
  [
    "4",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "3",
  ],
];
