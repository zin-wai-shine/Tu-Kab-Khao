import storyBuilding from '../images/story_building.png'
import childhoodDreamImg from '../images/childhood_dream_img.png'
import familyRecipesImg from '../images/family_recipes_img.png'

const About = () => {
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
        className="relative h-screen flex items-center justify-center overflow-hidden hero-bg-mobile"
        style={{
          backgroundColor: '#00203A',
          backgroundImage: `url(${storyBuilding})`,
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay for Text Readability */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ backgroundColor: 'rgba(0, 32, 58, 0.3)' }}
        />
        
        <div className="relative z-20 text-center px-4">
          <h2 className="text-2xl md:text-3xl font-normal mb-8" style={{ fontFamily: 'PT Sans, sans-serif', wordSpacing: '0.2em', color: '#FCFBF9' }}>
            Tu Kab Khao –
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight" style={{ fontFamily: 'PT Sans, sans-serif', wordSpacing: '0.15em', color: '#FCFBF9' }}>
            Our Story
          </h1>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Section 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6" style={{ color: '#1A3A66' }}>
                  A Childhood Dream
                </h2>
                <p className="text-base leading-relaxed mb-4 font-light" style={{ color: '#1A3A66', opacity: 0.7 }}>
                  ตู้กับข้าว (Tu Kab Khao) was born from a deep love for authentic Phuket cuisine,
                  inspired by childhood memories of family meals and traditional cooking methods.
                  Our journey began with a simple dream: to share the bold, aromatic flavors of
                  Southern Thailand with the world.
                </p>
                <p className="text-base leading-relaxed font-light" style={{ color: '#1A3A66', opacity: 0.7 }}>
                  Growing up in Phuket, we were surrounded by the rich culinary heritage of the
                  region. The vibrant markets, the sizzling woks, and the intoxicating aromas of
                  spices and herbs became the foundation of our passion for authentic local cuisine.
                </p>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={childhoodDreamImg}
                  alt="A Childhood Dream"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Section 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-2xl order-2 md:order-1">
                <img
                  src={familyRecipesImg}
                  alt="Family Recipes, Authentic Flavors"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6" style={{ color: '#1A3A66' }}>
                  Family Recipes, Authentic Flavors
                </h2>
                <p className="text-base leading-relaxed mb-4 font-light" style={{ color: '#1A3A66', opacity: 0.7 }}>
                  Every dish at ตู้กับข้าว is crafted using time-honored family recipes, passed down
                  through generations. We use only the freshest local ingredients, sourced from
                  trusted suppliers who share our commitment to quality and authenticity.
                </p>
                <p className="text-base leading-relaxed font-light" style={{ color: '#1A3A66', opacity: 0.7 }}>
                  Our chefs, trained in traditional Southern Thai cooking techniques, bring decades
                  of experience to every plate. From the slow-cooked Moo Hong to the fiery curries
                  and aromatic soups, each dish tells a story of Phuket's rich culinary history.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center" style={{ color: '#1A3A66' }}>
                The Phuket Experience
              </h2>
              <p className="text-base leading-relaxed mb-6 font-light" style={{ color: '#1A3A66', opacity: 0.7 }}>
                Located in the heart of Phuket Town, our restaurant reflects the unique
                Sino-Portuguese architecture that defines the area. The elegant interior, with its
                blend of traditional and modern elements, creates the perfect atmosphere for
                enjoying authentic local cuisine.
              </p>
              <p className="text-base leading-relaxed mb-6 font-light" style={{ color: '#1A3A66', opacity: 0.7 }}>
                We believe that great food brings people together. Whether you're a local resident
                or a visitor exploring Phuket, we invite you to experience the true taste of
                Southern Thailand. Our menu features over 100 authentic dishes, each prepared with
                care and served with genuine hospitality.
              </p>
              <p className="text-base leading-relaxed font-light" style={{ color: '#1A3A66', opacity: 0.7 }}>
                At ตู้กับข้าว, we're not just serving food—we're sharing a piece of Phuket's soul.
                Every meal is an opportunity to connect with the rich cultural heritage of this
                beautiful island, one delicious bite at a time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

