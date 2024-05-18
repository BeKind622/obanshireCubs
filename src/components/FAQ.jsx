
import React from 'react';
import './components.css';


function FAQ() {
  return (
    <div className=" mx-auto px-5 bg-white min-h-screen">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
        <p className="text-neutral-500 text-xl mt-3">Frequently asked questions</p>
      </div>
      <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
        {faqItems.map((item, index) => (
          <div className="py-5" key={index}>
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className='text-neutral-600'>{item.question}</span>
                <span className="transition group-open:rotate-180 ">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 fadeIn">
                {item.answer}
              </p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}

const faqItems = [
    {
      question: "What is the purpose of Scouting?",
      answer: "Scouting aims to support young people in their physical, mental, and spiritual development, so they can play constructive roles in society."
    },
    {
      question: "How can my child join the Scouts?",
      answer: "Your child can join the Scouts by finding a local troop and attending a few meetings to see if they enjoy it. You can use our website's 'Join' feature to find a troop near you."
    },
    {
      question: "What is the cost of joining the Scouts?",
      answer: "The cost varies by troop, but it typically includes annual membership fees, uniform costs, and expenses for activities and trips. Some financial assistance may be available."
    },
    {
      question: "What activities do Scouts participate in?",
      answer: "Scouts participate in a variety of activities including camping, hiking, community service, and learning practical skills such as first aid and navigation."
    },
    {
      question: "How can parents get involved as helpers?",
      answer: "Parents can get involved by registering as helpers for scout events. You can sign up on our website or talk to your child's troop leader about volunteering opportunities."
    },
    {
      question: "Are there training requirements for parent helpers?",
      answer: "Yes, parent helpers are required to undergo basic training, which includes understanding safety protocols and child protection policies. Details are available on our website."
    },
    {
      question: "What are the benefits of becoming a parent helper?",
      answer: "As a parent helper, you can actively participate in your child's scouting experience, help plan and run activities, and contribute to the development of young scouts."
    },
    {
      question: "How can I register my child for a scout camp?",
      answer: "You can register your child for a scout camp through our website. Look for the 'Events' section, find the camp you're interested in, and complete the registration form."
    },
    {
      question: "What should my child bring to scout meetings and events?",
      answer: "Your child should bring their scout uniform, any required materials (like a scout handbook), and appropriate gear for the activity, such as camping equipment for an overnight trip."
    },
    {
      question: "How do Scouts ensure the safety of participants during events?",
      answer: "Safety is our top priority. All events are supervised by trained leaders, and we follow strict safety protocols. Emergency procedures and first aid measures are in place for all activities."
    }
  ];
  

export default FAQ;
