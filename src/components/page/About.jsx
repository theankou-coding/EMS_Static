import React from "react";
import aboutPageData from "../../data/aboutpagedata";
import Navbar from "../Navbar";
import Footer from "../Footer";

const AboutUs = () => {
  const { hero, story, values, team, journey, awards, partners, cta } =
    aboutPageData;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#081c33] via-[#0e2a4c] to-[#15355b] text-gray-200 relative overflow-hidden">
      <Navbar />

      <main className="flex-grow py-24 px-6 lg:px-16 relative z-10">
        {/* Optional subtle overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40 bg-gradient-to-br from-[#081c33] via-[#0e2a4c] to-[#15355b] -z-10"
          style={{ filter: "blur(60px)" }}
        ></div>

        {/* Hero Section */}
        <section className="relative rounded-3xl shadow-lg bg-white bg-opacity-10 p-16 mb-20 text-center max-w-4xl mx-auto backdrop-blur-sm">
          <h1 className="text-5xl font-extrabold drop-shadow-lg mb-4 text-white">
            {hero.title}
          </h1>
          <p className="text-xl max-w-3xl mx-auto font-semibold text-blue-300">
            {hero.subtitle}
          </p>
          <hr className="my-8 border-blue-700 max-w-xl mx-auto" />
        </section>

        {/* Story Section */}
        <section className="max-w-6xl mx-auto mb-24 flex flex-col lg:flex-row items-center gap-14">
          {/* Text Content */}
          <div className="flex-1 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-10 shadow-md text-gray-200">
            <h2 className="text-4xl font-bold mb-6">{story.title}</h2>
            {story.paragraphs.map((para, idx) => (
              <p key={idx} className="mb-6 leading-relaxed text-lg">
                {para}
              </p>
            ))}
            {story.facts && (
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
                {story.facts.map(({ label, value }) => (
                  <div
                    key={label}
                    className="bg-blue-900 bg-opacity-40 rounded-xl p-6 shadow-md"
                  >
                    <p className="text-3xl font-extrabold text-blue-400">
                      {value}
                    </p>
                    <p className="mt-2 text-blue-300 font-semibold">{label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Image */}
          <div className="flex-1 rounded-3xl overflow-hidden shadow-lg border border-blue-700 max-w-lg">
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Core Values */}
        <section className="max-w-6xl mx-auto mb-24 text-gray-200">
          <h2 className="text-4xl font-bold text-center text-blue-400 mb-10">
            {values.title}
          </h2>
          {values.subtitle && (
            <p className="text-center text-blue-300 max-w-3xl mx-auto mb-12">
              {values.subtitle}
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {values.items.map(({ id, title, description, icon }) => (
              <div
                key={id}
                className="bg-white bg-opacity-10 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-default"
              >
                <div className="text-4xl text-blue-500 mb-4">
                  <span>{icon}</span>
                </div>
                <h3 className="font-semibold text-xl mb-2 text-blue-400">
                  {title}
                </h3>
                <p className="text-blue-300">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-7xl mx-auto mb-24 text-gray-200">
          <h2 className="text-4xl font-bold text-center text-blue-400 mb-6">
            {team.title}
          </h2>
          {team.subtitle && (
            <p className="text-center mb-10 max-w-4xl mx-auto text-blue-300">
              {team.subtitle}
            </p>
          )}
          {team.description && (
            <p className="text-center mb-12 max-w-5xl mx-auto text-blue-200 text-lg">
              {team.description}
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
            {team.members.map(({ id, name, role, bio, image, socialLinks }) => (
              <div
                key={id}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
              >
                <img
                  src={image}
                  alt={name}
                  className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-blue-700"
                />
                <h3 className="text-xl font-semibold text-blue-300">{name}</h3>
                <p className="mb-2 font-medium text-blue-400">{role}</p>
                {bio && <p className="text-blue-300 text-sm mb-4">{bio}</p>}
                <div className="flex space-x-5 text-blue-400 text-2xl">
                  {socialLinks?.linkedin && (
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${name} LinkedIn`}
                      className="hover:text-blue-200 transition"
                    >
                      🔗
                    </a>
                  )}
                  {socialLinks?.twitter && (
                    <a
                      href={socialLinks.twitter}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${name} Twitter`}
                      className="hover:text-blue-200 transition"
                    >
                      🐦
                    </a>
                  )}
                  {socialLinks?.github && (
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${name} GitHub`}
                      className="hover:text-blue-200 transition"
                    >
                      💻
                    </a>
                  )}
                  {socialLinks?.dribbble && (
                    <a
                      href={socialLinks.dribbble}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${name} Dribbble`}
                      className="hover:text-blue-200 transition"
                    >
                      🎨
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Journey Section */}
        <section className="max-w-7xl mx-auto mb-24 text-gray-200">
          <h2 className="text-4xl font-bold text-center text-blue-400 mb-6">
            {journey.title}
          </h2>
          {journey.subtitle && (
            <p className="text-center text-blue-300 max-w-4xl mx-auto mb-14 text-lg">
              {journey.subtitle}
            </p>
          )}
          {journey.description && (
            <p className="text-center text-blue-200 max-w-5xl mx-auto mb-20 text-lg">
              {journey.description}
            </p>
          )}
          <ol className="border-l-4 border-blue-700 max-w-5xl mx-auto space-y-14">
            {journey.milestones.map(
              ({ id, year, month, title, description, achievement }) => (
                <li key={id} className="pl-10 relative">
                  <span className="absolute -left-6 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-semibold text-sm shadow-md">
                    {month ? month.slice(0, 2) : year.slice(0, 2)}
                  </span>
                  <time className="text-sm font-semibold text-blue-400">
                    {month ? `${month} ${year}` : year}
                  </time>
                  <h3 className="text-2xl font-semibold mt-2 text-blue-300">
                    {title}
                  </h3>
                  <p className="text-blue-200 mt-2">{description}</p>
                  {achievement && (
                    <p className="text-blue-400 mt-2 font-semibold italic">
                      Achievement: {achievement}
                    </p>
                  )}
                </li>
              )
            )}
          </ol>
        </section>

        {/* Awards Section */}
        {awards && awards.items.length > 0 && (
          <section className="max-w-7xl mx-auto mb-28 text-gray-200">
            <h2 className="text-4xl font-bold text-center text-blue-400 mb-6">
              {awards.title}
            </h2>
            {awards.subtitle && (
              <p className="text-center text-blue-300 max-w-4xl mx-auto mb-12">
                {awards.subtitle}
              </p>
            )}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {awards.items.map(
                ({ id, year, title, organization, description }) => (
                  <li
                    key={id}
                    className="bg-white bg-opacity-10 rounded-xl shadow p-8"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-blue-200 font-semibold text-xl">
                        {title}
                      </h3>
                      <time className="text-blue-400 font-semibold">
                        {year}
                      </time>
                    </div>
                    <p className="text-blue-400 font-medium mb-4">
                      {organization}
                    </p>
                    {description && (
                      <p className="text-blue-300 leading-relaxed">
                        {description}
                      </p>
                    )}
                  </li>
                )
              )}
            </ul>
          </section>
        )}

        {/* Partners Section */}
        {partners && partners.items.length > 0 && (
          <section className="max-w-7xl mx-auto mb-32 text-gray-200">
            <h2 className="text-4xl font-bold text-center text-blue-400 mb-6">
              {partners.title}
            </h2>
            {partners.subtitle && (
              <p className="text-center text-blue-300 max-w-4xl mx-auto mb-12">
                {partners.subtitle}
              </p>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-6xl mx-auto items-center">
              {partners.items.map(({ id, name, logo, website }) => (
                <a
                  key={id}
                  href={website || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex justify-center items-center p-6 bg-white bg-opacity-10 rounded-xl shadow hover:shadow-lg transition"
                >
                  <img
                    src={logo}
                    alt={name}
                    className="max-h-14 object-contain"
                  />
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Call To Action */}
        <section className="max-w-4xl mx-auto text-center px-8 py-20 bg-blue-900 bg-opacity-70 rounded-3xl shadow-lg text-white">
          <h2 className="text-4xl font-extrabold mb-6">{cta.title}</h2>
          <p className="max-w-3xl mx-auto mb-12 text-lg">{cta.subtitle}</p>
          <a
            href={cta.buttonLink}
            className="bg-blue-300 hover:bg-blue-400 font-semibold px-10 py-4 rounded-xl shadow-lg inline-block transition"
          >
            {cta.buttonText}
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
