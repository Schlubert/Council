import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Faq = {
  question: string;
  answer: React.ReactNode;
};

const faqs: Faq[] = [
    {
  question: "15 minutes (just under) of questions by Dr Barb from the Otago Institute for the Arts and Sciences.",
  answer: (
  <>
  <p>As part of recording  the OI POdcast on OAR FM (105.4FM), Dr Barb invited all candidates to pop in and answer the same set of questions. I had a blast despite a few questions being harder than the short answer format would allow. Here it is if you want to have a listen. You can also search through the interviews of those others that chose to take part. </p>
  <a href="https://accessmedia.nz/player?EID=fee5477e-6ae1-4235-9bf5-a34cea7466d0&audioOnlyMode=true" className="text-sky-600 hover:underline">
    Listen to the interview </a>
  </>
  ),
},
{
    question: "What is your vision for making it easier, safer and more enjoyable to walk, bike, and use public transport in Dunedin?",
    answer: (
      <ul className="list-disc pl-5 space-y-2">
        <li>
          Connecting the various sections of the cycleways/shared paths.
          Basically, completing the work that has been started and uniting the
          sections into a functional and appealing network.
        </li>
        <li>
          Having experienced, several times, what many cyclists have – far too
          close encounters with vehicles disregarding road rules and traffic
          lights – I would like to see the use of red-light cameras. I don't
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
    question: "In terms of walking and cycling infrastructure, what are your top priorities for improvements in the next council term?",
    answer: (
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
    question: "What is your vision on traffic-calmed streets, George Street, the Octagon, and other public spaces (especially in terms of accessibility)?",
    answer: (
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
    question: "What is the biggest opportunity on the horizon for Dunedin?",
    answer: (
      <>
        <p>We need to back ourselves in actions not just in words. We've started, now we need to build on that.</p>
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
    question: "What are your top priorities for Dunedin in the next three years?",
    answer: (
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
            Answering Some Questions          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            I get asked lots of questions, the answers to which often get spread over the internet. So I thought it might be helpful to have some of them in one place. I'll be updating the list as I get more questions, so if you have one, please ask! 
          </p>
        </div>

        {/* Single column layout */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((principle, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-6 text-left bg-slate-50 hover:bg-slate-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-inset"
              >
                <span className="text-lg font-semibold text-sky-600 pr-4">
                  {principle.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-sky-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-500" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="p-6 pt-4 bg-white text-slate-600 border-t border-slate-100 animate-in slide-in-from-top-2 duration-200">
                  {principle.answer}
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