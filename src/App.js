import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';

const API_KEY="2e49967002d17439cc46afb84e58106a";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        temperature: undefined,
        city: undefined,
        country : undefined,
        humidity : undefined,
        description : undefined,
        error : undefined,
      }
  }

  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
    const data = await api_call.json();
    if (city && country){
      console.log(data);
      this.setState({
        temperature : data.main.temp-273,
        city :  data.name,
        country : data.sys.country,
        humidity : data.main.humidity,
        description : data.weather[0].description,
        error : "",
      });
    }else{
      this.setState({
        temperature : undefined,
        city :  undefined,
        country : undefined,
        humidity : undefined,
        description : undefined,
        error : 'Plese enter the City and Country',
      })
    }
  
  }


  render() {
    return( 
      <div>
         <Titles />
         <Form getWeather={this.getWeather}/>
         <Weather 
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            description={this.state.description}
            humidity={this.state.humidity}
            error={this.state.error}
         />
      </div>
      );
    }
}

export default App;