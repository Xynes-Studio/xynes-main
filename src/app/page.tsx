import { Hero } from '@/components/sections/home/hero';
import { Cms } from '@/components/sections/home/cms';
import { Modularity } from '@/components/sections/home/modularity';
import { Adaptability } from '@/components/sections/home/adaptability';
import { OpenSource } from '@/components/sections/home/open-source';
import { Roadmap } from '@/components/sections/home/roadmap';

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Cms />
      <Modularity />
      <Adaptability />
      <OpenSource />
      <Roadmap />
    </main>
  );
}
