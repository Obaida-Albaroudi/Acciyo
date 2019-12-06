import React, {useState} from 'react';
import { Button } from 'semantic-ui-react';
import Cards from "./Cards";
import axios from "axios";


function App() {
  let Background = "https://www.acciyo.com/hubfs/Homepage/acciyo-unsplash-read-newspapers-old.jpeg"
  let [information, setInformation]=useState('')
  const [news, setNews] = useState([])

  let handleChanges = e => {
    console.log("eee",e.target)
    setInformation(e.target.value);
  };
  let grabData = () =>{
    let date=new Date().toISOString().split('T')[0]
    console.log("date",date)
    axios
    .get(
      `https://newsapi.org/v2/everything?q=${information}&from=2019-11-20&to=${date}&sortBy=popularity&apiKey=1920af8f441a4860a75e8b9e8891d015`
    )
    .then(res => {
      console.log("res data", res.data)       
        setNews(res.data.articles);
    })
    .catch(err => console.log(err));
  }
  
  
  return (
    <div>
    <div style={{display: "flex", flexDirection:"row", alignItems:"center"}}>
    <img style={{padding: "1%", width:"15%", height:"15%", marginTop: -10}}src="https://www.acciyo.com/hs-fs/hubfs/acc_green.png?width=300&name=acc_green.png"/>
    <p style={{marginLeft: "10%",color:"#33ddac", fontWeight:"bold"}}>Search for news on a specific word or phrase for the past month!</p>
    </div>
    
      <div style={{display: "flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
      <input style={{width:"30%", justifyContent:"center", marginRight:"2%"}}placeholder="What News Are You Looking For?"  onInput={handleChanges} value={information} name="information" />
      <Button style={{backgroundColor: "#33ddac",
                    border: "1.5px solid #33ddac",
                    color: "#fff", padding:"1%", borderRadius:"9%", fontSize: 15, fontWeight: "bold"}} onClick={grabData}>NEWS</Button>
      </div>
      <div style={{marginTop: "3%", backgroundImage: `url(${Background})`,backgroundPosition: 'center center', background:"linear-gradient(to right,rgba(10,190,172,.9),rgba(226,195,154,.9))"}}>
      <div style={{display: "flex", flexDirection:"row", flexWrap: "wrap", justifyContent:"center", paddingTop:"2%"}}>
        <Cards card={news}/>
      </div>
    </div>
    </div>
  );
}

export default App;
