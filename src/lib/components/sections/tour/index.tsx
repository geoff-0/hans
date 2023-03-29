import Section from '../../Section';

import LandingTourList from './LandingTourList';

export default function TourSection() {
  return (
    <Section sectionId="tour" sectionTitle={'upcoming dates'}>
      <LandingTourList />
    </Section>
  );
}
