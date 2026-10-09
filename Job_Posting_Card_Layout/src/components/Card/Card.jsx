import { Bookmark } from "lucide-react"
import "./Card.modules.css";

function Card({ company, logo: Logo, postedDaysAgo, title, tags, salary, location, saved }) {
    return (
        <>        
            <div className="card">
                <div className="top">
                    <Logo size={40} className="companyPic" />
                    <button>
                        {saved ? "Saved" : "Save"} <Bookmark size={12} />
                    </button>
                </div>
                <div className="middle">
                    <h3>{company} <span>{postedDaysAgo} days ago</span></h3>
                    <h2>{title}</h2>
                    <div>
                        {tags.map((tag, i) => (
                            <h4 key={i}>{tag}</h4>
                        ))}
                    </div>
                </div>
                <div className="bottom">
                    <div>
                        <h3>{salary}</h3>
                        <p>{location}</p>
                    </div>
                    <button>Apply Now</button>
                </div>
            </div>
        </>
    )
}

export default Card