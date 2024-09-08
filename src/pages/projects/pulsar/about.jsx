import React from "react";

import ResearchNavbar from "/src/components/ResearchNavbar.jsx";
import collage from "/src/assets/pulsarcollage.jpg"

function About() {
  const about = "/projects/pulsar/about";
  const classify = "/projects/pulsar/classify";
  const discuss = "/projects/pulsar/discuss";
  const collection = "/projects/pulsar/collection";
  return (
    <>
      <ResearchNavbar
        about={about}
        classify={classify}
        discuss={discuss}
        collection={collection}
      />
      <h4 className="ml-20 mt-2 text-2xl font-bold justify-center text-white ">
        About
      </h4>
      <div className="h-fit w-[84vw] text-[#F5F5F5] flex">
        <p className="pr-[5vw]  ml-[8vw] mr-[8vw] mt-[10vh] mb-[10vh]">
          Pulsars are rapidly rotating neutron stars that emit beams of
          electromagnetic radiation at regular intervals. These cosmic beacons
          offer a unique opportunity for astronomers to study a wide range of
          astrophysical phenomena.
          <br />
          <b>What are Pulsars?</b>
          <br />
          Neutron Stars: Pulsars are the incredibly dense remnants of massive
          stars that have exploded as supernovae. Rotation and Radiation: Their
          rapid rotation and strong magnetic fields produce beams of radiation
          that sweep across the sky like a lighthouse.
          <b>Regular Pulses:</b> This periodic emission is what gives them their
          name, "pulsars."
          <br />
          <b>Why Study Pulsars?</b>
          <br />
          <b>Testing General Relativity:</b> Pulsars provide a high-precision
          laboratory for testing Einstein's theory of general relativity.
          <b>Detecting Gravitational Waves:</b> Pulsars can be used to detect
          gravitational waves, ripples in the fabric of spacetime.
          <b>Measuring Cosmic Distances:</b> Pulsars can help astronomers
          measure cosmic distances and the expansion rate of the universe.
          <b>Studying Extreme Environments:</b> Pulsars offer insights into
          extreme physical conditions that cannot be replicated on Earth.
          <br />
          <b>Research Areas in Pulsar Astronomy</b>
          <br />
          <b>Millisecond Pulsars:</b> These extremely rapidly rotating pulsars
          are used to study gravitational waves and the properties of neutron
          stars.
          <b>Binary Pulsars:</b> Pulsars in binary systems provide valuable
          information about the evolution of stars and the effects of strong
          gravitational fields.
          <b>Pulsar Timing Arrays:</b> Networks of pulsars can be used to detect
          low-frequency gravitational waves from massive black holes.
          <b>Pulsar Wind Nebulae:</b> The high-energy particles emitted by
          pulsars can create nebulae that are studied to understand particle
          acceleration and cosmic ray production. By studying pulsars,
          researchers can gain a deeper understanding of the universe's
          fundamental laws and the objects that inhabit it.
          <br />
          <br />
          <iframe
            className="pl-10"
            width="600"
            height="400"
            src="https://www.youtube.com/embed/z2L7aNkL01o?si=IioQCzX1KxoQzoEz"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <br />
          <br />
          <h3 className="text-xl font-bold">Who discovered pulsars?</h3>
          <br />
          <p>
            Following the discovery of neutrons in 1932 by English physicist
            James Chadwick, the concept of a neutron star was first predicted in
            1934 by Lev Landau in the Soviet Union and separately by Walter
            Baade and Fritz Zwicky in the U.S. during the same year.
            <br />
            <br />
            Five years later in 1939, Robert Oppenheimer and George Volkoff would develop a
            theoretical model for neutron stars, but it would take a further
            three decades for the first neutron star, in the form of a pulsar to
            be discovered. 
            <br />
            <br />
            In 1967 radio astronomers in Cambridge were involved
            in the search for quasars and had developed an instrument capable of
            detecting rapid and random changes in the intensity of radio waves
            that saved such signals for later analysis.
            <br />
            <br />
            Examining this data a then 24-year-old graduate student at New hall, conducting research
            at Cambridge's Cavendish Laboratory, Jocelyn Bell under the
            supervision of Antony Hewish, discovered mysterious highly regular
            signals very different from the random signals expected from quasars
            affected by solar winds. 
            <br />
            <br />
            The signals were so regular that when they
            were first discovered they were attributed to human activity. When
            it was deduced that these highly regular signals must originate from
            the universe, the suggestion was made that they could be the result
            of intelligent extraterrestrial life.
            <br />
            <br />
            This led to the source of these pulses earning the tongue-in-cheek name 'LGM1' or 'Little
            Green Man 1.' Of course, Bell and Hewish went on to discover the
            actual source of the emission was a pulsar with a period of 1.3373
            seconds. This pulsar now has the slightly less sensational name of
            PSR B1919+21. 
            <br />
            <br />
            The University of Cambridge says that as of today over
            3,000 pulsars have been discovered and while these were initially
            found in radio waves, we have since discovered these cosmic
            lighthouses in X-ray, gamma-ray, and even visible light.
            <br />
            <br />
            <img src={collage} alt="pulsars" />
          </p>
        </p>

        <div className="absolute text-gray-400 font-semibold right-1 h-[80vh] w-[20vw]">
          <h3 className="ml-12">Some External Resources</h3>
          <p className="pl-16">
            <br />
            <br />
            <a href="https://en.wikipedia.org/wiki/Pulsar">Wikipedia-Pulsar</a>
            <br />
            <br />
            <a href="https://www.encyclopedia.com/science-and-technology/astronomy-and-space-exploration/astronomy-general/pulsar">
              Encyclopedia-Pulsar
            </a>
            <br />
            <br />
            <a href="https://www.britannica.com/science/pulsar">Britannica</a>
            <br />
            <br />
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
