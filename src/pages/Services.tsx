import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Layout,
  Users,
  Phone,
  FileText,
  Headphones,
  UserPlus,
  BarChart3,
} from 'lucide-react';
import { CTASection } from '../components/CTASection';
import { Link } from 'react-router-dom';

const PageWrapper = styled.div`
  padding-top: 80px;
`;

const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing[12]} ${theme.spacing[6]}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing[8]} ${theme.spacing[5]}`};
  }
`;

const SectionContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.content};
  margin: 0 auto;
`;

const CategoryTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const CategoryDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing[6]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  transition: all ${({ theme }) => theme.transitions.base};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.gradient.white};
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.base};
    z-index: -1;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.hover};
    transform: translateY(-4px);
    box-shadow: 0 10px 40px rgba(255, 255, 255, 0.15);

    &::before {
      opacity: 1;
    }
  }
`;

const ServiceIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ServiceTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ServiceDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
`;

const BenefitsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[2]};
`;

const BenefitItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.muted};
  padding-left: ${({ theme }) => theme.spacing[5]};
  position: relative;

  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

const IdealFor = styled.div`
  margin-top: ${({ theme }) => theme.spacing[3]};
  padding-top: ${({ theme }) => theme.spacing[3]};
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const ContactLink = styled(Link)`
  margin-top: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  transition: gap ${({ theme }) => theme.transitions.fast};

  &:hover {
    gap: ${({ theme }) => theme.spacing[3]};
  }

  &::after {
    content: '→';
  }
`;

export const Services = () => {
  return (
    <PageWrapper>
      {/* Digital Platforms */}
      <Section>
        <SectionContainer>
          <CategoryTitle>Digital Platforms</CategoryTitle>
          <CategoryDescription>
            Your digital infrastructure is the foundation. We build platforms that convert, scale, and support your growth.
          </CategoryDescription>
          <ServicesGrid>
            <ServiceCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ServiceIcon>
                <Globe size={48} strokeWidth={1.5} />
              </ServiceIcon>
              <ServiceTitle>High-Performance Websites</ServiceTitle>
              <ServiceDescription>
                Conversion-optimized sites built to turn traffic into revenue. Every element engineered for speed and results.
              </ServiceDescription>
              <BenefitsList>
                <BenefitItem>Conversion-focused design</BenefitItem>
                <BenefitItem>Lightning-fast load times</BenefitItem>
                <BenefitItem>Mobile-first approach</BenefitItem>
                <BenefitItem>Built-in A/B testing</BenefitItem>
              </BenefitsList>
              <IdealFor>Ideal for businesses that need more leads from their website</IdealFor>
              <ContactLink to="/contact">Discuss This Solution</ContactLink>
            </ServiceCard>

            <ServiceCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <ServiceIcon>
                <Smartphone size={48} strokeWidth={1.5} />
              </ServiceIcon>
              <ServiceTitle>Native Mobile Apps</ServiceTitle>
              <ServiceDescription>
                iOS and Android applications engineered for engagement, retention, and seamless user experience.
              </ServiceDescription>
              <BenefitsList>
                <BenefitItem>Native iOS & Android development</BenefitItem>
                <BenefitItem>Intuitive UX/UI design</BenefitItem>
                <BenefitItem>Push notifications & engagement</BenefitItem>
                <BenefitItem>Deep analytics integration</BenefitItem>
              </BenefitsList>
              <IdealFor>Ideal for products that need a mobile presence</IdealFor>
              <ContactLink to="/contact">Discuss This Solution</ContactLink>
            </ServiceCard>

            <ServiceCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <ServiceIcon>
                <Layout size={48} strokeWidth={1.5} />
              </ServiceIcon>
              <ServiceTitle>Custom Web Platforms</ServiceTitle>
              <ServiceDescription>
                Scalable dashboards and internal tools for modern businesses. Built to grow as you do.
              </ServiceDescription>
              <BenefitsList>
                <BenefitItem>Enterprise-grade architecture</BenefitItem>
                <BenefitItem>Real-time data & analytics</BenefitItem>
                <BenefitItem>Role-based access control</BenefitItem>
                <BenefitItem>Seamless API integrations</BenefitItem>
              </BenefitsList>
              <IdealFor>Ideal for businesses needing custom software solutions</IdealFor>
              <ContactLink to="/contact">Discuss This Solution</ContactLink>
            </ServiceCard>
          </ServicesGrid>
        </SectionContainer>
      </Section>

      {/* Growth & Revenue */}
      <Section>
        <SectionContainer>
          <CategoryTitle>Growth & Revenue</CategoryTitle>
          <CategoryDescription>
            Stop relying on manual outreach. Our AI systems find customers, qualify leads, and close deals automatically.
          </CategoryDescription>
          <ServicesGrid>
            <ServiceCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ServiceIcon>
                <Users size={48} strokeWidth={1.5} />
              </ServiceIcon>
              <ServiceTitle>Intelligent Lead Generation</ServiceTitle>
              <ServiceDescription>
                Automated prospecting that fills your pipeline with qualified buyers, no manual searching.
              </ServiceDescription>
              <BenefitsList>
                <BenefitItem>Automated prospect identification</BenefitItem>
                <BenefitItem>Multi-channel outreach</BenefitItem>
                <BenefitItem>Lead scoring & qualification</BenefitItem>
                <BenefitItem>Real-time CRM sync</BenefitItem>
              </BenefitsList>
              <IdealFor>Ideal for sales teams that need more qualified leads</IdealFor>
              <ContactLink to="/contact">Discuss This Solution</ContactLink>
            </ServiceCard>

            <ServiceCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <ServiceIcon>
                <Phone size={48} strokeWidth={1.5} />
              </ServiceIcon>
              <ServiceTitle>Voice Call Systems</ServiceTitle>
              <ServiceDescription>
                AI phone agents that book appointments and handle objections, answering every call instantly.
              </ServiceDescription>
              <BenefitsList>
                <BenefitItem>24/7 call answering</BenefitItem>
                <BenefitItem>Automated appointment booking</BenefitItem>
                <BenefitItem>Lead qualification</BenefitItem>
                <BenefitItem>Follow-up automation</BenefitItem>
              </BenefitsList>
              <IdealFor>Ideal for businesses with high call volume</IdealFor>
              <ContactLink to="/contact">Discuss This Solution</ContactLink>
            </ServiceCard>

            <ServiceCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <ServiceIcon>
                <FileText size={48} strokeWidth={1.5} />
              </ServiceIcon>
              <ServiceTitle>Content Automation</ServiceTitle>
              <ServiceDescription>
                Automated video generation with leading AI models, creating and posting content to social platforms on autopilot.
              </ServiceDescription>
              <BenefitsList>
                <BenefitItem>Automated video generation</BenefitItem>
                <BenefitItem>AI-powered content creation</BenefitItem>
                <BenefitItem>Auto-posting to social platforms</BenefitItem>
              </BenefitsList>
              <IdealFor>Ideal for brands that need consistent video and social content</IdealFor>
              <ContactLink to="/contact">Discuss This Solution</ContactLink>
            </ServiceCard>
          </ServicesGrid>
        </SectionContainer>
      </Section>

      {/* Operations & Efficiency */}
      <Section>
        <SectionContainer>
          <CategoryTitle>Operations & Efficiency</CategoryTitle>
          <CategoryDescription>
            Your team shouldn't waste time on repetitive tasks. We automate operations that slow you down.
          </CategoryDescription>
          <ServicesGrid>
            <ServiceCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ServiceIcon>
                <Headphones size={48} strokeWidth={1.5} />
              </ServiceIcon>
              <ServiceTitle>Customer Support Agents</ServiceTitle>
              <ServiceDescription>
                Instant responses without expanding your support team, handling questions and escalating when needed.
              </ServiceDescription>
              <BenefitsList>
                <BenefitItem>24/7 customer support</BenefitItem>
                <BenefitItem>Instant response times</BenefitItem>
                <BenefitItem>Multi-language support</BenefitItem>
                <BenefitItem>Smart ticket routing</BenefitItem>
              </BenefitsList>
              <IdealFor>Ideal for businesses with high support volume</IdealFor>
              <ContactLink to="/contact">Discuss This Solution</ContactLink>
            </ServiceCard>

            <ServiceCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <ServiceIcon>
                <UserPlus size={48} strokeWidth={1.5} />
              </ServiceIcon>
              <ServiceTitle>Recruitment Automation</ServiceTitle>
              <ServiceDescription>
                Systems that source and screen top-tier candidates, delivering only qualified talent.
              </ServiceDescription>
              <BenefitsList>
                <BenefitItem>Automated candidate sourcing</BenefitItem>
                <BenefitItem>Resume screening & scoring</BenefitItem>
                <BenefitItem>Interview scheduling</BenefitItem>
                <BenefitItem>Candidate communication</BenefitItem>
              </BenefitsList>
              <IdealFor>Ideal for companies hiring frequently</IdealFor>
              <ContactLink to="/contact">Discuss This Solution</ContactLink>
            </ServiceCard>

            <ServiceCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <ServiceIcon>
                <BarChart3 size={48} strokeWidth={1.5} />
              </ServiceIcon>
              <ServiceTitle>Predictive Analytics</ServiceTitle>
              <ServiceDescription>
                Data intelligence that reveals future opportunities, making decisions based on what's coming.
              </ServiceDescription>
              <BenefitsList>
                <BenefitItem>Predictive modeling</BenefitItem>
                <BenefitItem>Real-time dashboards</BenefitItem>
                <BenefitItem>Trend identification</BenefitItem>
                <BenefitItem>Automated reporting</BenefitItem>
              </BenefitsList>
              <IdealFor>Ideal for data-driven businesses</IdealFor>
              <ContactLink to="/contact">Discuss This Solution</ContactLink>
            </ServiceCard>
          </ServicesGrid>
        </SectionContainer>
      </Section>

      <CTASection
        title="Need Something Custom?"
        description="Every business is unique. If you need a tailored AI solution built specifically for your challenges, we can engineer it from the ground up."
        buttonText="Discuss Custom Solutions"
        buttonLink="/contact"
      />
    </PageWrapper>
  );
};
