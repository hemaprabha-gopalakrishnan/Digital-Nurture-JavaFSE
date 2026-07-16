import "./App.css";

function App() {

  const officeSpaces = [
    {
      id: 1,
      name: "Sky Tower Office",
      rent: 45000,
      address: "Chennai",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600"
    },
    {
      id: 2,
      name: "Tech Park",
      rent: 70000,
      address: "Bangalore",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600"
    },
    {
      id: 3,
      name: "Business Hub",
      rent: 55000,
      address: "Hyderabad",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600"
    }
  ];

  return (
    <div className="App">
      <h1>Office Space Rental Application</h1>

      <div className="card-container">
        {officeSpaces.map((office) => (
          <div key={office.id} className="card">
            <img src={office.image} alt={office.name} />

            <h2>{office.name}</h2>

            <h3
              style={{
                color: office.rent < 60000 ? "red" : "green"
              }}
            >
              Rent: ₹{office.rent}
            </h3>

            <h3>Address: {office.address}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;