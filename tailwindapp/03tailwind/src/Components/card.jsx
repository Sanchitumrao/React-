
// how to build a card component with tailwind css in react using props
import React from "react";
function Card({ title='Explore', description, image, buttonText }){
    // console.log(props)
    return(
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h2>

        <p className="text-gray-600 text-sm mb-4">
          {description}
        </p>

        {buttonText && (
          <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}
export default Card;
    
