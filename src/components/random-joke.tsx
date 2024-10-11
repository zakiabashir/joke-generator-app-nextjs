"use client"; // Enables client-side rendering for this component

// Import necessary hooks from React
import { useState, useEffect } from "react";
import Image from "next/image";
import bgImage from '../../public/joke1.jpg';
// Import custom Button component from the UI directory
import { Button } from "@/components/ui/button";

// Define a TypeScript interface for the joke response
interface JokeResponse {
  setup: string;
  punchline: string;
}

// Default export of the RandomJokeComponent function
export default function RandomJoke() {
  // State hook for managing the current joke
  const [joke, setJoke] = useState<string>("");

  // Effect hook to fetch a joke when the component mounts
  useEffect(() => {
    fetchJoke();
  }, []); // Empty dependency array ensures this runs once on mount

  // Async function to fetch a random joke from the API
  async function fetchJoke(): Promise<void> {
    try {
      // Make a GET request to the joke API
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data: JokeResponse = await response.json();
      // Update state with the fetched joke
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      console.error("Error fetching joke:", error); // Log any errors
      // Set an error message if the fetch fails
      setJoke("Failed to fetch joke. Please try again.");
    }
  }

  // JSX return statement rendering the random joke UI
  return (
    <div id="home" className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[#ffa500] to-[#ff6b6b] p-4">
      <Image
  src={bgImage}
  layout="fill"
  objectFit="cover"
  alt="Background Image"
/>
      {/* Center the joke card within the screen */}
      <div className=" relative shadow-lg rounded-2xl bg-gradient-to-br from-gray-400 to-yellow-400 p-8 w-full max-w-md">
        {/* Header with title */}
        <h1 className="  text-3xl pl-12 font-bold mb-4 text-[#333] shadow-lg rounded-2xl bg-gradient-to-br from-pink-400 to-teal-400">
          😂 Random Joke 👈
        </h1>
        {/* Display the joke or a loading message */}
        <div className="shadow-lg rounded-2xl p-2 bg-gradient-to-br from-blue-200 to-green-400 mb-6 text-black-900 text-lg">
          {joke || "Loading..."}
        </div>
        {/* Button to fetch a new joke */}
        <Button
          onClick={fetchJoke}
          className="bg-[#4caf50] hover:bg-[#43a047] text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
        >
          😂 Get New Joke 😂
        </Button>
      </div>
    </div>
  );
}