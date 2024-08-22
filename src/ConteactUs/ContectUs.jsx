import React, { useState, useRef } from 'react';
import logo from '../assets/images/HeaderLogo.svg';

const ContactUs = () => {
    const [selectedCountry, setSelectedCountry] = useState('India');
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const currentYear = new Date().getFullYear();
    const [selectedDate, setSelectedDate] = useState(null);
    const [showTimeSelection, setShowTimeSelection] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedTime, setSelectedTime] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        help: '',
        linkedin: '',
    });

    const countries = ['USA', 'India', 'UK', 'Canada', 'Australia', 'Germany', 'France'];
    const dropdownRef = useRef(null);

    const handleCountryChange = (event) => {
        const input = event.target.value;
        setSelectedCountry(input);

        const filtered = countries.filter(country =>
            country.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredCountries(filtered);
        setShowCountryDropdown(true);
    };

    const handleSelectCountry = (country) => {
        setSelectedCountry(country);
        setFilteredCountries([]);
        setShowCountryDropdown(false);
    };

    const handleNextMonth = () => {
        if (currentMonth < 11) {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const handlePreviousMonth = () => {
        const current = new Date().getMonth();
        if (currentMonth > current) {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getStartDayOfMonth = (month, year) => {
        return new Date(year, month, 1).getDay();
    };

    const handleDateClick = (day) => {
        setSelectedDate(`${monthNames[currentMonth]} ${day}, ${currentYear}`);
        setShowTimeSelection(true);
    };

    const handleChangeDate = () => {
        setShowTimeSelection(false);
    };

    const handleTimeClick = (time) => {
        setSelectedTime(time);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted', formData);
        alert('Form Submitted');

        // Reset all states
        setShowPopup(false);
        setShowTimeSelection(false);
        setSelectedCountry('India');
        setSelectedDate(null);
        setSelectedTime('');
        setFormData({
            name: '',
            email: '',
            help: '',
            linkedin: '',
        });
    };

    const times = [
        "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM",
        "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"
    ];

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const today = new Date();
    const lastSelectableDate = new Date();
    lastSelectableDate.setDate(today.getDate() + 18);

    const isDateSelectable = (day) => {
        const date = new Date(currentYear, currentMonth, day);
        const isSunday = date.getDay() === 0;
        return !isSunday && date >= today && date <= lastSelectableDate;
    };

    const handleBlur = (event) => {
        setTimeout(() => {
            if (!dropdownRef.current.contains(event.relatedTarget)) {
                setShowCountryDropdown(false);
            }
        }, 100);
    };

    return (
        <section id="contact" className='min-h-screen bg-[#07080a] text-white py-12 flex items-center justify-center relative'>
        <div className='container mx-auto px-4 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className='left p-10 bg-[#1b1c1f] rounded-lg shadow-lg relative'>
                    <div className="title-case mb-8">
                        <h2 className="text-4xl font-bold mb-4 text-white tracking-wide">Chat with Crealogic</h2>
                        <p className="text-xl text-gray-400">Duration: 30 mins</p>
                    </div>
                    <div className="agenda text-lg space-y-6">
                        {[
                            "Discuss your product/business/service",
                            "Define overarching goals",
                            "Identify challenges to overcome",
                            "Plan next steps"
                        ].map((text, index) => (
                            <p className="pointer flex items-center" key={index}>
                                <span className="inline-block w-2 h-2 rounded-full bg-gray-400 mr-3"></span>
                                <span className="font-medium text-gray-300 hover:text-white transition-colors duration-300">{text}</span>
                            </p>
                        ))}
                    </div>
                </div>
    
                <div className='right p-8 bg-[#1b1c1f] rounded-lg shadow-lg'>
                    {!showTimeSelection ? (
                        <>
                            <div className='flex gap-4 pb-5'>
                                <img src={logo} alt="Logo" className="mb-4 w-12 h-12" />
                                <div>
                                    <h2 className='font-medium text-base'>Crealogic</h2>
                                    <h2 className='font-normal text-sm'>30 Minute Meeting (Website)</h2>
                                </div>
                            </div>
                            <div className="mb-6 relative">
                                <h2 className="text-xl text-center font-bold mb-6">Select Date:</h2>
                                <input
                                    id="country-input"
                                    type="text"
                                    value={selectedCountry}
                                    onChange={handleCountryChange}
                                    onFocus={() => setFilteredCountries(countries)}
                                    onBlur={handleBlur}
                                    placeholder="Start typing a country name..."
                                    className="w-full p-3 border border-gray-700 rounded bg-[#2a2b2e] text-white focus:outline-none focus:border-blue-500"
                                />
                                <button
                                    onClick={handleCountryChange}
                                    className={"p-3 right-4 absolute "}>
                                    &#709;
                                </button>
                                {filteredCountries.length > 0 && (
                                    <ul ref={dropdownRef} id="style-1" className="border border-gray-700 pt-2 absolute mt-2 rounded w-full max-h-40 overflow-y-auto bg-[#2a2b2e] z-10">
                                        {filteredCountries.map((country, index) => (
                                            <li
                                                key={index}
                                                onClick={() => handleSelectCountry(country)}
                                                className="p-2 cursor-pointer hover:bg-blue-500 hover:text-white"
                                            >
                                                {country}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="calendar-container shadow-lg p-6 rounded-lg bg-[#2a2b2e] border border-gray-700">
                                <div className="flex justify-between items-center mb-6">
                                    <button
                                        onClick={handlePreviousMonth}
                                        className={`p-3 rounded-full ${currentMonth === new Date().getMonth() ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-600 cursor-pointer transition-transform transform hover:scale-105'}`}>
                                        &lt;
                                    </button>
                                    <h3 className="text-xl font-semibold text-white">{monthNames[currentMonth]} {currentYear}</h3>
                                    <button
                                        onClick={handleNextMonth}
                                        className={`p-3 rounded-full ${currentMonth === 11 ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-600 cursor-pointer transition-transform transform hover:scale-105'}`}>
                                        &gt;
                                    </button>
                                </div>
                                <div className="grid grid-cols-7 gap-4 text-white text-sm font-medium">
                                    {dayNames.map((dayName, index) => (
                                        <div key={index} className="text-center py-2 bg-gray-700 rounded-md">{dayName}</div>
                                    ))}
                                    {Array.from({ length: getStartDayOfMonth(currentMonth, currentYear) }).map((_, index) => (
                                        <div key={index} className="p-2"></div>
                                    ))}
                                    {Array.from({ length: getDaysInMonth(currentMonth, currentYear) }, (_, i) => {
                                        const day = i + 1;
                                        const selectable = isDateSelectable(day);
                                        const date = new Date(currentYear, currentMonth, day);
                                        const isSunday = date.getDay() === 0;
    
                                        return (
                                            <div
                                                key={day}
                                                onClick={() => selectable && handleDateClick(day)}
                                                className={`xl:p-3 p-2 text-center rounded-full cursor-pointer transition-all duration-200 ${selectable ? 'hover:bg-blue-600 border border-blue-700 hover:text-white' : 'opacity-50 cursor-not-allowed'} ${isSunday ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300'} hover:shadow-lg`}
                                            >
                                                {day}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className='time-selection space-y-6'>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <h2 className="text-4xl font-extrabold mb-2 text-white">Select Time</h2>
                                    <p className="text-lg text-gray-300">
                                        {selectedCountry} - {selectedDate}
                                    </p>
                                </div>
                                <button
                                    onClick={handleChangeDate}
                                    className="py-2 px-6 underline rounded-lg "
                                >
                                    Change Date
                                </button>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {times.map((time, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleTimeClick(time)}
                                        className="py-3 px-5 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg shadow-lg text-white font-medium hover:from-gray-800 hover:to-gray-900 transition duration-300"
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    
        {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center z-50  bg-black/50">
                <div className="relative w-2/3 bg-[#1b1c1f] text-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
                    <button
                        onClick={handleClosePopup}
                        className="absolute top-2 right-4 p-2 text-gray-400 hover:text-white text-3xl"
                        aria-label="Close"
                    >
                        &times;
                    </button>
                    <h3 className="text-2xl font-bold mt-6 my-4">Meeting Confirmation</h3>
                    <p className="pb-2 text-lg">You have scheduled a meeting on:</p>
                    <p className="pb-2"> {selectedDate} at {selectedTime}.</p>
                    <p className="pb-2 text-lg">Selected Country: {selectedCountry}</p>
                    <form onSubmit={handleSubmit} className="pb-2 space-y-4 mt-6">
                        <div>
                            <label className="block text-lg mb-1">Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-700 rounded bg-[#2a2b2e] text-white focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-lg mb-1">Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-700 rounded bg-[#2a2b2e] text-white focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-lg mb-1">How can we help you?</label>
                            <textarea
                                name="help"
                                value={formData.help}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-700 rounded bg-[#2a2b2e] text-white focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    <div>
                        <label className="block text-lg mb-1">LinkedIn Profile:</label>
                        <input
                            type="url"
                            name="linkedin"
                            value={formData.linkedin}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-700 rounded bg-[#2a2b2e] text-white focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="flex justify-between">
                       <button
    type="submit"
    className="mt-6 py-2 px-4 border border-gray-700 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
>
    Submit
</button>
                    </div>
                </form>
            </div>
        </div>
            )}
        </section>
    );
};

export default ContactUs;