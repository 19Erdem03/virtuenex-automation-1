'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  Building2,
  TrendingUp,
  Settings,
  Sparkles,
  Headphones,
  Zap,
  Rocket,
  ChevronDown,
  BarChart3,
} from 'lucide-react';
import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { ProcessStep } from '@/components/ProcessStep';
import { useState } from 'react';
import Link from 'next/link';

const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing[16]} ${theme.spacing[6]}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing[10]} ${theme.spacing[5]}`};
  }
`;

const SectionWithReducedBottom = styled(Section)`
  padding-bottom: ${({ theme }) => theme.spacing[8]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-bottom: ${({ theme }) => theme.spacing[6]};
  }
`;

const SectionContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.content};
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  background: linear-gradient(135deg, #ffffff 0%, #a3a3a3 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[12]};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: ${({ theme }) => theme.colors.gradient.whiteBorder};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
    margin-bottom: ${({ theme }) => theme.spacing[8]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing[8]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[6]};
  }
`;

const ValueCard = styled(motion.div)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[8]};
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
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

const ValueIcon = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto ${({ theme }) => theme.spacing[4]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ValueTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

const ValueDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
`;

const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ViewAllButton = styled(Link)`
  display: inline-block;
  margin: ${({ theme }) => `${theme.spacing[10]} auto 0`};
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[8]}`};
  border: 2px solid ${({ theme }) => theme.colors.border.hover};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  transition: all ${({ theme }) => theme.transitions.base};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  width: fit-content;
  display: block;
  margin-left: auto;
  margin-right: auto;
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
    border-color: transparent;
    transform: translateY(-2px);
    box-shadow: 0 10px 40px rgba(255, 255, 255, 0.2);

    &::before {
      opacity: 1;
    }
  }
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FAQSection = styled(Section)`
  background: rgba(255, 255, 255, 0.01);
`;

const FAQList = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.reading};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const FAQItem = styled.div<{ $isOpen: boolean }>`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.base};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.gradient.white};
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transition: opacity ${({ theme }) => theme.transitions.base};
    z-index: -1;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.hover};

    &::before {
      opacity: 0.5;
    }
  }
`;

const FAQQuestion = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[5]};
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const FAQAnswer = styled.div<{ $isOpen: boolean }>`
  padding: ${({ $isOpen, theme }) =>
    $isOpen ? `0 ${theme.spacing[5]} ${theme.spacing[5]}` : '0'};
  max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
`;

const ChevronIcon = styled(ChevronDown)<{ $isOpen: boolean }>`
  transition: transform ${({ theme }) => theme.transitions.base};
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0)')};
`;

const faqs = [
  {
    question: 'What types of businesses do you work with?',
    answer:
      'We work with businesses across all industries, from e-commerce and SaaS to professional services, real estate, and consulting. If you have repetitive processes, high customer volume, or sales workflows that need optimization, AI automation can transform your operations.',
  },
  {
    question: 'How long does implementation take?',
    answer:
      'Implementation timelines vary based on complexity. Simple automation systems can be deployed in 2-4 weeks, while comprehensive custom solutions typically take 6-12 weeks. We provide a detailed timeline during the discovery phase.',
  },
  {
    question: 'Do I need technical knowledge to use these systems?',
    answer:
      'Not at all. We design our systems to be intuitive and user-friendly. We provide complete training and documentation, plus ongoing support to ensure your team can leverage the automation effectively without technical expertise.',
  },
  {
    question: 'How is this different from other automation tools?',
    answer:
      'Unlike off-the-shelf tools, we engineer custom AI systems tailored to your specific business processes. We integrate with your existing tech stack, train models on your data, and provide ongoing optimization, not just templates.',
  },
];

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      <Hero />

      {/* Value Proposition Section */}
      <SectionWithReducedBottom>
        <SectionContainer>
          <SectionTitle>Why Businesses Choose VirtueNex</SectionTitle>
          <ValueGrid>
            <ValueCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ValueIcon>
                <Headphones size={64} strokeWidth={1.5} />
              </ValueIcon>
              <ValueTitle>Support That Scales Infinitely</ValueTitle>
              <ValueDescription>
                AI-powered support systems that resolve issues instantly, 24/7. Handle unlimited customer inquiries without adding headcount.
              </ValueDescription>
            </ValueCard>

            <ValueCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ValueIcon>
                <Zap size={64} strokeWidth={1.5} />
              </ValueIcon>
              <ValueTitle>Eliminate Bottlenecks</ValueTitle>
              <ValueDescription>
                Automated operations that free your team from repetitive tasks, letting them focus on strategic work that drives growth.
              </ValueDescription>
            </ValueCard>

            <ValueCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ValueIcon>
                <Rocket size={64} strokeWidth={1.5} />
              </ValueIcon>
              <ValueTitle>Built to Scale</ValueTitle>
              <ValueDescription>
                Custom platforms engineered to grow with your business. Handle 10x the volume without hiring 10x the team.
              </ValueDescription>
            </ValueCard>
          </ValueGrid>
        </SectionContainer>
      </SectionWithReducedBottom>

      <SectionContainer style={{ display: 'flex', justifyContent: 'center', padding: '0 1.5rem 2rem' }}>
        <ViewAllButton href="/contact">Book a Free Consultation</ViewAllButton>
      </SectionContainer>

      {/* Solutions Overview Section */}
      <Section>
        <SectionContainer>
          <SectionTitle>How We Transform Your Business</SectionTitle>
          <SolutionsGrid>
            <ServiceCard
              icon={Building2}
              title="Build Your Foundation"
              description="Modern platforms engineered for performance and conversion"
              preview={['Conversion-focused websites', 'Native mobile applications', 'Custom SaaS tools']}
            />
            <ServiceCard
              icon={TrendingUp}
              title="Accelerate Growth"
              description="Intelligent systems that generate and convert leads automatically"
              preview={['Lead generation systems', 'Voice call automation', 'Content automation']}
            />
            <ServiceCard
              icon={Settings}
              title="Streamline Operations"
              description="Automation that removes friction from your daily workflow"
              preview={['Support automation', 'Hiring systems', 'Predictive analytics']}
            />
            <ServiceCard
              icon={Sparkles}
              title="Custom Engineering"
              description="Tailored solutions and training for complex challenges"
              preview={['Bespoke AI models', 'Team training programs']}
            />
          </SolutionsGrid>
          <ViewAllButton href="/services">View All Solutions</ViewAllButton>
        </SectionContainer>
      </Section>

      {/* How We Work Section */}
      <SectionWithReducedBottom id="how-we-work">
        <SectionContainer>
          <SectionTitle>From Strategy to Scale in 4 Steps</SectionTitle>
          <ProcessGrid>
            <ProcessStep
              number="01"
              title="Discovery"
              description="We analyze your business model, pain points, and growth objectives in a comprehensive strategy session."
            />
            <ProcessStep
              number="02"
              title="Blueprint"
              description="Custom automation strategy designed specifically for your needs, no templates, no shortcuts."
            />
            <ProcessStep
              number="03"
              title="Implementation"
              description="Build and integrate AI systems with your existing workflow, ensuring seamless adoption."
            />
            <ProcessStep
              number="04"
              title="Optimization"
              description="Continuous refinement to maximize ROI as your business evolves and scales."
            />
          </ProcessGrid>
        </SectionContainer>
      </SectionWithReducedBottom>

      <SectionContainer style={{ display: 'flex', justifyContent: 'center', padding: '0 1.5rem 2rem' }}>
        <ViewAllButton href="/contact">Book a Strategy Call</ViewAllButton>
      </SectionContainer>

      {/* Ready to Automate Section */}
      <Section>
        <SectionContainer>
          <SectionTitle>Ready to Automate Your Success?</SectionTitle>
          <ValueDescription style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem', fontSize: '1.125rem' }}>
            Join forward-thinking businesses that are scaling faster, working smarter, and staying ahead of the competition.
          </ValueDescription>
          <ValueGrid>
            <ValueCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ValueIcon>
                <Zap size={48} strokeWidth={1.5} />
              </ValueIcon>
              <ValueTitle>Lightning Fast Setup</ValueTitle>
              <ValueDescription>We deploy your first automation in weeks, not months. See results from day one.</ValueDescription>
            </ValueCard>

            <ValueCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ValueIcon>
                <BarChart3 size={48} strokeWidth={1.5} />
              </ValueIcon>
              <ValueTitle>Measurable ROI</ValueTitle>
              <ValueDescription>Track every hour saved, every lead captured, every deal closed. Data-driven results.</ValueDescription>
            </ValueCard>

            <ValueCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ValueIcon>
                <Rocket size={48} strokeWidth={1.5} />
              </ValueIcon>
              <ValueTitle>Future-Proof Systems</ValueTitle>
              <ValueDescription>Built to evolve with AI advancements. Your automation gets smarter over time.</ValueDescription>
            </ValueCard>
          </ValueGrid>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <ViewAllButton href="/contact">Get Started</ViewAllButton>
          </div>
        </SectionContainer>
      </Section>

      {/* FAQ Section */}
      <FAQSection>
        <SectionContainer>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <FAQList>
            {faqs.map((faq, index) => (
              <FAQItem key={index} $isOpen={openFAQ === index}>
                <FAQQuestion onClick={() => setOpenFAQ(openFAQ === index ? null : index)}>
                  {faq.question}
                  <ChevronIcon size={24} $isOpen={openFAQ === index} />
                </FAQQuestion>
                <FAQAnswer $isOpen={openFAQ === index}>{faq.answer}</FAQAnswer>
              </FAQItem>
            ))}
          </FAQList>
        </SectionContainer>
      </FAQSection>
    </>
  );
}
