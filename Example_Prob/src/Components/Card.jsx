import Title from './Title';
import Description from './Description.jsx'
import Address from './Address.jsx'

function Card({ picUrl, title, description, address }) {  // getting data using props
    return (
        <div className="card">
            <div className="left-side">
                <img className="avatar" src={ picUrl} alt="User Profile"/>
            </div>
            <div className="right-side">
                <Title name={ title } />
                <Description description= { description } />
                <Address address= { address } />
            </div>
        </div>
    )
}

export default Card; 