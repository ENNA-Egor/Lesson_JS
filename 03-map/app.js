const developers = [
    {
        id: 1,
        fullName: 'Anton Petrov',
        skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'React'],
        salary: 1000,
    },
    {
        id: 2,
        fullName: 'Ivan Ivanov',
        skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'Vue'],
        salary: 950,
    },
    {
        id: 3,
        fullName: 'Albert Sidorov',
        skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'jQuery'],
        salary: 850,
    },
];

// const middleDevelopers = developers.map(salary=> salary + 150);

function AddNewCollection(obj) {
    const newObj = {
      ...obj,
    };
    newObj.salary += 500;
    newObj.skills = [...newObj.skills, 'TypeScript'];
    return newObj;
  }
  
  const middleDevelopers = developers.map(AddNewCollection);
  console.log(middleDevelopers);
  console.log(developers);