import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {
  const careers = useLoaderData()

  return (
    <div className="careers">
      {careers.map(career => (
        // This is all under careers - don't need to have /careers/
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  )
}

// data loader
export const careersLoader = async () => {
  const res = await fetch('http://localhost:4000/careerss') // npm install -g json-server --> json-server -p 4000 -w ./data/db.json
  if(!res.ok) {
    throw Error('Could not fetch the careers');
  }

  return res.json() // this is a promise, but react router takes care of resolving and getting data for us
}