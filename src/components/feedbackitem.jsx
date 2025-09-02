import { FaTimes } from 'react-icons/fa';
import Card from './shared/card';

function FeedbackItem({item, handleDelete}) {

    // State to manage the feedback item
   
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => handleDelete(item.id)} className="close">
          <FaTimes color = 'purple'/>
        </button>
        <div className="text-display">{item.text}</div>

    </Card>
  )
   
}

export default FeedbackItem