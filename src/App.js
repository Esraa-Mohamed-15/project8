import React ,{ Component} from 'react';
import Form from './component/Form';
import Weather from './component/Weather';
import './App.css';
import { wait } from '@testing-library/user-event/dist/utils';
const API = "1b6cba16c3586f62623cfc99c6245c49";
//api key imp for weather api 
//http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=1b6cba16c3586f62623cfc99c6245c49 (api data that you will get)

class App extends Component {
  //الاول الداتا تكون فاضيه
state = {
tempreature :"",
city : "",
country : "",
humidity : "",
description : "",
error: " "
}
  getWeather = async (e) =>{
    e.preventDefault();  //مهمه وقت الفورم عشان ريفريش الصفحه
    const city = e.target.elements.city.value;
    const country= e.target.elements.country.value;
    const api = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API}`
    );
    //هنا همحط ال api بتاعنا
    const data = await api.json() ;
    console.log(data);
    // بعد كدا مع الداله يبدا يملي الداتا
    if(city&&country){
      this.setState({
        tempreature :data.main.temp,
        city : data.name,
        country : data.sys.country,
        humidity : data.main.humidity,
        description : data.weather[0].description,
        error: " "
      })
    }else{
      this.setState ({
        tempreature :"",
        city : "",
        country : "",
        humidity : "",
        description : "",
        error : " enter data "
      })
    }
  }


  render(){
  return (
    <div className="App">
      <div className="container">
      <Form getWeather = {this.getWeather}/>
      <Weather //as props
      tempreature ={this.state.tempreature}
      city = {this.state.city}
      country = {this.state.country}
      humidity = {this.state.humidity}
      description = {this.state.description}
      error = {this.state.error}
      />
      </div>
    </div>
  );
}
}

export default App;
