import { FaQuestion } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ABooutIconLink() {
  return (

    <div className="about-link">
    <Link to="/about" >
        <FaQuestion size={20}/>
    </Link>
    </div>
  )
}

export default ABooutIconLink;