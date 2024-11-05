import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import one from './assets/images/profile-1.jpg';
import two from './assets/images/profile-2.jpg';
import three from './assets/images/profile-3.jpg';
import four from './assets/images/profile-4.jpg';
import Search from './search';
const root = ReactDOM.createRoot(document.getElementById('root'));
function Profile(props){
  return(
    
    <div class="profile" style={{display:"flex",padding:"10px",margin:"10px",marginLeft:"50px", justifyContent:'space-between',backgroundColor:"rgb(195, 191, 191)",borderRadius:"20px",color:"white", width:"90%"}}>
      <div class="box-1" style={{display:"flex", alignItems:"center"}}>
      <img src={props.image} style={{height:"80px", width:"80px",borderRadius:"50%"}}></img>
      <div class="box" style={{marginLeft:"30px"}}>
        <h1 style={{color:"black"}}>{props.name}</h1>
        <p>{props.message}</p>
        </div>
        </div>
        <div class="box-2" style={{marginRight:"30px"}}>
          <p style={{color:"black"}}>{props.time}</p>
          <i class="fa-solid fa-star" style={{color: "#1fa01c",marginTop:"25px"}}></i>
          </div>
        </div>
  )
}
var items=[
  {
    id:1,
    name:"broskie",
    message:"hmm",
    time:"23:59",
    image:one
  },
  {
    id:2,
    name:"tom de cruze",
    message:"Cthis message is from John Doe",
    time:"12:39",
    image:two
  },
  {
    id:3,
    name:"john doe",
    message:"hope youre fine",
    time:"13:33",
    image:three
  },
  {
    id:4,
    name:"natasha",
    message:"lets have a party tonight",
    time:"23:59",
    image:four
  }
]
 

root.render(
    <div>
      <Search/>
      {items.map((item)=>{
        return <Profile key={item.id} name={item.name} message={item.message} time={item.time} image={item.image}/>
      }
      )}
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
