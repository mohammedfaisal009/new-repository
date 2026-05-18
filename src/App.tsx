import { useState, useEffect, useRef } from 'react';
import {
  Menu, X, Star, Phone, MapPin, Clock, ChevronDown,
  Instagram, Facebook, Twitter, Heart, Sparkles, Leaf, Award, Users
} from 'lucide-react';

const NAV_LINKS = ['Home', 'About us', 'Menu', 'Gallery', 'Reviews', 'Contact'];

const MENU_ITEMS = [
  {
    name: 'Pani Puri',
    desc: 'Crispy hollow puris filled with spiced potato-chickpea mix, dunked in tangy tamarind and minty green water. Our signature classic.',
    price: '₹30 / plate',
    tag: 'Best Seller',
    img:'https://i.ibb.co/tpqQkJnZ/pani-puri-1756289838200.webp?auto=compress&cs=tinysrgb&w=600',
    color: 'from-orange-400 to-amber-500',
  },
  {
    name: 'Masala Puri',
    desc: 'Crunchy puris topped with spiced mashed peas, fresh tomatoes, onions, and a drizzle of tangy chutneys. A crowd favourite.',
    price: '₹40 / plate',
    tag: 'Popular',
    img:'https://i.ibb.co/MxpMbZjx/maxresdefault-1.jpg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-amber-500 to-yellow-500',
  },
  {
    name: 'Bhel Puri',
    desc: 'A delightful mix of puffed rice, sev, diced vegetables, crunchy papdi, and our house-special sweet-tangy chutney. Light and irresistible.',
    price: '₹35 / plate',
    tag: 'Crispy',
    img:'https://i.ibb.co/V02VTMPn/Bhel-Puri-Recipe-Step-By-Step-Instructions.jpg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-yellow-500 to-orange-400',
  },
  {
    name: 'dhai puri',
    desc: 'Our special twist — mini puris paired with perfectly brewed masala chai. The ultimate Indian street-food experience in one combo.',
    price: '₹50 / combo',
    tag: 'New',
    img:'https://i.ibb.co/Xk5x6hh1/pexels-abeesh-akhilesh-370091684-32894826.jpg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-orange-500 to-red-400',
  },
  {
    name: 'Gobi Manchurian',
    desc: 'Crispy cauliflower florets tossed in a bold Indo-Chinese sauce with spring onions, garlic, and chillies. Perfectly spiced every time.',
    price: '₹40 / plate',
    tag: 'Spicy',
    img:'https://i.ibb.co/67BLHwqh/gobi-manchurian-cauliflower-manchurian.jpg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-red-500 to-orange-500',
  },
];

const GALLERY_IMAGES = [
  { src: 'https://i.ibb.co/tpqQkJnZ/pani-puri-1756289838200.webp?auto=compress&cs=tinysrgb&w=800', alt: 'Pani Puri' },
  { src: 'https://i.ibb.co/67BLHwqh/gobi-manchurian-cauliflower-manchurian.jpg?auto=compress&cs=tinysrgb&w=800', alt: 'Manchurian' },
  { src: 'https://i.ibb.co/Xk5x6hh1/pexels-abeesh-akhilesh-370091684-32894826.jpg?auto=compress&cs=tinysrgb&w=800', alt: 'dahi puri' },
  { src: 'https://i.ibb.co/V02VTMPn/Bhel-Puri-Recipe-Step-By-Step-Instructions.jpg?auto=compress&cs=tinysrgb&w=800', alt: 'Bhel Puri' },
  { src: 'https://i.ibb.co/MxpMbZjx/maxresdefault-1.jpg?auto=compress&cs=tinysrgb&w=800', alt: 'Masala Puri' }
];

const REVIEWS = [
  {
    name: 'Priya Sharma',
    location: 'Regular Customer',
    rating: 5,
    text: "The pani puri here is absolutely divine! The water has the perfect balance of spicy and tangy. I've been coming here for 5 years and the quality never drops. Hygiene is top-notch too!",
    avatar: 'PS',
  },
  {
    name: 'Rahul Menon',
    location: 'Food Blogger',
    rating: 5,
    text: "Stumbled upon this gem while exploring the area. The Gobi Manchurian is hands down the best I've had — crispy, flavourful, and the portion size is very generous for the price. Highly recommend!",
    avatar: 'RM',
  },
  {
    name: 'Ananya Krishnan',
    location: 'Local Resident',
    rating: 5,
    text: "As someone who is very particular about hygiene, I was impressed. The stall is spotlessly clean, ingredients are fresh, and the staff is very friendly. My kids love their Bhel Puri!",
    avatar: 'AK',
  },
  {
    name: 'Suresh Babu',
    location: 'Office Worker Nearby',
    rating: 5,
    text: "Affordable, tasty, and hygienic — three things that are hard to find together at a street food stall. The Masala Puri is my daily evening snack. Truly a local treasure!",
    avatar: 'SB',
  },
  {
    name: 'Meena Iyer',
    location: 'Frequent Visitor',
    rating: 5,
    text: "Brought my family here for the first time last week and everyone loved it. The owner is very welcoming and makes sure every customer is happy. The chai-puri combo is a must-try!",
    avatar: 'MI',
  },
  {
    name: 'Karthik Raj',
    location: 'College Student',
    rating: 5,
    text: "Best value-for-money street food around! The pani puri is loaded and the masala is always fresh. My friends and I visit at least twice a week. Never disappointed!",
    avatar: 'KR',
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
      ))}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = NAV_LINKS.map(n => n.toLowerCase());
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const about = useInView();
  const menuSec = useInView();
  const gallery = useInView();
  const reviews = useInView();
  const contact = useInView();

  const anim = (visible: boolean) =>
    `transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  return (
    <div className="overflow-x-hidden" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button onClick={() => scrollTo('home')} className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className={`font-bold text-sm leading-tight transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>AA Pani Puri</div>
                <div className={`text-xs transition-colors ${scrolled ? 'text-orange-500' : 'text-orange-300'}`}>& Honi Manchurian</div>
              </div>
            </button>

            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map(link => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeSection === link.toLowerCase()
                      ? 'bg-orange-500 text-white shadow-md'
                      : scrolled
                        ? 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link}
                </button>
              ))}
            </div>

            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white border-t border-orange-100 px-4 py-3 space-y-1">
            {NAV_LINKS.map(link => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.toLowerCase() ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                }`}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Street Food Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-900/65 to-orange-950/75" />
        </div>

        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Leaf className="w-3.5 h-3.5" />
            Fresh Ingredients · 8 Years of Love
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Fresh Flavours.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Hygienic Taste.
            </span>{' '}
            Happy Customers.
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Serving delicious pani puri and street-food favourites with quality, cleanliness, and customer satisfaction for the past 8+ years.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo('menu')}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full shadow-xl hover:scale-105 transition-all duration-300 text-base"
              style={{ boxShadow: '0 8px 30px rgba(249,115,22,0.4)' }}
            >
              View Menu
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300 text-base"
            >
              Contact Us
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-10 mt-16">
            {[
              { icon: Award, value: '8+', label: 'Years Experience' },
              { icon: Users, value: '10K+', label: 'Happy Customers' },
              { icon: Heart, value: '5★', label: 'Customer Rating' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Icon className="w-4 h-4 text-orange-400" />
                  <span className="text-white font-bold text-2xl">{value}</span>
                </div>
                <p className="text-gray-400 text-xs">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => scrollTo('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div ref={about.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 ${anim(about.visible)}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our Shop"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-gradient-to-br from-orange-500 to-amber-400 rounded-3xl shadow-xl flex flex-col items-center justify-center text-white">
                <span className="text-4xl font-extrabold" style={{ fontFamily: "'Playfair Display', serif" }}>8</span>
                <span className="text-xs font-medium opacity-90">Years of</span>
                <span className="text-xs font-semibold">Excellence</span>
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-orange-100 rounded-2xl border-4 border-white shadow-lg flex items-center justify-center">
                <Leaf className="w-8 h-8 text-orange-500" />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <span className="inline-block text-orange-500 font-semibold text-sm tracking-widest uppercase mb-3">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                A Local Favourite for 8 Years of{' '}
                <span className="text-orange-500">Pure Flavour</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                What started as a small passion project has grown into one of the most loved street food destinations in the neighbourhood. At <strong className="text-gray-800">AA Pani Puri & Gobi Manchurian</strong>, we believe that great street food begins with fresh ingredients, clean hands, and an honest heart.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Every batch of pani puri water is freshly made daily using hand-picked herbs, filtered water, and traditional recipes passed down through generations. Our Gobi Manchurian is tossed fresh to order — no pre-made batches, no shortcuts, no compromises.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Hygiene isn't just a practice here — it's our identity. Over 8 years, thousands of happy customers have made us the go-to local spot for authentic, flavourful, and clean street food. We take pride in every plate we serve.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Leaf, title: 'Fresh Ingredients', desc: 'Daily sourced, hand-picked produce' },
                  { icon: Sparkles, title: '100% Hygienic', desc: 'Clean prep, filtered water' },
                  { icon: Heart, title: 'Customer First', desc: 'Your satisfaction is our reward' },
                  { icon: Award, title: '8 Years Strong', desc: 'Trusted neighbourhood favourite' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3 p-4 bg-orange-50 rounded-2xl">
                    <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{title}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #fff7ed 0%, #fffbeb 50%, #fff7ed 100%)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div ref={menuSec.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 relative z-10 ${anim(menuSec.visible)}`}>
          <div className="text-center mb-14">
            <span className="inline-block text-orange-500 font-semibold text-sm tracking-widest uppercase mb-3">Our Specialities</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Menu That <span className="text-orange-500">Delights</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Each dish is crafted with care using the freshest ingredients. No preservatives. No artificial flavouring. Just pure, honest taste.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MENU_ITEMS.map((item) => (
              <div
                key={item.name}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-25 group-hover:opacity-15 transition-opacity`} />
                  <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {item.tag}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>{item.name}</h3>
                    <span className="text-orange-500 font-bold text-sm shrink-0 ml-2 mt-1">{item.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  <div className="mt-4 flex items-center gap-1">
                    <StarRating count={5} />
                    <span className="text-xs text-gray-400 ml-1">5.0</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mt-10">
            * Prices may vary. Please contact us for the latest pricing and seasonal specials.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 md:py-28 bg-white">
        <div ref={gallery.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 ${anim(gallery.visible)}`}>
          <div className="text-center mb-14">
            <span className="inline-block text-orange-500 font-semibold text-sm tracking-widest uppercase mb-3">Visual Feast</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Food That <span className="text-orange-500">Looks as Good as It Tastes</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              A glimpse into our world of flavour, freshness, and irresistible street food.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px]">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  i === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.alt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #431407 100%)' }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #f97316 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />

        <div ref={reviews.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 relative z-10 ${anim(reviews.visible)}`}>
          <div className="text-center mb-14">
            <span className="inline-block text-orange-400 font-semibold text-sm tracking-widest uppercase mb-3">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              What Our <span className="text-orange-400">Customers Say</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Real words from real food lovers. Our community speaks for itself.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div
                key={review.name}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{review.name}</p>
                    <p className="text-gray-400 text-xs">{review.location}</p>
                  </div>
                </div>
                <StarRating count={review.rating} />
                <p className="text-gray-300 text-sm leading-relaxed mt-3">"{review.text}"</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-12 mt-12 flex-wrap">
            {[
              { value: '4.9/5', label: 'Average Rating' },
              { value: '500+', label: 'Reviews' },
              { value: '100%', label: 'Recommend Us' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <p className="text-orange-400 font-bold text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>{stat.value}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-28 bg-white">
        <div ref={contact.ref} className={`max-w-5xl mx-auto px-4 sm:px-6 ${anim(contact.visible)}`}>
          <div className="text-center mb-14">
            <span className="inline-block text-orange-500 font-semibold text-sm tracking-widest uppercase mb-3">Get In Touch</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Visit Us <span className="text-orange-500">Today</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We'd love to serve you! Come find us or give us a call for any enquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-orange-50 rounded-2xl border border-orange-100">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Phone Number</p>
                  <p className="text-gray-600 text-sm mb-3">+91 6369817232</p>
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href="tel:6369817232"
                      className="inline-flex items-center gap-2 bg-orange-500 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-orange-600 transition-colors"
                      style={{ boxShadow: '0 4px 14px rgba(249,115,22,0.3)' }}
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/916369817232"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-green-600 transition-colors"
                      style={{ boxShadow: '0 4px 14px rgba(34,197,94,0.3)' }}
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-orange-50 rounded-2xl border border-orange-100">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Location</p>
                  <p className="text-gray-600 text-sm">Local Street Food Hub</p>
                  <p className="text-gray-500 text-xs mt-1">Ask us for exact location via WhatsApp!</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-orange-50 rounded-2xl border border-orange-100">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Opening Hours</p>
                  <div className="space-y-1 text-sm">
                    {[
                      { day: 'Monday – Friday', time: '4:00 PM – 10:00 PM' },
                      { day: 'Saturday', time: '3:00 PM – 10:30 PM' },
                      { day: 'Sunday', time: '3:00 PM – 11:00 PM' },
                    ].map(h => (
                      <div key={h.day} className="flex justify-between gap-4">
                        <span className="text-gray-600">{h.day}</span>
                        <span className="text-orange-600 font-medium whitespace-nowrap">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex-1 bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl min-h-56 relative overflow-hidden flex items-center justify-center border border-orange-200">
                <div className="text-center p-8 relative z-10">
                  <MapPin className="w-12 h-12 text-orange-400 mx-auto mb-3" />
                  <p className="text-orange-700 font-semibold">We're Near You!</p>
                  <p className="text-orange-500 text-sm mt-1">Contact us on WhatsApp for directions</p>
                  <a
                    href="https://wa.me/916369817232?text=Hi!%20Can%20you%20share%20your%20location?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-orange-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-orange-600 transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-orange-400/20 rounded-full" />
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-amber-400/20 rounded-full" />
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Place a Bulk Order?</h3>
                <p className="text-orange-100 text-sm mb-4">Planning a party or event? We cater to bulk orders with prior notice. Call or WhatsApp us!</p>
                <a
                  href="https://wa.me/916369817232?text=Hi!%20I%20want%20to%20place%20a%20bulk%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-orange-50 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 pt-14 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="sm:col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">AA Pani Puri</div>
                  <div className="text-orange-400 text-xs">& Honi Manchurian</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                Fresh flavours, hygienic taste, and happy customers for over 8 years. Your trusted local street food destination.
              </p>
              <div className="flex gap-3">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <div key={i} className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-xl flex items-center justify-center cursor-pointer transition-colors group">
                    <Icon className="w-4 h-4 group-hover:text-white transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Quick Links</h4>
              <ul className="space-y-2">
                {NAV_LINKS.map(link => (
                  <li key={link}>
                    <button onClick={() => scrollTo(link)} className="text-sm hover:text-orange-400 transition-colors">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Our Menu</h4>
              <ul className="space-y-2 text-sm">
                {MENU_ITEMS.map(item => (
                  <li key={item.name} className="hover:text-orange-400 cursor-default transition-colors">{item.name}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Contact</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                  <a href="tel:6369817232" className="hover:text-orange-400 transition-colors">+91 6369817232</a>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span>Mon–Fri: 5PM–9.30PM<br />Sat–Sun: 5PM–10PM</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span>near madarsa-e-niswan<br />(Ask via WhatsApp)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p>© 2024 AA Pani Puri & Gobi Manchurian. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-orange-500 fill-orange-500 mx-1" /> for street food lovers
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
