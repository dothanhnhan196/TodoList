var randomID = require("random-id");

// 1: high, 2:medium, 3: low
const TaskData = [
  {
    id: randomID(5),
    name: "Soạn ReactJS",
    labelArr: ["Frontend", "API", "Issue"],
    priority: 1,
    memberIDArr: ["user_1", "user_3"],
    status: 1,
    description: "Phải soạn ReactJS và Redux",
  },
  {
    id: randomID(5),
    name: "Soạn NodeJS",
    labelArr: ["Backend", "Issue"],
    priority: 2,
    memberIDArr: ["user_2", "user_4"],
    status: 2,
    description: "Phải NodeJS",
  },
  {
    id: randomID(5),
    name: "Soạn Python",
    labelArr: ["Frontend", "Backend"],
    priority: 3,
    memberIDArr: ["user_3", "user_5"],
    status: 3,
    description: "Phải soạn Python",
  },
  {
    id: randomID(5),
    name: "Soạn Angular",
    labelArr: ["Frontend", "API"],
    priority: 1,
    memberIDArr: ["user_1", "user_3", "user_4"],
    status: 4,
    description: "Phải soạn Angular và Redux",
  },
];

export default TaskData;
