import { useEffect, useRef } from 'react';
import V02 from './imports/V02';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll suave para as seções quando clicar nos ícones
    const handleNavigation = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest('button');
      
      if (!button || !containerRef.current) return;

      // Identifica qual botão foi clicado baseado no data-name
      const dataName = button.getAttribute('data-name');
      let scrollToY = 0;

      switch (dataName) {
        case 'ep:house':
          // Volta ao topo (hero section)
          scrollToY = 0;
          break;
        case 'icon-park-outline:people-minus':
          // Vai para experiências profissionais (aproximadamente 1037px)
          scrollToY = 1037;
          break;
        case 'ix:about':
          // Vai para cases (aproximadamente 2001px)
          scrollToY = 2001;
          break;
        default:
          return;
      }

      containerRef.current.scrollTo({
        top: scrollToY,
        behavior: 'smooth'
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('click', handleNavigation);
    }

    return () => {
      if (container) {
        container.removeEventListener('click', handleNavigation);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-screen h-screen overflow-y-auto overflow-x-hidden"
      style={{ 
        scrollBehavior: 'smooth',
        backgroundColor: '#ffffff'
      }}
    >
      <div className="min-w-[1500px]">
        <V02 />
      </div>
    </div>
  );
}
