import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import type { Technology } from '../types';
import StackSidebar from './StackSidebar';
import TechCard from './TechCard';

const ExploreSection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechs, setSelectedTechs] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  const handleAdd = (tech: Technology) => {
    const exists = selectedTechs.find((t) => t.id === tech.id);
    if (exists) {
      toast.warning('⚠️ Already in your stack!');
      return;
    }
    setSelectedTechs([...selectedTechs, tech]);
    toast.success(`✅ ${tech.name} added to your stack!`);
  };

  const handleRemove = (id: string) => {
    const removed = selectedTechs.find((t) => t.id === id);
    setSelectedTechs(selectedTechs.filter((t) => t.id !== id));
    if (removed) toast.error(`❌ ${removed.name} removed`);
  };

  const handleRemoveAll = () => {
    setSelectedTechs([]);
    toast.info('🗑️ Stack cleared!');
  };

  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold">
        Explore the <span className="brand-gradient-text">Technologies</span>
      </h2>
      <p className="text-gray-500 mt-2">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
        <div className="lg:col-span-3">
          {loading ? (
            <div className="flex justify-center items-center py-20 col-span-full">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech) => {
                const isSelected = selectedTechs.some((t) => t.id === tech.id);
                return (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    onAdd={handleAdd}
                    isSelected={isSelected}
                  />
                );
              })}
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <StackSidebar
            selectedTechs={selectedTechs}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
