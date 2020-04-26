export default class Task {
  constructor(id, name, labelArr, status, description, priority, memberIDArr) {
    this.id = id;
    this.name = name;
    this.labelArr = labelArr;
    this.status = status;
    this.description = description;
    this.priority = priority;
    this.memberIDArr = memberIDArr;
  }
}
