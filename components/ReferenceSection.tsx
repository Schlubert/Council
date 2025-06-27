import React from 'react';
import type { Reference } from '../types';
import { Section } from './Section';

interface ReferenceSectionProps {
  references: Reference[];
}

const ReferenceCard: React.FC<{ reference: Reference }> = ({ reference }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
        <p className="text-slate-600 italic mb-4">"{reference.quote}"</p>
        <div className="flex items-center">
            <img src={reference.imageUrl} alt={reference.name} className="w-14 h-14 rounded-full mr-4 border-2 border-navy-200"/>
            <div>
                <p className="font-bold text-navy-900">{reference.name}</p>
                <p className="text-sm text-slate-500">{reference.title}</p>
            </div>
        </div>
    </div>
);

export const ReferenceSection: React.FC<ReferenceSectionProps> = ({ references }) => {
  return (
    <Section title="Endorsements" id="references">
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {references.map((ref) => (
          <ReferenceCard key={ref.name} reference={ref} />
        ))}
      </div>
    </Section>
  );
};