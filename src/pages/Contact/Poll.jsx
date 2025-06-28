import React, { useState } from 'react';
import axios from 'axios';
import Banner from '../../assets/banners/pollBanner.jpg';
import { BsEmojiGrin, BsEmojiNeutral, BsEmojiFrown } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";

const Poll = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedOption) return;

    try {
      await axios.post('http://127.0.0.1:8000/api/api/poll-feedback/', {
        rating: selectedOption,
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div className="relative h-48 md:h-64 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(24, 78, 119, 0.9), rgba(30, 96, 145, 0.8)), url(${Banner})`,
          }}
        ></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4">
            How is our website?
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {submitted ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 flex items-center justify-center mx-auto mb-8">
              <GrStatusGood className='text-5xl text-[#184E77]' />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Thank You for Your Feedback!</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Your opinion helps us improve our website and services.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setSelectedOption(null);
              }}
              className="mt-8 bg-[#1E6091] hover:bg-[#184E77] text-white font-bold py-3 px-8 shadow-sm transition duration-300"
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <div className="bg-white shadow-md p-6 md:p-8 max-w-2xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-2 text-[#1E6091]">
              We value your opinion!
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Please rate your experience with our website
            </p>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {['nice', 'medium', 'bad'].map(option => {
                  const icon = option === 'nice' ? <BsEmojiGrin className='text-2xl' />
                    : option === 'medium' ? <BsEmojiNeutral className='text-2xl' />
                      : <BsEmojiFrown className='text-2xl' />;
                  const bg = {
                    nice: 'bg-[#D9ED92]',
                    medium: 'bg-[#B5E48C]',
                    bad: 'bg-[#99D98C]',
                  }[option];

                  return (
                    <label key={option} className={`flex flex-col items-center p-4 cursor-pointer transition duration-200 ${selectedOption === option ? bg : 'bg-gray-50'}`}>
                      <input type="radio" name="poll" value={option} className="hidden" onChange={() => setSelectedOption(option)} />
                      <div className={`w-16 h-16 flex items-center justify-center mb-3 ${selectedOption === option ? 'bg-[#1E6091] text-white' : 'bg-gray-200'}`}>
                        {icon}
                      </div>
                      <span className="font-medium text-gray-800 capitalize">{option}</span>
                    </label>
                  );
                })}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={!selectedOption}
                  className={`py-3 px-8 font-bold shadow-sm transition duration-300 ${selectedOption ? 'bg-[#1E6091] hover:bg-[#184E77] text-white' : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Additional Feedback */}
        {!submitted && (
          <div className="mt-8 bg-gray-50 p-6 max-w-2xl mx-auto ">
            <h3 className="text-lg font-bold mb-3 text-center text-[#1E6091]">
              Want to share more detailed feedback?
            </h3>
            <p className="text-gray-700 text-center mb-4">
              We'd love to hear your suggestions for improvement
            </p>
            <div className="text-center">
              <a
                href="mailto:info@smartcitytvm.in"
                target='_blank'
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#1E6091] hover:text-[#184E77] font-medium"
              >
                Send us an email
                <FaArrowRightLong className='text-xl ml-2' />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Poll;
