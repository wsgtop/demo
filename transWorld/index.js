import officegen from "officegen";
import fs from "fs";

// 使用officegen生成world文件
const docx = officegen("docx");
let table3 = [
  [
    {
      val: "样品名称",
      opts: {
        b: true,
        sz: "20",
        align: "left",
      },
    },
    {
      val: "电源适配器",
      opts: {
        b: true,
        sz: 20,
        align: "center",
      },
    },
    {
      val: "样品数量",
      opts: {
        b: true,
        sz: 20,
        align: "center",
      },
    },
    {
      val: "         ",
      opts: {
        b: true,
        sz: 20,
      },
    },
    {
      val: "报告编号",
      opts: {
        b: true,
        sz: 20,
        align: "left",
      },
    },
    {
      val: "A-123456-ABC123456-201704392-D",
      opts: {
        b: true,
        sz: 20,
        align: "center",
      },
    },
  ],

  [
    {
      val: "型号规格",
      opts: {
        b: true,
        sz: 20,
        align: "center",
      },
    },
    {
      val: "",
      opts: {
        b: true,
        sz: 20,
        align: "center",
      },
    },
    {
      val: "要求完成日期",
      opts: {
        b: true,
        sz: 20,
        align: "center",
      },
    },
    {
      val: "2017.5.19",
      opts: {
        b: true,
        sz: 20,
      },
    },
    {
      val: "委托单位",
      opts: {
        b: true,
        sz: 20,
        align: "center",
      },
    },
    {
      val: "电子股份有限公司",
      opts: {
        b: true,
        sz: 20,
        align: "center",
      },
    },
  ],
];

let tableStyle3 = {
  tableColWidth: 5000,
  tableSize: 20,
  borders: true,
};
docx.createTable(table3, tableStyle3);
let out = fs.createWriteStream("out.docx"); // 文件写入
out.on("error", function (err) {
  console.log(err);
});
docx.generate(out); // 服务端生成word
