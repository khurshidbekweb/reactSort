
import './App.css';
import { useState } from 'react';
import Title from './components/Titli';
import { Fragment } from 'react';
import Modal from './components/Modal';
import NEwForm from './components/NEwForm';
function App() {

const [event, setEvent] = useState([]);

const [showContent, setShowContent ] = useState(true);
const [showModal, setShowModal] = useState(false);

const deletFun =(id)=>{
    setEvent((prv)=>{
      return prv.filter((event)=>{
        return event.id !== id;
      })
    })
}
const newEvent = (event)=>{
    setEvent((prav)=>{
      return [...prav, event]
    })
    setShowModal(false);
}

  return (
    <div className="App"> 
    <Title title = "Hello world and people" subtitle = "There are books on the table"/>     
      {showContent && <button onClick={()=>{setShowContent(false)}} >Hide content</button>}
      {!showContent && <button onClick={()=>{setShowContent(true)}} >Show content</button>}
      {showContent && <> 
        {event.length ===0 && <h3>NO content :( </h3>}
      {  
        event.map((itm)=>{
          return (
            <div className='borer' key= {itm.id}>
              <h2>{itm.title}</h2>
              <p className="date">{itm.date}</p>
              <p className="locations">{itm.locations}</p>
              <button className='btnDelet' onClick={()=>deletFun(itm.id)}>Delet</button>
            </div>            
          )
        })
      }</>}
      {showModal && <Modal>
            <NEwForm newEvent = {newEvent}/>
      </Modal>}
      <br/><br />
      <button onClick={()=>setShowModal(true)}>Show Modal</button>
    </div>  
      
  );
}

export default App;
