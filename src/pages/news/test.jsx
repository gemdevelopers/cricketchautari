// ... (existing code)

const News = () => {
    // ... (existing code)
  
    return (
      <>
        {/* ... (existing code) */}
  
        {/* Content section based on activeTab */}
        <div className="mt-10 grid grid-cols-12 gap-14 md:gap-20">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              id={tab.id}
              className={`col-span-12 sm:col-span-12 md:col-span-9 lg:col-span-9 xl:col-span-12 ${
                activeTab === tab.id ? '' : 'hidden'
              }`}
            >
              {/* Conditionally render content based on activeTab */}
              {activeTab === 'latestNews' && (
                <>
                  {news.map((data, index) => (
                    <NewsCard key={index} id={index + 1} info={data} />
                  ))}
                </>
              )}
              {activeTab === 'tournament' && (
                <p>This is tournament tab content</p>
              )}
              {activeTab === 'series' && <p>This is series tab content</p>}
              {activeTab === 'country' && <p>This is country tab content</p>}
            </div>
          ))}
          {/* ... (existing code) */}
        </div>
  
        {/* ... (existing code) */}
      </>
    );
  };
  
  export default News;
  