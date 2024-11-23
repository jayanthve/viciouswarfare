"use client";
import Head from "next/head";
import React, { useState } from "react";
import { Calendar, MapPin, Clock, Info, X } from "lucide-react";

const events = [
  {
    id: 1,
    date: "November 26, 2024",
    city: "Delhi",
    ticket: "Available - Rs 2499",
  },
  {
    id: 2,
    date: "December 15, 2024",
    city: "Mumbai",
    ticket: "Sold Out",
  },
  {
    id: 3,
    date: "January 20, 2025",
    city: "Bangalore",
    ticket: "Available - Rs 3299",
  },
];

const EventCard = ({ event, onDetailsClick }) => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
      <div className="px-6 py-4 flex justify-between items-center border-b border-gray-700 bg-gradient-to-r from-gray-900 to-black">
        <h2 className="text-xl font-bold text-white">{event.date}</h2>
      </div>
      <div className="p-6 space-y-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="flex items-center text-gray-300">
          <MapPin className="mr-3 h-5 w-5 text-gray-400" />
          <span>{event.city}</span>
        </div>
        <div className="font-bold text-lg bg-gradient-to-r from-red-800 to-red-600 bg-clip-text text-transparent">
          {event.ticket}
        </div>
        <button
          onClick={() => onDetailsClick(event)}
          className="w-full mt-4 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white 
          hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 
          focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          Get Tickets
        </button>
      </div>
    </div>
  );
};

const EventDetailsModal = ({ event, isOpen, onClose }) => {
  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-lg max-w-md w-full p-6 max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex justify-between items-center border-b border-gray-700 pb-4 mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-red-800 to-red-600 bg-clip-text text-transparent">
            Event Details
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="space-y-6">
          <div className="flex items-center text-gray-300">
            <Calendar className="mr-3 h-5 w-5 text-gray-400" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <MapPin className="mr-3 h-5 w-5 text-gray-400" />
            <span>{event.city}</span>
          </div>
          <div className="text-lg font-semibold text-white">{event.ticket}</div>
          <button
            className="w-full px-6 py-3 bg-gradient-to-r from-red-800 to-red-600 text-white rounded-md
            hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:-translate-y-1
            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 font-semibold"
          >
            Purchase Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEventDetailsClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <>
      <Head>
        <title>Events | Vicious Warfare</title>
        <meta
          name="description"
          content="Revive and create the dark, raw sound of old-school black and death metal music from the 1980s and 1990s."
        />
        <meta
          name="keywords"
          content="Revive and create the dark, raw sound of old-school black and death metal music from the 1980s and 1990s."
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-800 to-red-600 bg-clip-text text-transparent">
              Live Events
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Stay updated with news, live event dates, purchase tickets, and more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} onDetailsClick={handleEventDetailsClick} />
            ))}
          </div>

          <EventDetailsModal
            event={selectedEvent}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        </div>
      </div>
    </>
  );
}
