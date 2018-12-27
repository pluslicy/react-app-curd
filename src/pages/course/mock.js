import Mock from "mockjs";
Mock.mock('/courseList',{
  "courses|5": [
    {
      "id|1-100000":10000,
      "name|+1": [
        "软件工程",
        "Java高级程序设计",
        "Javascript高级程序设计",
        "CSS的艺术",
        "HTML从入门到精通",
      ],
      "desc|+1": [
        "软件工程是软件工程专业学生的必修课程。",
        "Java高级程序设计是软件工程专业学生的必修课程。",
        "CSS的艺术是软件工程专业学生的必修课程。",
        "HTML从入门到精通是软件工程专业学生的必修课程。",
      ]
    }
  ],
});

