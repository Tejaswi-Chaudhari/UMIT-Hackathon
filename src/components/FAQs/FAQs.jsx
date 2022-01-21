import React, { useState } from 'react';
import FAQ from './FAQ';
import "./FAQs.css";

function App() {
    const [faqs, setfaqs] = useState([
        {
            id: 1,
            question: 'How many people should a Team be?',
            answer: 'A team should be between 1-4 people.',
        },
        {
            id: 2,
            question: 'What are the costs of participating?',
            answer: 'Free of cost',
        },
        {
            id: 3,
            question: 'What are the tracks of the Hackathon?',
            answer: 'FinTech, Education, Healthcare, Gaming and innovation, Agriculture, Social Cause',
        },
        {
            id: 4,
            question: 'Can we have team members who are not from UMIT?',
            answer: 'Yes, you can have team members from any college.',
        },
        {
            id: 5,
            question: 'Is a specific coding language required?',
            answer: 'No, We do not have any restriction as far as coding language is concerned.',
        },
        {
            id: 6,
            question: 'Can I submit an old project?',
            answer: 'No, We do not encourage this. 70%+ of the work submitted under this hackathon must be between the coding period instructed.',
        },
        {
            id: 7,
            question: 'Are there any pre-events? If so is participation necessary in these events?',
            answer: 'Yes, There are pre-events (Tech Talks). The participation is voluntary.',
        },
        {
            id: 8,
            question: 'Will each team get the mentor?',
            answer: 'Yes, Each team will get a mentor who will assist them throughtout the coding period.',
        },
        
    ])

    const [clicked, setClicked] = useState("0");

    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked("0");
        }
        setClicked(index);
    };

    return (
        <div id="faq-comp" className="faqs" >
            <h2 class="display-5">Frequently Asked Questions</h2>
            {faqs.map((question, index) =>
                <FAQ key={question.id} index={question.id} onToggle={() => handleToggle(index)}
                    active={clicked === index} {...question} />
            )}
        </div>
    )
}
export default App;
