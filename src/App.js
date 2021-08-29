import React, { useState, useEffect } from 'react';
import './App.css';
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const resData = await response.json();
      setLoading(false);
      setTours(resData);
    } catch(err) {
      console.log(err);
      setLoading(false);
    }
  };

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours); 
  }

  // Conditional rendering
  const showTours = loading ? (
    // Showing loading before initial rendering
      <h1>Loading...</h1>
    ) : !tours.length ? (
      // Show refresh button if no post
      <div className="text-center">
        <button className="btn btn-primary" onClick={() => fetchTours()}>Refresh</button>
      </div>
    ) : (
      //Render tours post
      <div>
        <h1>Tours Post</h1>
        <Tours tours={tours} removeTour={removeTour} />
      </div>
    );

  return (
    <main className="tours-container">
      {showTours}
    </main>
  );
}

export default App;
