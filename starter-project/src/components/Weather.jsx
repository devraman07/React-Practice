


const Weather = () => {
    let temp = 12;

    if(temp < 15) {
        return <h1>it's cold outside</h1>
    }  else if (temp < 20) {
        return <h1>it's moderate outside</h1>
    } else {
        return <h1>it's hot outside</h1>
    }
  
}

export default Weather