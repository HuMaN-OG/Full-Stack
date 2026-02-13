import "./Person.css";

// Base class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}.`;
  }
}

// Student class (inherits Person)
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  greet() {
    return `Hello, my name is ${this.name} and I'm studying ${this.major}.`;
  }
}

// Teacher class (inherits Person)
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  greet() {
    return `Hello, my name is ${this.name} and I teach ${this.subject}.`;
  }
}

function App() {
  const people = [
    new Person("Alex Johnson", 30),
    new Student("Emma Watson", 20, "Computer Science"),
    new Teacher("Dr. James Wilson", 45, "Mathematics")
  ];

  return (
    <div className="container">
      <h1>Person Class Hierarchy</h1>

      {people.map((person, index) => (
        <div className="card" key={index}>
          <h2>
            {person.name} (
            {person instanceof Student
              ? "Student"
              : person instanceof Teacher
              ? "Teacher"
              : "Person"}
            )
          </h2>

          <p><strong>Age:</strong> {person.age}</p>
          <p className="italic">{person.greet()}</p>

          {person instanceof Student && (
            <p><strong>Major:</strong> {person.major}</p>
          )}

          {person instanceof Teacher && (
            <p><strong>Teaching:</strong> {person.subject}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
