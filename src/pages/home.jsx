import React from 'react';
import HomeImg from "/src/assets/homeimg.jpg"

function HomePage() {
  return (
    <>
      <header className="bg-black text-white p-4">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">Research Route</div>
          <ul className="flex space-x-4">
            <li><a href="#features" className="hover:text-purple-500">Features</a></li>
            <li><a href="#testimonials" className="hover:text-purple-500">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-purple-500">Contact</a></li>
          </ul>
        </nav>
      </header>

      <div className="relative h-[100vh] bg-black" style={{ backgroundImage: `url(${HomeImg})` }}>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Research Route</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6">Unleashing the Power of Citizen Science</p>
          <button onClick={() => window.location.href = '/projects'} className="bg-purple-800 hover:bg-purple-500 text-white font-bold py-3 px-8 rounded-full uppercase transition duration-300">
            Get Started
          </button>
        </div>
      </div>

      <section id="features" className="py-16 bg-zinc-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Classify Feature */}
            <div className="bg-purple-800 p-6 rounded-lg text-center">
              <i className="fas fa-image text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Classify Images</h3>
              <p>
                Engage with images by answering questions related to them and selecting from multiple options. 
                Test your knowledge and enhance your skills.
              </p>
            </div>

            {/* Talk Feature */}
            <div className="bg-purple-800 p-6 rounded-lg text-center">
              <i className="fas fa-comments text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Talk Section</h3>
              <p>
                Share your thoughts and findings with others. Join discussions and contribute to community insights.
              </p>
            </div>

            {/* Get Involved Feature */}
            <div className="bg-purple-800 p-6 rounded-lg text-center">
              <i className="fas fa-lightbulb text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Get Involved</h3>
              <p>
                Submit your own project ideas and get involved with ongoing research. Your contributions can make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Users Say</h2>
          <div className="flex flex-wrap">
            {/* Testimonial 1 */}
            <div className="w-full md:w-1/2 lg:w-1/3 mb-6 ">
              <blockquote className="bg-purple-800 p-6 rounded-lg">
                <p className="text-lg mb-4">"This platform is amazing! It really helps me with my research."</p>
                <cite className="block text-sm font-semibold">User Name</cite>
              </blockquote>
            </div>
            {/* Testimonial 2 */}
            <div className="w-full md:w-1/2 lg:w-1/3 mb-6 ">
              <blockquote className="bg-purple-800 p-6 rounded-lg mr-2 ml-2">
                <p className="text-lg mb-4">"A fantastic tool for collaboration and knowledge sharing. Highly recommended!"</p>
                <cite className="block text-sm font-semibold">User Name</cite>
              </blockquote>
            </div>
            {/* Testimonial 3 */}
            <div className="w-full md:w-1/2 lg:w-1/3 mb-6">
              <blockquote className="bg-purple-800 p-6 rounded-lg">
                <p className="text-lg mb-4">"I love the features and the user-friendly interface."</p>
                <cite className="block text-sm font-semibold">User Name</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-zinc-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <p className="mb-4">Feel free to reach out to us with any questions or feedback.</p>
          <p className="text-lg mb-2">Email: <a href="mailto:contact@researchroute.com" className="text-purple-400 hover:underline">contact@researchroute.com</a></p>
          <p className="text-lg mb-2">Phone: <a href="tel:+1234567890" className="text-purple-400 hover:underline">+1 (234) 567-890</a></p>
          <p className="text-lg">Address: <span className="text-purple-400">JEC Jabalpur, Madhya Pradesh, India</span></p>
        </div>
      </section>


      
    </>
  );
}

export default HomePage;
