

const Greetings = () => {
  
    const name = "mithai";
    const date = new Date();

  return (
    <div>
        <p>greetings from {name}</p>
        <p>on date : {date.toLocaleString()}</p>
    </div>
  )
}

export default Greetings