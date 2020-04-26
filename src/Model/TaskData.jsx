var randomID = require("random-id");

// 1: high, 2:medium, 3: low
const TaskData = [
  {
    id: randomID(5),
    name: "Soạn ReactJS",
    labelArr: ["Frontend", "Backend"],
    priority: 1,
    memberIDArr: ["user_1", "user_3"],
    status: 1,
    description: "Phải soạn ReactJS",
  },
  {
    id: randomID(5),
    name: "Soạn NodeJS",
    labelArr: ["Backend"],
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
    name: "Soạn ReactJS",
    labelArr: ["Frontend"],
    priority: 1,
    memberIDArr: ["user_1", "user_3", "user_4"],
    status: 2,
    description: "Phải soạn ReactJS và Redux",
  },
];

export default TaskData;
