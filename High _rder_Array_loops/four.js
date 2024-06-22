//
// ForEach using with Objects

const MyCoding = [
    {
        ProgrammingLanguage: "JavaScript",
        ProgrammingFrameWork: "Node.js"
    },
    {
        ProgrammingLanguage: "Java",
        ProgrammingFrameWork: "SpringBoot"
    },
    {
        ProgrammingLanguage: "Python",
        ProgrammingFrameWork: "Django"
    }
];

MyCoding.forEach((Language)=>{
  console.log(Language.ProgrammingLanguage);
  console.log(Language.ProgrammingFrameWork);
})