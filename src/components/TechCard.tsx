import type { Technology } from '../types';

interface TechCardProps {
  tech: Technology;
  onAdd: (tech: Technology) => void;
  isSelected: boolean;
}

const TechCard = ({ tech, onAdd, isSelected }: TechCardProps) => {
  return (
    <div className="border rounded-xl p-5 bg-white">
      <div className="flex justify-between items-start">
        <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
        <span className="bg-pink-100 text-pink-700 text-xs px-3 py-1 rounded-full font-semibold">
          {tech.badge}
        </span>
      </div>

      {/* Name + Description */}
      <h3 className="text-xl font-bold mt-4">{tech.name}</h3>
      <p className="text-gray-600 text-sm mt-2 leading-relaxed">{tech.description}</p>

      {/* Bottom: Category + Difficulty + Rating */}
      <div className="flex justify-between items-center mt-4 text-sm">
        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{tech.category}</span>
        <span className="text-gray-500">{tech.difficulty}</span>
        <span className="text-yellow-500 font-semibold">★ {tech.rating}</span>
      </div>

      {/* Button */}
      <button
        onClick={() => onAdd(tech)}
        disabled={isSelected}
        className={`w-full py-2 rounded-lg mt-4 font-semibold ${
          isSelected
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-gray-900 text-white'
        }`}
      >
        {isSelected ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};

export default TechCard;
