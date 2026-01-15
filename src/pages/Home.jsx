import building from '../images/building.png'
import losterHome from '../images/loster_home.png'

const Home = () => {
  return (
    <div>
      <style>{`
        .hero-bg-mobile {
          background-position: center bottom;
          background-size: cover;
          background-attachment: scroll;
        }
        @media (min-width: 768px) {
          .hero-bg-mobile {
            background-position: center;
            background-size: cover;
            background-attachment: fixed;
          }
        }
      `}</style>
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center overflow-hidden hero-bg-mobile"
        style={{
          backgroundColor: '#00203A',
          backgroundImage: `url(${building})`,
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay for Text Readability */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ backgroundColor: 'rgba(0, 32, 58, 0.3)' }}
        />
        
        <div className="w-full h-full flex relative z-20">
          {/* Text Content - Left */}
          <div className="flex-1 flex items-center pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="text-left w-full">
                <h2 className="text-2xl md:text-3xl font-normal mb-8" style={{ fontFamily: 'PT Sans, sans-serif', wordSpacing: '0.2em', color: '#FCFBF9' }}>
                  Tu Kab Khao –
                </h2>
                <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight" style={{ fontFamily: 'PT Sans, sans-serif', wordSpacing: '0.15em', color: '#FCFBF9' }}>
                  Authentic Phuket &<br />
                  Southern Thai Cuisine
          </h1>
                
                <p className="text-lg md:text-xl leading-relaxed max-w-2xl" style={{ fontFamily: 'PT Sans, sans-serif', wordSpacing: '0.15em', color: '#FCFBF9' }}>
                  Experience bold, traditional flavors of Phuket and Southern Thailand in an elegant Sino-Portuguese setting, right in the heart of Phuket Town.
                </p>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Teaser */}
      <section className="py-20" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image - Left */}
            <div className="flex-shrink-0">
              <img 
                src={losterHome} 
                alt="Our Story" 
                className="w-full max-w-xs mx-auto"
              />
            </div>
            
            {/* Text - Right */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8" style={{ color: '#1A3A66' }}>
                Our Story
              </h2>
              <p className="text-base md:text-lg mb-8 leading-relaxed font-light" style={{ color: '#1A3A66', opacity: 0.7 }}>
                Born from childhood memories of authentic Phuket flavors, ตู้กับข้าว (Tu Kab Khao) brings
                you the bold, aromatic dishes of Southern Thailand. Our family recipes, passed down
                through generations, celebrate the rich culinary heritage of Phuket with every bite.
                Experience the true taste of local cuisine in the heart of Phuket Town.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home

