

const UserList = () => {

const users = [
  {
    id: 1,
    name: "Raman Kumar",
    email: "raman.kumar@example.com",
    age: 28,
    city: "Kolkata"
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    age: 34,
    city: "Mumbai"
  },
  {
    id: 3,
    name: "Arjun Mehta",
    email: "arjun.mehta@example.com",
    age: 25,
    city: "Delhi"
  },
  {
    id: 4,
    name: "Sneha Iyer",
    email: "sneha.iyer@example.com",
    age: 30,
    city: "Bangalore"
  },
  {
    id: 5,
    name: "Vikram Singh",
    email: "vikram.singh@example.com",
    age: 41,
    city: "Chennai"
  }
];

  return (
    <div>
        {
            users.map(({id , name, email, age, city}) => (
                <ul key={id}>
                     <li>{name}</li>
                     <li>{email}</li>
                     <li>{age}</li>
                     <li>{city}</li>
                </ul>
            ))
        }

    </div>
  )
}

export default UserList