import React , {Component} from "react";

const Form =(props) =>{
    return(
        //هعمل ال action علي الفورم افضل من ال button?
        //عشان مجرد مااضغط enter يعمل ال action علي طول
       <form onSubmit={props.getWeather}> 
        <input type="text" placeholder="City" name="city"></input> 
        <input  type="text"placeholder="Country" name="country"></input>
        <button>Get Weather</button>
       </form> 
    )
}
export default Form;
// كنت اقدر اعمل الفانكشن هنا واخليه كلاس .. طب ليه عملتها ف الاب ؟
// لاني هحتاجها ف ال api ف بالتالي لازم تبقي ف الاب واربط بيها ال weather.js