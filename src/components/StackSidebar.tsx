import type { Technology } from '../types';

interface StackSidebarProps {
  selectedTechs: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const StackSidebar = ({ selectedTechs, onRemove, onRemoveAll }: StackSidebarProps) => {
  return (
    <div className="border border-gray-200 rounded-xl p-5 bg-white">
      <h3 className="text-xl font-bold">Your Stack</h3>
      <p className="text-gray-500 text-sm mt-1">
        {selectedTechs.length} Technology Selected
      </p>

      {/* Empty state */}
      {selectedTechs.length === 0 ? (
        <div className="mt-4 border-2 border-dashed border-gray-200 rounded-lg py-10 text-center">
          <p className="text-gray-400 text-sm">Your stack is empty.</p>
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-3">
          {selectedTechs.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center justify-between border border-gray-200 rounded-lg p-3"
            >
              <div className="flex items-center gap-3">
                <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                <div>
                  <p className="font-semibold text-sm">{tech.name}</p>
                  <p className="text-gray-500 text-xs">{tech.category}</p>
                </div>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                className="text-gray-400 hover:text-red-500 text-lg"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="w-full border border-red-300 text-red-500 py-2 rounded-lg mt-2 font-semibold"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default StackSidebar;
