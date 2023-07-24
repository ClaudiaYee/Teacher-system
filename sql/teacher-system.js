/*
 Navicat Premium Data Transfer

 Source Server         : mongodb_local
 Source Server Type    : MongoDB
 Source Server Version : 60006 (6.0.6)
 Source Host           : localhost:27017
 Source Schema         : teacher-system

 Target Server Type    : MongoDB
 Target Server Version : 60006 (6.0.6)
 File Encoding         : 65001

 Date: 23/07/2023 13:29:27
*/


// ----------------------------
// Collection structure for colleges
// ----------------------------
db.getCollection("colleges").drop();
db.createCollection("colleges");

// ----------------------------
// Documents of colleges
// ----------------------------
db.getCollection("colleges").insert([ {
    _id: ObjectId("64afb4198be38e1c226e1181"),
    id: "1",
    name: "Faculty of Business, Economics and Law",
    __v: NumberInt("0")
} ]);
db.getCollection("colleges").insert([ {
    _id: ObjectId("64afb4198be38e1c226e118c"),
    id: "2",
    name: "Faculty of Culture and Society",
    __v: NumberInt("0")
} ]);
db.getCollection("colleges").insert([ {
    _id: ObjectId("64afb4198be38e1c226e1196"),
    id: "3",
    name: "Faculty of Design and Creative Technologies",
    __v: NumberInt("0")
} ]);
db.getCollection("colleges").insert([ {
    _id: ObjectId("64afb4198be38e1c226e11a0"),
    id: "4",
    name: "Faculty of Health and Environmental Sciences",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for departments
// ----------------------------
db.getCollection("departments").drop();
db.createCollection("departments");

// ----------------------------
// Documents of departments
// ----------------------------
db.getCollection("departments").insert([ {
    _id: ObjectId("64afb4988be38e1c226e1335"),
    college: "1",
    id: "1_1",
    name: "Business School - Te Kura Kaipakihi",
    __v: NumberInt("0")
} ]);
db.getCollection("departments").insert([ {
    _id: ObjectId("64afb4988be38e1c226e1338"),
    college: "1",
    id: "1_2",
    name: "Law School - Te Kura Ture",
    __v: NumberInt("0")
} ]);
db.getCollection("departments").insert([ {
    _id: ObjectId("64afb4988be38e1c226e133a"),
    college: "1",
    id: "1_3",
    name: "School of Economics - Matauranga Ōhanga",
    __v: NumberInt("0")
} ]);
db.getCollection("departments").insert([ {
    _id: ObjectId("64afb4988be38e1c226e133d"),
    college: "2",
    id: "2_1",
    name: "School of Education - Te Kura Mātauranga",
    __v: NumberInt("0")
} ]);
db.getCollection("departments").insert([ {
    _id: ObjectId("64afb4988be38e1c226e133f"),
    college: "2",
    id: "2_2",
    name: "School of Hospitality and Tourism - Te Kura Taurimatanga me te Mahi Tāpoi",
    __v: NumberInt("0")
} ]);
db.getCollection("departments").insert([ {
    _id: ObjectId("64afb4988be38e1c226e1341"),
    college: "2",
    id: "2_3",
    name: "School of Social Sciences and Public Policy - Te Kura Pūtaiao ā-iwi me ngā Kaupapa Tūmatanui",
    __v: NumberInt("0")
} ]);
db.getCollection("departments").insert([ {
    _id: ObjectId("64afb4988be38e1c226e1343"),
    college: "2",
    id: "2_4",
    name: "School of Language and Culture - Te Kura Reo me te Ahurea",
    __v: NumberInt("0")
} ]);
db.getCollection("departments").insert([ {
    _id: ObjectId("64afb4988be38e1c226e1346"),
    college: "3",
    id: "3_1",
    name: "School of Art and Design - Te Kura Toi a Hoahoa",
    __v: NumberInt("0")
} ]);
db.getCollection("departments").insert([ {
    _id: ObjectId("64afb4988be38e1c226e1348"),
    college: "3",
    id: "3_2",
    name: "School of Communication Studies - Te Kura Whakapāho",
    __v: NumberInt("0")
} ]);
db.getCollection("departments").insert([ {
    _id: ObjectId("64afb4988be38e1c226e134a"),
    college: "3",
    id: "3_3",
    name: "School of Engineering, Computer and Mathematical Sciences - Te Kura Mātai Pūhanga, Rorohiko, Pāngarau",
    __v: NumberInt("0")
} ]);
db.getCollection("departments").insert([ {
    _id: ObjectId("64afb4988be38e1c226e134c"),
    college: "3",
    id: "3_4",
    name: "School of Future Environments - Huri te Ao",
    __v: NumberInt("0")
} ]);
db.getCollection("departments").insert([ {
    _id: ObjectId("64afb4988be38e1c226e134f"),
    college: "4",
    id: "4_1",
    name: "School of Clinical Sciences - Te Kura Mātai Haumanu",
    __v: NumberInt("0")
} ]);
db.getCollection("departments").insert([ {
    _id: ObjectId("64afb4988be38e1c226e1351"),
    college: "4",
    id: "4_2",
    name: "School of Public Health and Interdisciplinary Studies",
    __v: NumberInt("0")
} ]);
db.getCollection("departments").insert([ {
    _id: ObjectId("64afb4988be38e1c226e1353"),
    college: "4",
    id: "4_3",
    name: "School of Science - Te Kura Pūtaiao",
    __v: NumberInt("0")
} ]);
db.getCollection("departments").insert([ {
    _id: ObjectId("64afb4988be38e1c226e1355"),
    college: "4",
    id: "4_4",
    name: "School of Sport and Recreation - Te Kura Hākinakina",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for paper
// ----------------------------
db.getCollection("paper").drop();
db.createCollection("paper");

// ----------------------------
// Documents of paper
// ----------------------------

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("64a6ea6ed61934d54b1ae463"),
    id: "e7f6ec48-f32f-4825-800e-334bcfef0dc5",
    name: "1",
    password: "$2a$10$ijxBNYWmTg4hKzyzs4wC4e8y/izUACju2KucPoRlCiN/GJjt4IlsC",
    date: ISODate("2023-07-06T16:23:10.356Z"),
    __v: NumberInt("0"),
    template: 1,
    department: "3_4",
    avatar: "http://localhost:3001/upload/6159e12ae71dd0a7ca8434c00.jpeg"
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("64a6ee31e547a2bf833d79c0"),
    id: "823612df-7d4b-4045-b520-7b73b829c836",
    name: "1111",
    email: "22222@qq.com",
    password: "$2a$10$wbBUAYaNjs9RQ994JLHpaeAzzzuxSRM850B2b0acWHrgekxmZd87u",
    date: ISODate("2023-07-06T16:39:13.969Z"),
    __v: NumberInt("0"),
    avatar: "http://localhost:3001/upload/6159e12ae71dd0a7ca8434c00.jpeg",
    bio: "4",
    contact: "3",
    contactInformation: "4",
    contribution: "4",
    department: "3_4",
    faculty: "faculty3",
    firstName: "1",
    information: "3",
    lastName: "1",
    office: "2",
    phone: "3",
    position: "3",
    publications: "[{\"name\":\"1. 名称：1. 名称：1111，地址：1111，地址：http://localhost:3001/upload/7985d99ef962195fd2ddc240a.jpeg\",\"src\":\"http://localhost:3001/upload/7985d99ef962195fd2ddc240a.jpeg\"},{\"name\":\"2. 名称：WechatIMG26.jpeg，地址：http://localhost:3001/upload/6159e12ae71dd0a7ca8434c01.jpeg\",\"src\":\"http://localhost:3001/upload/6159e12ae71dd0a7ca8434c01.jpeg\"},{\"name\":\"3. 名称：WechatIMG7359.jpeg，地址：http://localhost:3001/upload/6159e12ae71dd0a7ca8434c02.jpeg\",\"src\":\"http://localhost:3001/upload/6159e12ae71dd0a7ca8434c02.jpeg\"},{\"name\":\"4. 名称：IVLEjMMmxYILm6H7xm2af3I-8FcTBqHvcaSPXFcIFo0PstEiVMK7-CdbY8d3UELcfgLdDOSfJbenGoRvIxDJDg.pdf，地址：http://localhost:3001/upload/6159e12ae71dd0a7ca8434c03.pdf\",\"src\":\"http://localhost:3001/upload/6159e12ae71dd0a7ca8434c03.pdf\"}]",
    researchAreas: "44333",
    teaching: "4",
    title: "1111",
    template: 1
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("64af8e8f49a0934a60b7a627"),
    id: "02bd6827-90ee-4de8-8049-a2ac2a2992be",
    name: "111111",
    email: "111111",
    password: "$2a$10$Hozz9hyzt4cPLzMgKn7iLuOlWDNeZLr6433TqBAcOggiUrEadmpee",
    date: ISODate("2023-07-13T05:41:35.697Z"),
    __v: NumberInt("0"),
    template: 1,
    department: "3_4"
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("64af934b49a0934a60b7a62e"),
    id: "ecaf4c02-8b8e-4ec3-b505-094a4e10839c",
    name: "222222",
    email: "emil",
    password: "$2a$10$j3eW.hiT4UetUkShltPqmeEKcjj4xFPdEZ6miW/IPd/JVT0JYTmLa",
    date: ISODate("2023-07-13T06:01:47.428Z"),
    __v: NumberInt("0"),
    template: NumberInt("2"),
    department: "3_4",
    avatar: "http://localhost:3001/upload/298159097bc64a3f0a7822201.jpeg",
    bio: "234234",
    contact: "11113",
    contactInformation: "23423423423423",
    contribution: "234234",
    faculty: "faculty2",
    firstName: "1112",
    information: "info",
    lastName: "last",
    office: "sss",
    phone: "122333434",
    position: "sdfsdf",
    publications: "[{\"name\":\"1. 名称：麻.jpeg，地址：http://localhost:3001/upload/298159097bc64a3f0a7822202.jpeg\",\"src\":\"http://localhost:3001/upload/298159097bc64a3f0a7822202.jpeg\"},{\"name\":\"2. 名称：紫色.jpeg，地址：http://localhost:3001/upload/298159097bc64a3f0a7822203.jpeg\",\"src\":\"http://localhost:3001/upload/298159097bc64a3f0a7822203.jpeg\"}]",
    researchAreas: "234234",
    teaching: "2342",
    title: "呜呜呜"
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("64af936749a0934a60b7a631"),
    id: "c2a5efc3-a41b-472d-bedd-a91ed4a75e92",
    name: "12",
    email: "12",
    password: "$2a$10$SzNuAdAYK.SMVN1lJCeBOOhOOvY8Vl4sJEzyfjgHkWoLrtKphbRGq",
    date: ISODate("2023-07-13T06:02:15.349Z"),
    __v: NumberInt("0"),
    template: 2,
    department: "3_4"
} ]);
