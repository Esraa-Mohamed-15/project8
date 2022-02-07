import React , {Component} from "react";

class Weather extends Component{
    render(){
        return(
           <div className="info">
               { //لو اصلا في داتا وقتها اعرض الجمله دي كلها وهكذا ف كله
                   this.props.tempreature && 
                   <p className="info-key"> Tempreature : {this.props.tempreature} </p>
               }
               { //لو اصلا في داتا وقتها اعرض الجمله دي كلها وهكذا ف كله
                   this.props.city && 
                   <p className="info-key"> City : {this.props.city} </p>
               }
               { //لو اصلا في داتا وقتها اعرض الجمله دي كلها وهكذا ف كله
                   this.props.country && 
                   <p className="info-key"> Country : {this.props.country} </p>
               }
               { //لو اصلا في داتا وقتها اعرض الجمله دي كلها وهكذا ف كله
                   this.props.humidity && 
                   <p className="info-key"> Humidity : {this.props.humidity} </p>
               }
               { //لو اصلا في داتا وقتها اعرض الجمله دي كلها وهكذا ف كله
                   this.props.description && 
                   <p className="info-key"> description : {this.props.description} </p>
               }
               { //لو اصلا في داتا وقتها اعرض الجمله دي كلها وهكذا ف كله
                   this.props.error && <p className="info-key"> {this.props.error} </p>
               }
           </div> 
        )
    }
}
export default Weather;