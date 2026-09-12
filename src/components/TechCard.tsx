import type { Technology } from '../types';

interface TechCardProps {
  tech: Technology;
  onAdd: (tech: Technology) => void;
  isSelected: boolean;
}

const getBadgeColor = (badge: string): string => {
  switch (badge) {
    case 'Popular':
      return 'bg-pink-100 text-pink-700';
    case 'Versatile':
      return 'bg-emerald-100 text-emerald-700';
    case 'Fast':
      return 'bg-orange-100 text-orange-700';
    case 'SSR / Edge':
      return 'bg-violet-100 text-violet-700';
    case 'Standard':
      return 'bg-sky-100 text-sky-700';
    case 'Top SQL':
      return 'bg-blue-100 text-blue-700';
    case 'Modern':
      return 'bg-cyan-100 text-cyan-700';
    case 'Containers':
      return 'bg-amber-100 text-amber-700';
    case 'Essential':
      return 'bg-indigo-100 text-indigo-700';
    case 'NoSQL':
      return 'bg-green-100 text-green-700';
    case 'Cache':
      return 'bg-red-100 text-red-700';
    case 'Robust':
      return 'bg-fuchsia-100 text-fuchsia-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

const TechCard = ({ tech, onAdd, isSelected }: TechCardProps) => {
  return (
    <div className="border rounded-xl p-5 bg-white">
      <div className="flex justify-between items-start">
        <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
        <span
          className={`${getBadgeColor(tech.badge)} text-xs px-3 py-1 rounded-full font-semibold`}
        >
          {tech.badge}
        </span>
      </div>

      <h3 className="text-xl font-bold mt-4">{tech.name}</h3>
      <p className="text-gray-600 text-sm mt-2 leading-relaxed">{tech.description}</p>

      <div className="flex justify-between items-center mt-4 text-sm">
        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
          {tech.category}
        </span>
        <span className="text-gray-500">{tech.difficulty}</span>
        <span className="text-yellow-500 font-semibold">★ {tech.rating}</span>
      </div>

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
