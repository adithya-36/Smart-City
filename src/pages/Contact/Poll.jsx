import React, { useState } from 'react';
import Banner from '../../assets/banners/pollBanner.jpg';
import HappyEmoji from '../../assets/images/happyEmoji.png'
import MediumEmoji from '../../assets/images/mediumEmoji.png'
import SadEmoji from '../../assets/images/sadEmoji.png'
const Poll = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption) {
      setSubmitted(true);
      // Here you would typically send the data to your backend
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Banner */}
      <div className="relative h-48 md:h-64 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 60, 80, 0.85), rgba(0, 128, 128, 0.6)), url(${Banner})`,
          }}
        ></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4 drop-shadow-lg">
            How is our website?
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {submitted ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Thank You for Your Feedback!</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Your opinion helps us improve our website and services. We appreciate you taking the time to share your thoughts.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setSelectedOption(null);
              }}
              className="mt-8 bg-gradient-to-r from-teal-600 to-blue-800 hover:from-teal-700 hover:to-blue-900 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-2xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-2" style={{ color: '#1A759F' }}>
              We value your opinion!
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Please rate your experience with our website
            </p>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {/* Nice Option */}
                <label
                  className={`poll-option ${selectedOption === 'nice' ? 'option-selected' : ''}`}
                  style={{
                    backgroundColor: selectedOption === 'nice' ? '#D9ED92' : '#f8fafc',
                    borderColor: selectedOption === 'nice' ? '#52B69A' : '#e2e8f0',
                    borderWidth: selectedOption === 'nice' ? '2px' : '1px'
                  }}
                >
                  <input
                    type="radio"
                    name="poll"
                    value="nice"
                    className="hidden"
                    onChange={() => setSelectedOption('nice')}
                  />
                  <div className="flex flex-col items-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
                      style={{ backgroundColor: selectedOption === 'nice' ? '#76C893' : '#e2e8f0' }}
                    >
                      <img className='w-8' src={HappyEmoji} />
                    </div>
                    <span className="font-medium">Nice</span>
                  </div>
                </label>

                {/* Medium Option */}
                <label
                  className={`poll-option ${selectedOption === 'medium' ? 'option-selected' : ''}`}
                  style={{
                    backgroundColor: selectedOption === 'medium' ? '#B5E48C' : '#f8fafc',
                    borderColor: selectedOption === 'medium' ? '#34A0A4' : '#e2e8f0',
                    borderWidth: selectedOption === 'medium' ? '2px' : '1px'
                  }}
                >
                  <input
                    type="radio"
                    name="poll"
                    value="medium"
                    className="hidden"
                    onChange={() => setSelectedOption('medium')}
                  />
                  <div className="flex flex-col items-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
                      style={{ backgroundColor: selectedOption === 'medium' ? '#52B69A' : '#e2e8f0' }}
                    >
                      <img className='w-8' src={MediumEmoji} />
                    </div>
                    <span className="font-medium">Medium</span>
                  </div>
                </label>

                {/* Bad Option */}
                <label
                  className={`poll-option ${selectedOption === 'bad' ? 'option-selected' : ''}`}
                  style={{
                    backgroundColor: selectedOption === 'bad' ? '#99D98C' : '#f8fafc',
                    borderColor: selectedOption === 'bad' ? '#1A759F' : '#e2e8f0',
                    borderWidth: selectedOption === 'bad' ? '2px' : '1px'
                  }}
                >
                  <input
                    type="radio"
                    name="poll"
                    value="bad"
                    className="hidden"
                    onChange={() => setSelectedOption('bad')}
                  />
                  <div className="flex flex-col items-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
                      style={{ backgroundColor: selectedOption === 'bad' ? '#1E6091' : '#e2e8f0' }}
                    >
                      <img className='w-8' src={SadEmoji} />
                    </div>
                    <span className="font-medium">Bad</span>
                  </div>
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={!selectedOption}
                  className={`py-3 px-8 font-bold rounded-lg shadow-md transition duration-300 ${selectedOption
                    ? 'bg-gradient-to-r from-teal-600 to-blue-800 hover:from-teal-700 hover:to-blue-900 text-white transform hover:scale-105'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
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
          <div className="mt-8 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6 border border-teal-200 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold mb-3 text-center" style={{ color: '#1A759F' }}>
              Want to share more detailed feedback?
            </h3>
            <p className="text-gray-700 text-center mb-4">
              We'd love to hear your suggestions for improvement
            </p>
            <div className="text-center">
              <a
                href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJftMNgkxsbtGnTzlvTdKXqnSdpsKqbMswlgtJwNgmLtPvQPbDZbGfmMfBgDSFKcmPbSgLV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Send us an email
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Poll;