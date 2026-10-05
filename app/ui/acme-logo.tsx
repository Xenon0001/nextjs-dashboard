import { GlobeAltIcon } from '@heroicons/react/24/outline';
// No tengo esa fuente aun
// import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      // Cuanto tenga la fuente agregare: grow p-6 md:overflow-y-auto
      className={`flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
