import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import RateLimitedUI from "../components/RateLimitedUI";
import axios from "axios";

const Homepage = () => {
  const [rateLimited, setRateLimited] = useState(true);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes");
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching the notes.", error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {rateLimited && <RateLimitedUI />}
    </div>
  );
};

export default Homepage;
