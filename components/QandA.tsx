import React, { useState } from "react";

type Principle = {
  name: string;
  description: React.ReactNode; // ✅ allows <p>, <ul>, <div>, etc.
};

const principles: Principle[] = [
  {
    name: "What is your vision for making it easier, safer and more enjoyable to walk, bike, and use public transport in Dunedin?",
    description: (
      <ul className="list-disc pl-5 space-y-2">
        <li>
          Connecting the various sections of the cycleways/shared paths.
          Basically, completing the work that has been started and uniting the
          sections into a functional and appealing network.
        </li>
        <li>
          Having experienced, several times, what many cyclists have – far too
          close encounters with vehicles disregarding road rules and traffic
          lights – I would like to see the use of red-light cameras. I don’t
          believe that we can entirely separate cycles from cars, but we need to
          re-educate some drivers on the reasons for road rules.
        </li>
        <li>
          Ensuring that the crossing at the end of Portsmouth Drive is made
          safe. There is work being done on planning this, but I would be
          keeping an eye on it and advocating for it to be done as quickly as
          possible.
        </li>
        <li>
          Public transport is, at this stage, run under the Otago Regional
          Council. This is an arrangement that I would like to explore. Is it
          providing the best outcome for the city or, if it were to be brought
          in to the DCC, could we better serve the city.
        </li>
        <li>
          I have long been an advocate for some sections of George Street being
          pedestrianised – even if it is just one block as a start.
        </li>
      </ul>
    ),
  },
  {
    name: "In terms of walking and cycling infrastructure, what are your top priorities for improvements in the next council term?",
    description: (
      <ul className="list-disc pl-5 space-y-2">
        <li>
         Priority #1 for me is to make the crossing at the corner of Portsmouth Drive and Shore St safe. We often take our lives in our hands when we cross there and that needs to change.
        </li>
        <li>
         Other than that it is more or less as above – connect the network (which includes the tunnels trail) as we can assign finance and making intersections safer (red light cameras)
        </li>
        </ul>
        
    ),
  },
  {
    name: "What is your vision on traffic-calmed streets, George Street, the Octagon, and other public spaces (especially in terms of accessibility)?",
    description: (
      <ul className="list-disc pl-5 space-y-2">
        <li>
        As part of a wider refresh of the heart of our city, I would like to see the lower Octagon closed to traffic (down as far as, but not including, Bath st). I believe this would help bring some vibrancy to the area, help local businesses, and allow for more activities and enjoyment of the area.
        </li>
        <li>
        Speed calming measures, such as bumps and lower speed limits, are important in the right places however I am not an advocate for widespread, all encompassing actions. I believe they need to be considered on a situation by situation basis
        </li>
        <li>
        All my previous comments around pedestrianisation are made with the expectation that accessibility will be at the core of any designs.
        </li>
      </ul>
    ),
  },  
  {
    name: "What is the biggest opportunity on the horizon for Dunedin?",
    description: (
      <>
        <p>We need to back ourselves in actions not just in words. We’ve started, now we need to build on that.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Being in front of the powers in Wellington rather than simply accepting their decisions.</li>
          <li>Promoting ourselves proudly on the national and international stage rather than a campaign of self-deprecation.</li>
          <li>If we think and act the same as we always have done we will get the same result. 
              Basically - Believe in ourselves and do some things differently.
          </li>
        </ul>
      </>
    ),
  },
    {
    name: "What are your top priorities for Dunedin in the next three years?",
    description: (
      <ul className="list-disc pl-5 space-y-2">
        <li>
        Fiscal Responsibility – spend as little as we can but where we have to.
        </li>
        <li>
        Fostering business and economic growth to develop our combined economy and help make Dunedin an attractive place to live, work, or visit.
        </li>
        <li>
        Waste minimisation opportunities – thinking big and acting locally as well as engaging with new ideas and technologies.</li>
      </ul>
    ),
  },
];

const QandA: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Answering some questions          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            I get asked lots of questions, the answers to which often get spread over the internet. So I thought it might be helpful to have some of them in one place. I'll be updating the list as I get more questions, so if you have one, please ask! 
          </p>
        </div>

        {/* 3-column responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-4 text-left text-xl font-semibold text-sky-600 focus:outline-none"
              >
                {principle.name}
                <span className="text-slate-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 pt-0 text-slate-600">
                  {principle.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QandA;