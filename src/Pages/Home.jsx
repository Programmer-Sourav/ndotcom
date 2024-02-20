import { useEffect } from "react";

export default function Home() {
  async function getNaukri() {
    try {
      const response = await fetch("http://localhost:3002/getnaukri");
      const data = await response.text();
      console.log(123, data);
    } catch (error) {
      console.error("Error ", error);
    }
  }
  useEffect(() => {
    getNaukri();
  }, []);

  return (
    <div>
      <h1> Welcome to Home page</h1>
    </div>
  );
}
