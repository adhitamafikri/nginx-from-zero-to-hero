import { useNavigate } from "react-router";

export function About() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>This is an About page</h1>
      <p>React TS SPA served with nginx</p>

      <button role="button" onClick={() => navigate("/")}>
        Navigate to Home Page
      </button>
    </div>
  );
}
