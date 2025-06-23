import React, { useState, useEffect, useCallback, useRef } from "react";
import bgImage from "../assets/Images/bg.png";
import img1 from "../assets/Images/1.png";
import img2 from "../assets/Images/2.png";
import img3 from "../assets/Images/3.png";
import img4 from "../assets/Images/4.png";
import img5 from "../assets/Images/5.png";
import img6 from "../assets/Images/6.png";
import img7 from "../assets/Images/7.png";
import img8 from "../assets/Images/8.png";
import img9 from "../assets/Images/9.png";
import img10 from "../assets/Images/10.png";
import img11 from "../assets/Images/11.png";
import img12 from "../assets/Images/12.png";
import Footer from "./Footer";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSpeaker, setCurrentSpeaker] = useState(0);
  const [selectedScheduleTab, setSelectedScheduleTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [highlightsVisible, setHighlightsVisible] = useState(false);
  const [speakersVisible, setSpeakersVisible] = useState(false);
  const [scheduleVisible, setScheduleVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState(false);

  const highlightsRef = useRef(null);
  const speakersRef = useRef(null);
  const scheduleRef = useRef(null);
  const registerRef = useRef(null);
  const galleryRef = useRef(null);

  // Animation effect on component mount
  useEffect(() => {
    setIsVisible(true);

    // Intersection Observer for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === highlightsRef.current)
              setHighlightsVisible(true);
            else if (entry.target === speakersRef.current)
              setSpeakersVisible(true);
            else if (entry.target === scheduleRef.current)
              setScheduleVisible(true);
            else if (entry.target === registerRef.current)
              setRegisterVisible(true);
            else if (entry.target === galleryRef.current)
              setGalleryVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    [highlightsRef, speakersRef, scheduleRef, registerRef, galleryRef].forEach(
      (ref) => {
        if (ref.current) observer.observe(ref.current);
      }
    );

    return () => {
      [
        highlightsRef,
        speakersRef,
        scheduleRef,
        registerRef,
        galleryRef,
      ].forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  // Event data
  const eventData = {
    category: "Next Event",
    title: "Artificial Intelligence Training",
    subtitle: "Artificial Intelligence Training",
    where: {
      label: "Where",
      venue: "Pune University",
      location: "of Proven Tech",
    },
    when: {
      label: "When",
      date: "June 07, 2024",
      time: "9:11 AM",
    },
    backgroundImage: bgImage,
  };

  // Event highlights data
  const eventHighlights = [
    {
      id: 1,
      date: "October 15, 2024",
      title: "Tech for Tomorrow",
      description:
        "Join us for a thrill diving event as we explore the latest trends in technology and innovation.",
      featured: true,
    },
    {
      id: 2,
      date: "November 20, 2024",
      title: "Creative Future Festival",
      description:
        "Experience a full day experience understanding art, design, and local creative innovations.",
      featured: false,
    },
  ];

  // Keynote speakers data
  const keynoteSpeakers = [
    {
      id: 1,
      name: "Dr. Chan Sokha",
      title:
        "Renowned psychologist specializing in mental health and well-being.",
      image: "/api/placeholder/300/400",
      expertise: ["Psychology", "Mental Health", "Wellness"],
      experience: "15+ years",
    },
    {
      id: 2,
      name: "Mr. Sok Chea",
      title: "Award-winning entrepreneur and business strategist.",
      image: "/api/placeholder/300/400",
      expertise: ["Business Strategy", "Entrepreneurship", "Innovation"],
      experience: "12+ years",
    },
    {
      id: 3,
      name: "Ms. Chea Lina",
      title: "Innovative tech leader shaping the future of AI and robotics.",
      image: "/api/placeholder/300/400",
      expertise: ["AI Technology", "Robotics", "Tech Innovation"],
      experience: "10+ years",
    },
  ];

  // Event schedule data
  const eventSchedule = [
    {
      id: 1,
      date: "Monday, June 2024 (Day 1)",
      title: "TechForward Cambodia",
      description:
        "Advance the future of fintech and technology in Cambodia through innovative solutions",
      sessions: [
        {
          time: "9:00 AM",
          title: "Registration & Welcome",
          speaker: "Event Team",
          description: "Check-in and morning refreshments",
        },
        {
          time: "10:00 AM",
          title: "AI in Fintech: Future Perspectives",
          speaker: "Dr. Chan Sokha",
          description: "Exploring AI applications in financial technology",
        },
        {
          time: "11:30 AM",
          title: "Workshop: Building AI Models",
          speaker: "Technical Team",
          description:
            "Hands-on workshop on developing, designing, and implementing new tech infrastructure",
        },
      ],
    },
    {
      id: 2,
      date: "Tuesday, June 2024 (Day 2)",
      title: "CreativeConnect Expo",
      description:
        "Showcasing creative technology, design, and innovation across multiple industries",
      sessions: [
        {
          time: "9:00 AM",
          title: "Creative Orientation",
          speaker: "Design Team",
          description: "Opening ceremony and creative showcase",
        },
        {
          time: "10:30 AM",
          title: "Hands-on Workshop",
          speaker: "Industry Experts",
          description: "Building on-air business and art projects of attendee",
        },
        {
          time: "2:00 PM",
          title: "Creative Park & Performance",
          speaker: "Artists & Performers",
          description:
            "Showcasing creative technology through visual performances and interactive demonstrations",
        },
      ],
    },
    {
      id: 3,
      date: "Wednesday, June 2024 (Day 3)",
      title: "Youth Impact Summit",
      description:
        "Empowering the next generation with technology and innovation skills",
      sessions: [
        {
          time: "9:00 AM",
          title: "Youth Talk",
          speaker: "Young Leaders",
          description: "Inspiring talks by young innovators and changemakers",
        },
        {
          time: "11:00 AM",
          title: "Startup Pitch Hour",
          speaker: "Young Entrepreneurs",
          description:
            "Young entrepreneurs presenting their innovative startup ideas",
        },
        {
          time: "2:00 PM",
          title: "Community Networking",
          speaker: "All Participants",
          description:
            "Connect and network with peers and industry professionals",
        },
      ],
    },
  ];

  // Gallery images
  const galleryImages = [
    { id: 1, src: img1, alt: "Conference presentation" },
    { id: 2, src: img2, alt: "Team collaboration" },
    { id: 3, src: img3, alt: "Workshop session" },
    { id: 4, src: img4, alt: "Networking event" },
    { id: 5, src: img5, alt: "Panel discussion" },
    { id: 6, src: img6, alt: "Tech demonstration" },
    { id: 7, src: img7, alt: "Awards ceremony" },
    { id: 8, src: img8, alt: "Group photo" },
    { id: 9, src: img9, alt: "Innovation showcase" },
    { id: 10, src: img10, alt: "Speaker session" },
    { id: 11, src: img11, alt: "Workshop activity" },
    { id: 12, src: img12, alt: "Closing ceremony" },
  ];

  // Auto-slide effects
  useEffect(() => {
    if (highlightsVisible) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % eventHighlights.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [highlightsVisible, eventHighlights.length]);

  useEffect(() => {
    if (speakersVisible) {
      const interval = setInterval(() => {
        setCurrentSpeaker((prev) => (prev + 1) % keynoteSpeakers.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [speakersVisible, keynoteSpeakers.length]);

  // Event handlers
  const handleJoinClick = useCallback(() => {
    console.log("Joining event...");
  }, []);

  const handleLearnMore = useCallback(() => {
    console.log("Learning more...");
  }, []);

  const handleRegister = useCallback(() => {
    console.log("Registering for event...");
  }, []);

  const handleSlideChange = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const handleSpeakerChange = useCallback((index) => {
    setCurrentSpeaker(index);
  }, []);

  const nextSpeaker = useCallback(() => {
    setCurrentSpeaker((prev) => (prev + 1) % keynoteSpeakers.length);
  }, [keynoteSpeakers.length]);

  const prevSpeaker = useCallback(() => {
    setCurrentSpeaker(
      (prev) => (prev - 1 + keynoteSpeakers.length) % keynoteSpeakers.length
    );
  }, [keynoteSpeakers.length]);

  return (
    <>
      {/* Main Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${eventData.backgroundImage})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/70" />
        </div>

        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-20" />
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce opacity-30" />
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-1000" />
          <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-blue-600 rounded-full animate-ping delay-2000 opacity-20" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Event Content */}
            <div
              className={`space-y-8 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              {/* Event Category Badge */}
              <div className="inline-flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">
                  {eventData.category}
                </span>
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  <span className="text-blue-400 animate-fade-in-up">
                    Artificial
                  </span>{" "}
                  <span className="text-white animate-fade-in-up delay-300">
                    Intelligence
                  </span>
                  <br />
                  <span className="text-white animate-fade-in-up delay-500">
                    Training
                  </span>
                  <span className="text-blue-400 animate-fade-in-up delay-700">
                    Artificial
                  </span>
                  <br />
                  <span className="text-white animate-fade-in-up delay-900">
                    Intelligence
                  </span>{" "}
                  <span className="text-blue-400 animate-fade-in-up delay-1000">
                    Training
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl animate-fade-in-up delay-1200">
                Join us for an immersive AI training experience that will
                transform your understanding of artificial intelligence and
                machine learning technologies.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in-up delay-1400">
                <button
                  onClick={handleJoinClick}
                  className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Join Event
                    <svg
                      className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </button>

                <button
                  onClick={handleLearnMore}
                  className="px-8 py-4 border-2 border-gray-600 hover:border-blue-500 text-white hover:text-blue-400 font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Side - Event Details Card */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden hover:shadow-blue-500/20 transition-all duration-300">
                <div className="p-8 space-y-8">
                  {/* Where Section */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <svg
                        className="h-5 w-5 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <h3 className="text-blue-400 font-semibold uppercase tracking-wider text-sm">
                        {eventData.where.label}
                      </h3>
                    </div>
                    <div className="pl-7 space-y-1">
                      <p className="text-white font-semibold text-lg">
                        {eventData.where.venue}
                      </p>
                      <p className="text-gray-300 text-sm">
                        {eventData.where.location}
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  {/* When Section */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <svg
                        className="h-5 w-5 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <h3 className="text-blue-400 font-semibold uppercase tracking-wider text-sm">
                        {eventData.when.label}
                      </h3>
                    </div>
                    <div className="pl-7 space-y-1">
                      <p className="text-white font-semibold text-lg">
                        {eventData.when.date}
                      </p>
                      <p className="text-gray-300 text-sm">
                        {eventData.when.time}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={handleJoinClick}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                    >
                      Join Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Event Highlights Section */}
      <section ref={highlightsRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div
            className={`text-center mb-12 transform transition-all duration-1000 ${
              highlightsVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event Highlights
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Stay updated on upcoming events. Complete with data, location, and
              theme.
            </p>
          </div>

          {/* Event Cards */}
          <div className="relative container mx-auto px-4">
            <div className="overflow-hidden rounded-2xl">
              <div
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-700 ${
                  highlightsVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* Event 1 */}
                  <div className="space-y-4">
                    <div className="inline-block bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      {eventHighlights[0].date}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {eventHighlights[0].title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {eventHighlights[0].description}
                    </p>
                    <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                      Learn More →
                    </button>
                  </div>

                  {/* Event 2 */}
                  <div className="space-y-4">
                    <div className="inline-block bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      {eventHighlights[1].date}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {eventHighlights[1].title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {eventHighlights[1].description}
                    </p>
                    <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {eventHighlights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Keynote Speakers Section */}
      <section ref={speakersRef} className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div
            className={`mb-12 transform transition-all duration-1000 ${
              speakersVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Keynote
              <br />
              Speakers
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
              Get inspired by our distinguished keynote speakers who are experts
              in their fields. Learn more about their profiles and the topics
              they will cover at the event:
            </p>
          </div>

          {/* Speakers Carousel */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSpeaker}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
              aria-label="Previous speaker"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSpeaker}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
              aria-label="Next speaker"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Speakers Cards Container */}
            <div className="overflow-hidden rounded-2xl mx-12">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSpeaker * (100 / 3)}%)`,
                }}
              >
                {keynoteSpeakers.map((speaker, index) => (
                  <div
                    key={speaker.id}
                    className="w-full md:w-1/3 flex-shrink-0 px-4"
                  >
                    <div
                      className={`bg-gray-50 rounded-2xl p-6 h-96 flex flex-col justify-between transform transition-all duration-700 hover:shadow-lg hover:scale-105 ${
                        speakersVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      {/* Speaker Image Placeholder */}
                      <div className="w-full h-40 bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
                        <svg
                          className="w-16 h-16 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>

                      {/* Speaker Info */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">
                          {speaker.name}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {speaker.title}
                        </p>

                        {/* Expertise Tags */}
                        <div className="flex flex-wrap gap-2">
                          {speaker.expertise
                            .slice(0, 2)
                            .map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                        </div>

                        {/* Experience */}
                        <div className="pt-2">
                          <span className="text-xs text-gray-500 font-medium">
                            Experience: {speaker.experience}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Speaker Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {keynoteSpeakers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSpeakerChange(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSpeaker === index
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Schedule Section */}
      <section ref={scheduleRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div
            className={`mb-12 transform transition-all duration-1000 ${
              scheduleVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event Schedule
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Discover the three-day conference, workshops, and networking
              opportunities.
            </p>
          </div>

          {/* Schedule Tabs */}
          <div
            className={`mb-8 transform transition-all duration-1000 delay-200 ${
              scheduleVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex flex-wrap gap-2 mb-8">
              {eventSchedule.map((day, index) => (
                <button
                  key={day.id}
                  onClick={() => setSelectedScheduleTab(index)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedScheduleTab === index
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {day.date}
                </button>
              ))}
            </div>
          </div>

          {/* Schedule Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {eventSchedule.map((day, dayIndex) => (
              <div
                key={day.id}
                className={`transform transition-all duration-1000 ${
                  scheduleVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${(dayIndex + 1) * 200}ms` }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {day.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {day.description}
                  </p>

                  <div className="space-y-4">
                    {day.sessions.map((session, sessionIndex) => (
                      <div
                        key={sessionIndex}
                        className="border-l-2 border-blue-500 pl-4"
                      >
                        <div className="text-sm font-semibold text-blue-600 mb-1">
                          {session.time}
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {session.title}
                        </h4>
                        <div className="text-xs text-gray-500 mb-2">
                          {session.speaker}
                        </div>
                        <p className="text-sm text-gray-600">
                          {session.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Register Now Section */}
      <section ref={registerRef} className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Section Header */}
            <div
              className={`mb-12 transform transition-all duration-1000 ${
                registerVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Register Now
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Be part of our event. Sign up to reserve your spot!
              </p>
            </div>

            {/* Registration Form */}
            <div
              className={`bg-gray-50 rounded-2xl p-8 transform transition-all duration-1000 delay-200 ${
                registerVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="max-w-md mx-auto space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                />
                <button
                  onClick={handleRegister}
                  className="w-full bg-gray-900 text-white font-semibold py-4 px-6 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                  Sign Up Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div
            className={`text-center mb-12 transform transition-all duration-1000 ${
              galleryVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event Gallery
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Take a look at our previous events and the amazing moments we've
              shared with our community.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-xl aspect-square transform transition-all duration-1000 hover:scale-105 ${
                  galleryVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HeroSection;
