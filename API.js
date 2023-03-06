async function getPeople() {
  const response = await fetch('https://randomuser.me/api/?results=10');

  return response.json();
}

// Somente mulheres

getPeople().then(data => {
  const people = data.results;

  console.log(people.filter(person => person.gender === "female"));
});

// Trabalhando com dados

getPeople().then(data => {
  const result = data.results.filter(person => person.dob.age >= 30);
  const people = [];

  for (let p of result) {
    people.push({
      "Nome": `${person.name.first} ${person.name.last}`,
      "Sexo": `${person.gender}`,
      "Idade": `${person.dob.age}`,
    });
  }

  console.table(people);
});