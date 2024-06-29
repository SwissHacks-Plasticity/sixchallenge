import { RecyclingProject } from '@/app/data/types';

export const Card = ({
  project,
  onAdd,
}: {
  project: RecyclingProject;
  onAdd?: () => void;
}): JSX.Element => {
  return (
    <section className="w-full relative py-8">
      <div className=" bg-white border-lightgreen border-2 rounded-lg right-0 bottom-0 ml-[250px] pl-16 py-6 pr-4 shadow-us overflow-scroll">
        <h4 className={'font-bold'}>CHF {project.pricePerCredit}.- per Credit</h4>
        <h3>{project.title}</h3>
        <div className="mb-3">{project.description}</div>
        <div className="flex">
          <div className="mr-6">
            <span className="text-sm">Certification</span>
            <img
              src={project.certification === 'Verra PWRS' ? '/Verra-logo.svg' : '/pprs.png'}
              className="w-[84px] h-[28px]"
              alt="cert"
            />
          </div>
          <div>
            <span className="text-sm">Source</span>
            {project.source === 'PCX' ? (
              <img src="/pcx-logo.webp" className="w-[84px] h-[28px] " alt="source" />
            ) : project.source === 'rePurpose' ? (
              <img src="/logo_repurpose.png" className="w-[84px] h-[24px] " alt="source" />
            ) : (
              <img src="/logo_impacthub.png" className="w-[28px] h-[28px] " alt="source" />
            )}
          </div>
        </div>
        <div className="mt-6">
          <button className="button blue filled mr-4" onClick={onAdd}>
            Add
          </button>
          <button className="button blue">Details</button>
        </div>
      </div>
      <img
        src={project.image}
        alt="project picture"
        className="border-lightgreen border-2 absolute top-0 left-0 block rounded-lg shadow-us"
        width={300}
        height={300}
      />
    </section>
  );
};
