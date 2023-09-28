function generateStars() {
    const stars = [];
    const numberOfStars = 50; // Adjust as needed

    for (let i = 0; i < numberOfStars; i++) {
      const star = (
        <div
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`, // Random horizontal position
            top: `${Math.random() * 100}%`,  // Random vertical position
          }}
        ></div>
      );
  
      stars.push(star);
    }
  
    return stars;
  }
  function FallingStars() {
    return (
      <div className="falling-stars">
        {generateStars()}
      </div>
    );
  }

  export default FallingStars; // Export FallingStars as the default export
