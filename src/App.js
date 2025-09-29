import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/journal">Journal</Link> | 
        <Link to="/mood">Mood Tracker</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/mood" element={<MoodTracker />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>Welcome to Mental Health Companion 🌱</h1>;
}

function Journal() {
  return (
    <div>
      <h2>Daily Journal</h2>
      <textarea placeholder="Write your thoughts..." rows={6} cols={40}></textarea>
    </div>
  );
}

import { useState } from 'react';

function MoodTracker() {
  const [mood, setMood] = useState('');

  return (
    <div>
      <h2>Mood Tracker</h2>
      <button onClick={() => setMood("Happy")}>😀 Happy</button>
      <button onClick={() => setMood("Neutral")}>😐 Neutral</button>
      <button onClick={() => setMood("Sad")}>😞 Sad</button>

      {mood && <p>Today's mood: {mood}</p>}
    </div>
  );
}
useEffect(() => {
  if (mood) {
    localStorage.setItem("mood", mood);
  }
}, [mood]);

export default App;
