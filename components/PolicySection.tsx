import React from 'react';
import type { Policy } from '../types';
import { Section } from './Section';

interface PolicySectionProps {
  policies: Policy[];
}

const PolicyCard: React.FC<{ policy: Policy }> = ({ policy }) => {
    const Icon = policy.icon;
    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="text-navy-700 w-12 h-12 mb-4">
                <Icon className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-navy-900 mb-2">{policy.title}</h3>
            <p className="text-slate-600 leading-relaxed">{policy.description}</p>
        </div>
    );
};

export const PolicySection: React.FC<PolicySectionProps> = ({ policies }) => {
  return (
    <Section title="My Stance on the Issues" id="policies">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {policies.map((policy) => (
          <PolicyCard key={policy.title} policy={policy} />
        ))}
      </div>
    </Section>
  );
};