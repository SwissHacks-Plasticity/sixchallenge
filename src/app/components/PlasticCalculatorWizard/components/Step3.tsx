import { useCallback } from 'react';
import SliderInput from '../../SliderInput/SliderInput';
import { usePlasticCalculatorWizardState } from '../hooks/usePlasticCalculatorWizardState';

export const Step3: React.FC = () => {
  const { state, updateFormState } = usePlasticCalculatorWizardState();
  const setTotal = useCallback(
    (value: string) => updateFormState({ plasticTotal: Number(value) }),
    [updateFormState]
  );

  return (
    <div>
      <h1>
        {state.company} <span className="text-black">at a glance</span>
      </h1>
      <section className="flex justify-between m-20 ">
        <div>
          <img src="" alt="" />
          <span className="text-blue font-bold">{state.location} Locations</span>
        </div>
        <div>
          <img src="" alt="" />
          <span className="text-blue font-bold">{state.employees} Employees</span>
        </div>
        <div>
          <img src="" alt="" />
          <span className="text-blue font-bold">{state.revenue} Revenue</span>
        </div>
      </section>
      <section className="w-full">
        <div className="font-bold mb-2 block text-3xl">Your need</div>
        <div className="text-blue font-bold text-3xl mb-6">
          {state.credits} xxx Credit to be net Circular Plastic
        </div>
        <SliderInput
          hideInputNumber={true}
          value={String(state.plasticTotal ?? 0)}
          min="0"
          max="100000"
          stepSize={100}
          onChange={setTotal}
          disabled={true}
        />
      </section>
      <section className='bg-white my-20 px-16 py-10 white-box'>
        <p>22,3 Tons remaining to save Lorem ipsum ist Text der gerne.</p>
      </section>
      <section>

      <h2>We recommend these Projects</h2>
      
        <Card project={{name: 'Project 1', location: 'Switzerland', employees: 1000, revenue: 10000000, credits: 22, plasticTotal: 10000, desc: "Lorem ipsum ist Text, der gerne als Platzhalter genommen wird, wenn es noch keinen richtigen Text gibt. Der Grund dafür ist ein angenehmer Zeilenfall, der einen guten Eindruck von dem finalen Layout vermittelt."}}/>
      </section>
    </div>
  );
};


type Project ={
  name: string;
  location: string;
  employees: number;
  revenue: number;
  credits: number;
  plasticTotal: number;
  desc?: string;
} 


const Card = ({project}: {project: Project}):JSX.Element => {
  return (
      <section className='w-full relative py-16'>
        <div className=' bg-white border-lightgreen border-2 rounded right-0 bottom-0 ml-[250px] my-6 pl-16 py-6 pr-2'>
          <h3>{project.name}</h3>
          <span>{project.desc}</span>
          <div className='flex'>
            <div className='mr-6'>
              <span  className='text-sm'>Certification</span>
              <img src="" alt="cert" />
            </div>
            <div>
              <span className='text-sm'>Source</span>
              <img src="" alt="source" />
            </div>
          </div>
          <div className='mt-6'>
            <button className='button blue filled mr-4'>Add</button>
            <button className='button blue'>Add</button>
          </div>
        </div>
        <img src="https://picsum.photos/400" alt="project picture" className='border-lightgreen border-2 absolute top-0 left-0 block rounded' width={300} height={300}/>
      </section>
  );
};