export default async function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ fontFamily: "Arial, sans-serif", color: "#2c3e50" }}>
        Welcome to the Fetch Demonstration Page! 🌟
      </h1>
      <p style={{ fontSize: "18px", color: "#34495e" }}>
        This page serves as an introduction to fetching data with Server-Side Rendering (SSR).
      </p>
      <h2 style={{ fontWeight: "normal", marginTop: "30px", color: "#16a085" }}>
        To see the fetched result, kindly navigate to: 
        <a 
          href="http://localhost:3000/api/v1/user/details" 
          style={{ textDecoration: "none", color: "#2980b9" }}
        >
          localhost:3000/user/api/v1/user/details
        </a>
      </h2>
      <p style={{ marginTop: "20px", fontSize: "16px", color: "#7f8c8d" }}>
        Happy coding! 🚀
      </p>
    </div>
  );
}
