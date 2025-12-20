import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
const JobPage = () => {

    const { id } = useParams()
    const [job, setJob] = useState(null);
    const [ loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch(`http://localhost:8000/jobs/${id}`)
                const data = await res.json()
                setJob(data)
            }
            catch (err) {
                console.log( "Error Fetching Data" , err)
            }
            finally{
                setLoading(false)
            }
        }
        fetchData()
    },[])


  return loading ? <div>
    <h1>Loading</h1>
  </div> : <h1>{job.title}</h1>
}

export default JobPage
