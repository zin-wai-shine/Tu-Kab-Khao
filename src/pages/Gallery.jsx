const Gallery = () => {
  const images = [
    {
      url: 'https://content.phuket101.net/wp-content/uploads/20250705203839/Kanta-Restaurant-Phuket-Town-5.jpg',
      title: 'Restaurant Interior',
      category: 'interior',
    },
    {
      url: 'https://pizzagrillphuket.com/wp-content/uploads/2025/07/THAFH-67-min.jpg',
      title: 'Signature Dish',
      category: 'food',
    },
    {
      url: 'https://apac-marketing.webbeds.com/wp-content/uploads/2022/09/lobby-1.jpg',
      title: 'Elegant Dining Space',
      category: 'interior',
    },
    {
      url: 'https://www.thavornbeachvillage.com/upload/blog-files/1695379553.734.jpg',
      title: 'Fresh Seafood',
      category: 'food',
    },
    {
      url: 'https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/51/2025/04/09090110/Best-Southern-Thai-Food-in-Phuket.jpg',
      title: 'Traditional Curry',
      category: 'food',
    },
    {
      url: 'https://dwp.com/wp-content/uploads/2025/04/Terra-Phuket-Italian-Restaurant-6-scaled.jpg',
      title: 'Modern Ambiance',
      category: 'interior',
    },
    {
      url: 'https://www.mondomulia.com/wp-content/uploads/2021/01/Thai-Food-Cooking-Class-Amari-Phuket-scaled.jpg',
      title: 'Authentic Flavors',
      category: 'food',
    },
    {
      url: 'https://threemonkeysphuket.com/wp-content/uploads/2025/02/Eat-and-Experience-like-a-true-Local.jpg',
      title: 'Local Cuisine',
      category: 'food',
    },
    {
      url: 'https://content.phuket101.net/wp-content/uploads/20250705203839/Kanta-Restaurant-Phuket-Town-5.jpg',
      title: 'Sino-Portuguese Architecture',
      category: 'interior',
    },
    {
      url: 'https://pizzagrillphuket.com/wp-content/uploads/2025/07/THAFH-67-min.jpg',
      title: 'Chef Special',
      category: 'food',
    },
    {
      url: 'https://apac-marketing.webbeds.com/wp-content/uploads/2022/09/lobby-1.jpg',
      title: 'Dining Experience',
      category: 'interior',
    },
    {
      url: 'https://www.thavornbeachvillage.com/upload/blog-files/1695379553.734.jpg',
      title: 'Fresh Ingredients',
      category: 'food',
    },
    {
      url: 'https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/51/2025/04/09090110/Best-Southern-Thai-Food-in-Phuket.jpg',
      title: 'Spicy Delights',
      category: 'food',
    },
    {
      url: 'https://dwp.com/wp-content/uploads/2025/04/Terra-Phuket-Italian-Restaurant-6-scaled.jpg',
      title: 'Elegant Setting',
      category: 'interior',
    },
    {
      url: 'https://www.mondomulia.com/wp-content/uploads/2021/01/Thai-Food-Cooking-Class-Amari-Phuket-scaled.jpg',
      title: 'Traditional Cooking',
      category: 'food',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-off-white">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary mb-4">
            Gallery
          </h1>
          <p className="text-xl text-primary/70">
            Experience the Ambiance & Flavors of ตู้กับข้าว
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery

