"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <p className="fs-1 text-center"> 😔 </p>
      <h2>Something went wrong!</h2>
      <p>Try one of the following:</p>
      <div className="d-flex flex-row">
        <button
          className="btn btn-primary"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
        <button
          className="btn btn-secondary ms-2"
          onClick={
            // Attempt to recover by pushing the user to the home page
            () => (window.location.href = "/blog")
          }
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
