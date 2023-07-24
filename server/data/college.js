// （It is executed once during initialisation, then it is stored in the database and deleted and regenerated when it is modified）初始化的时候执行一次，然后会存入数据库，修改的时候就删除重新生成
const college = [
  {
    name: 'Faculty of Business, Economics and Law',
    department: [
      {
        name: 'Business School - Te Kura Kaipakihi',
      },
      {
        name: 'Law School - Te Kura Ture',
      },
      {
        name: 'School of Economics - Matauranga Ōhanga',
      },
    ],
  },
  {
    name: 'Faculty of Culture and Society',
    department: [
      {
        name: 'School of Education - Te Kura Mātauranga',
      },
      {
        name: 'School of Hospitality and Tourism - Te Kura Taurimatanga me te Mahi Tāpoi',
      },
      {
        name: 'School of Social Sciences and Public Policy - Te Kura Pūtaiao ā-iwi me ngā Kaupapa Tūmatanui',
      },
      {
        name: 'School of Language and Culture - Te Kura Reo me te Ahurea',
      },
    ],
  },
  {
    name: 'Faculty of Design and Creative Technologies',
    department: [
      {
        name: 'School of Art and Design - Te Kura Toi a Hoahoa',
      },
      {
        name: 'School of Communication Studies - Te Kura Whakapāho',
      },
      {
        name: 'School of Engineering, Computer and Mathematical Sciences - Te Kura Mātai Pūhanga, Rorohiko, Pāngarau',
      },
      {
        name: 'School of Future Environments - Huri te Ao',
      },
    ],
  },
  {
    name: 'Faculty of Health and Environmental Sciences',

    department: [
      {
        name: 'School of Clinical Sciences - Te Kura Mātai Haumanu',
      },
      {
        name: 'School of Public Health and Interdisciplinary Studies',
      },
      {
        name: 'School of Science - Te Kura Pūtaiao',
      },
      {
        name: 'School of Sport and Recreation - Te Kura Hākinakina',
      },
    ],
  },
];

module.exports = college;
