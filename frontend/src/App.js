import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronDown,
  Play
} from "lucide-react";

// Header Component
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed w-full top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-purple-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-bold text-white">
              <span className="hidden sm:inline">Local </span>
              <span className="text-purple-400">WebSight</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-purple-400 transition-colors duration-300 font-medium">Home</a>
            <a href="#about" className="text-white hover:text-purple-400 transition-colors duration-300 font-medium">About</a>
            <a href="#blog" className="text-white hover:text-purple-400 transition-colors duration-300 font-medium">Blogs</a>
            <div className="relative group">
              <button className="text-white hover:text-purple-400 transition-colors duration-300 font-medium flex items-center">
                Services <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="relative group">
              <button className="text-white hover:text-purple-400 transition-colors duration-300 font-medium flex items-center">
                Works <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </div>
            <a href="#contact" className="text-white hover:text-purple-400 transition-colors duration-300 font-medium">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>

          {/* Desktop Social Media */}
          <div className="hidden sm:flex space-x-3">
            <a href="#" className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors duration-300">
              <Facebook className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors duration-300">
              <Instagram className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors duration-300">
              <Linkedin className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-gray-800 border-t border-purple-500/20 py-4"
          >
            <nav className="flex flex-col space-y-4 px-4">
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-purple-400 transition-colors duration-300 font-medium">Home</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-purple-400 transition-colors duration-300 font-medium">About</a>
              <a href="#blog" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-purple-400 transition-colors duration-300 font-medium">Blogs</a>
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-purple-400 transition-colors duration-300 font-medium">Services</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-purple-400 transition-colors duration-300 font-medium">Contact</a>
              
              {/* Mobile Social Media */}
              <div className="flex space-x-3 pt-4 border-t border-purple-500/20">
                <a href="#" className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors duration-300">
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors duration-300">
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors duration-300">
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            "Struggling to get noticed online?{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Let Local WebSight help you show up, stand out, and get found
            </span>
            —without lifting a finger."
          </h1>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4"
          >
            Effortless growth, so you can focus on what you do best.
          </motion.p>
          
          <motion.button
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-purple-500 text-purple-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            Start Ranking Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1547907352-3786273770e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMHdvbWFufGVufDB8fHxwdXJwbGV8MTc1Mjk0NDk1Nnww&ixlib=rb-4.1.0&q=85" 
                alt="Grey - Virtual Assistant" 
                className="w-full h-72 sm:h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Who's Behind the Keyboard?
            </h2>
            
            <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Hey, I'm Grey — the virtual assistant behind Local WebSight. I help busy 
              entrepreneurs and brands look sharper and rank smarter online through 
              Shopify product listings with on-page SEO, website optimization, blog 
              writing, and GMB Set up and revamp.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-purple-500 text-purple-400 px-5 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              Know More →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const services = [
    {
      category: "Shopify Optimization",
      items: [
        "Writing optimized product titles and descriptions",
        "Adding high-quality images and alt text",
        "Organizing products into appropriate collections",
        "Updating prices, inventory, and product variants",
        "Ensuring consistent formatting and brand voice",
        "Performing competitor product listing analysis",
        "Tagging products for easier navigation and filtering",
        "Basic product SEO (meta titles/descriptions)"
      ]
    },
    {
      category: "SEO & Content",
      items: [
        "Improving page speed (compressing images, reducing load times)",
        "Reviewing and fixing broken links",
        "Ensuring mobile responsiveness",
        "Adding/updating alt texts and headings",
        "Basic UI/UX adjustments",
        "Conducting website audits using free tools",
        "Submitting pages to Google Search Console",
        "Monitoring key metrics (bounce rate, clicks, impressions)"
      ]
    },
    {
      category: "Blog Management",
      items: [
        "Writing original, well-structured blog posts",
        "Optimizing blog content for target keywords",
        "Crafting compelling titles and meta descriptions",
        "Using headers (H1, H2, H3) for structure and readability",
        "Inserting internal and external links",
        "Sourcing royalty-free images and adding alt text",
        "Formatting posts for readability and mobile-friendliness",
        "Uploading content to WordPress or other CMS platforms"
      ]
    },
    {
      category: "Google My Business",
      items: [
        "Setting up or claiming Google My Business profiles",
        "Optimizing business info (name, address, hours, etc.)",
        "Writing keyword-rich business descriptions",
        "Uploading high-quality logo, cover photo, and service images",
        "Adding service areas, categories, and business attributes",
        "Posting weekly GMB updates (offers, news, blogs)",
        "Managing and responding to customer reviews",
        "Ensuring NAP consistency across directories",
        "Monitoring profile insights and performance"
      ]
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-purple-400 mb-4 sm:mb-6">{service.category}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-gray-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John",
      company: "Upside Venture LLC DBA Favorites",
      testimonial: "Sounds good! I watched one of the shortened videos, looks good to me. Great work so far!"
    },
    {
      name: "Nina",
      company: "Model",
      testimonial: "You have no idea seriously you're going to be helping me a lot, so I really appreciate it!"
    },
    {
      name: "Ronit",
      company: "My Backyard Zone",
      testimonial: "I like your work on the key features and the way you explain every feature as requested!"
    },
    {
      name: "Eric",
      company: "Medicare Direct",
      testimonial: "Awesome!!! Great job Eric, We did and are excited to have you on a team."
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-500/30 rounded-xl p-4 sm:p-6 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="mb-4">
                <div className="text-3xl sm:text-4xl text-purple-400 font-bold">"</div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {testimonial.testimonial}
                </p>
                <div className="text-3xl sm:text-4xl text-purple-400 font-bold text-right">"</div>
              </div>
              
              <div className="text-center">
                <h4 className="text-white font-bold text-base sm:text-lg">{testimonial.name}</h4>
                <p className="text-purple-400 text-xs sm:text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-bold">
                Local <span className="text-purple-400">WebSight</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Behind every click and keyword is Local WebSight — your partner in effortless online growth.
            </p>
            <div className="flex justify-center md:justify-start space-x-3">
              <a href="#" className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors duration-300">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors duration-300">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors duration-300">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left">
            <h3 className="text-base sm:text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base">About</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base">Blog</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base">Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-base sm:text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-xs sm:text-sm break-all">localwebsightbygrey@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+63921-892-6175</span>
              </div>
              <div className="flex items-start justify-center md:justify-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-xs sm:text-sm">Tuy, Batangas, Philippines, 4214</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">All Rights Reserved ©2022 | LocalWebSight</p>
        </div>
      </div>
    </footer>
  );
};

// Main Home Component
const Home = () => {
  return (
    <div className="bg-black">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

// Main App Component
function App() {
  return (
    <div className="App min-h-screen bg-black overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;