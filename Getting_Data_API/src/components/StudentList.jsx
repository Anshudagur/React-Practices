import { useState, useEffect } from "react"
import { supabase } from '../supaBaseClient'

// steps to fetch data from a remote database (i.e., supabase, firebase etc)
// 1. Adding configuration URL and API key into .env file at src level
// 2. Importing the configuration using import.meta.env.name (like import.meta.env.VITE_SUPABASE_URL)
// 3. Importing @supabase/supabase-js to createClient(url,key)
// 4. Using ORM for query by calling supabase() [It's actualy a method of client Object]
// 5. Get the data into a variable to display or use it later 

const StudentList = () => { 
    const [studentDetails, setStudentDetails] = useState([])
    const [loading, setLoading] = useState(true)
    const [err, setError] = useState("");

    useEffect(() => {
        async function fetchingStudentDetals() {
            const { data, error } = await supabase
                .from('tblStudent')
                .select(`
                        stdId,
                        name,
                        stream,
                        session,
                        address,
                        tblMarks! tblMarks_stdId_fkey (
                        sem,
                        subject1,
                        subject2,
                        subject3,
                        subject4,
                        subject5
                        )
                    `)
                  
            if (error) setError(error.message)
            else setStudentDetails(data)
            setLoading(false)
        }

        fetchingStudentDetals();
     },[])

    return (
        <>
            {loading && <p>Loading...</p>}
            {err && <p>Something went wrong : {err}</p>}
            {!loading && !err && (
                <>
                    <table className="w-full">
                        <caption className="px-5 mt-4 text-lg text-start text-slate-800 font-medium">FY 2023 Student Performance Report</caption>
                        <thead className="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th className="w-[8%] p-3 text-sm font-semibold tracking-wide text-left">Student Name</th>
                                <th className="w-[22%] p-3 text-sm font-semibold tracking-wide text-left">Student Name</th>
                                <th className="w-[12%] p-3 text-sm font-semibold tracking-wide text-left">Stream</th>
                                <th className="w-[8%] p-3 text-sm font-semibold tracking-wide text-left">Session</th>
                                <th className="w-[32%] p-3 text-sm font-semibold tracking-wide text-left">Address</th>
                                <th className="p-3 text-sm font-semibold tracking-wide text-center">Semester</th>
                                <th className="w-[20%] p-3 text-sm font-semibold tracking-wide text-center">Total Marks (500)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentDetails.map((student) => (
                                <tr key={student.stdId}
                                    className={ (student.stdId % 2 == 0) ? "bg-white-300  hover:bg-yellow-200 transition-colors " : "bg-blue-200  hover:bg-yellow-200 transition-colors"}>   
                                            <td className="p-3 text-sm font-arial">{student.stdId}</td>
                                            <td className="p-3 text-sm font-arial">{student.name}</td>
                                            <td className="p-3 text-sm font-arial">{student.stream}</td>
                                            <td className="p-3 text-sm font-arial">{student.session}</td>
                                            <td className="p-3 text-sm font-arial text-left">{student.address}</td>
                                            
                                            <td className="p-3 text-sm font-arial text-center">
                                                {(student.tblMarks).map((mark) => mark.sem)}
                                            </td>
                                    
                                            <td className="p-3 text-sm font-arial text-center">
                                                {
                                                    (student.tblMarks).reduce(
                                                        (acc, mark) => acc + mark.subject1 + mark.subject2 + mark.subject3 + mark.subject4 + mark.subject5,
                                                        0
                                                    )
                                                }
                                            </td>
                                        </tr> ))
                            }
                        </tbody>
                    </table>
                </>
            )}
        </>
    );
}

export default StudentList;