import React from "react";
import "./form.style.css";
import { useHistory } from "react-router-dom";


const Form = props => {
  const history = useHistory();

  const Api_Key = "ff9f895b2e884d6680530135202710";

  return (
    <form onSubmit={handleSubmit}>
      <div className="container12">
        <div className="center12">


          <div>
            <h3 className="label">Your API Key </h3>
            <input
              type="text"
              className="input"
              placeholder="api"
              name="apiKey"
              autoComplete="off"
              defaultValue={Api_Key}
            />
          </div>


          <div className="cityDiv">
            <h1 className="label">City Name</h1>
            <select name="dropdown" className='drop'>
              <option value="Kuala Lumpur">Kuala Lumpur</option>
              <option value="Singapore">Singapore</option>
            </select>
          </div>


          <div className="submit">
            <button className="btnSubmit">Submit</button>
          </div>


        </div>
      </div>
    </form>
  );

  async function handleSubmit(e) {

    e.preventDefault();

    console.log("submitted");

    const Api_Key = e.target.elements.apiKey.value;

    const city = e.target.elements.dropdown.value;

    if (city) {
      const api_call = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${Api_Key}&q=${city}`
      );


      const response = await api_call.json();
      console.log('response', response);

      history.push({
        pathname: '/weatherPage',
        state: {  
          city: `${response.location.name}`,
          main: response.current.condition.icon,
          celsius: response.current.feelslike_c,
          farent: response.current.feelslike_f,
          description: response.current.condition.text,
          error: false
        },
      });

      console.log(response);
    } else {
      this.setState({
        error: true
      });
    }


  }



};

export default Form;
