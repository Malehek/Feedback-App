import {v4 as uuidv4} from 'uuid';
import { useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header'
import ABooutIconLink from './components/AboutIconLink';
import FeedbackList from './components/feedbackList';
import FeedbackData from './data/feedbackData';
import FeedbackStats from './components/feedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/aboutPage';

function App(){

    const [feedback, setFeedback] = useState(FeedbackData);
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }
// const comments = [
//     { id: 1, text: "This is the first comment" },
//     { id: 2, text: "This is the second comment" },
//     { id: 3, text: "This is the third comment" }
// ];

// const loading = false
// const showComments = true;
// const commentsBlock = (<div className="comments">
//                 <h3>Comments ({comments.length})</h3>
//                 <ul>
//                     {comments.map((comment, index)=> (
//                         <li key={index}>{comment.text}</li>
//                     ))}
//                 </ul>
//             </div>);

// if (loading) {return <div>Loading...</div>;}   
//     return (
//         <Router>
//             <Header />
//             <div className="container">
//                 <FeedbackForm  handleAdd= {addFeedback}/>
//                 <FeedbackStats feedback={feedback} />
//                <FeedbackList feedback = {feedback} 
//                handleDelete={deleteFeedback}
//                />
//                 <Route path='/about'>This is the About Page</Route>
//             </div>
//         </Router>
// )
   
// }

    return (
    <Router>
        <Header />
        <div className="container">
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <FeedbackForm handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                        </>
                    }
                />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
            <ABooutIconLink />
        </div>
    </Router>
);
}

export default App;
