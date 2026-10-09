import Card from "./Card.jsx";
import jobs from "./Data.js";

function CardList() {
    return (
        <div className="parent">
            {jobs.map((job) => (
                <Card key={job.id} {...job} />
            ))}
        </div>
    )
}

export default CardList