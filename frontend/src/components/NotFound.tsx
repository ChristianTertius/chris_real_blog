import { Link } from "react-router"

const NotFound = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-5xl">404</h1>
      <p>What are you looking for bruh?</p>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default NotFound
