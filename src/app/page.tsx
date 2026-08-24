import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import("@/components/HeroSection").then(mod => ({ default: mod.HeroSection })), {
  loading: () => <div className="h-dvh bg-gradient-to-b from-orange-600 to-green-900" />,
});

export default function Home() {
  return <HeroSection />;
}