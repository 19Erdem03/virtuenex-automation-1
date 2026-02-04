'use client';

import Link from 'next/link';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
  padding: ${({ theme }) => `${theme.spacing[10]} ${theme.spacing[6]}`};
  margin-top: auto;
`;

const FooterContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.content};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing[10]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[8]};
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const FooterTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.base};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
`;

const CTAButton = styled(Link)`
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[6]}`};
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  transition: all ${({ theme }) => theme.transitions.base};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  display: inline-block;
  width: fit-content;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.background};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const Copyright = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.content};
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.spacing[8]};
  padding-top: ${({ theme }) => theme.spacing[6]};
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-align: center;
`;

export function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterColumn>
          <FooterTitle>VirtueNex Automation</FooterTitle>
          <FooterText>
            AI systems engineered to scale your business, close deals, and automate operations. Delivering results while you focus on growth.
          </FooterText>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/services">Solutions</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Ready to Scale?</FooterTitle>
          <FooterText>
            Book a free consultation and discover which AI systems will transform your business.
          </FooterText>
          <CTAButton href="/contact">Get Started</CTAButton>
        </FooterColumn>
      </FooterContainer>

      <Copyright>
        &copy; {new Date().getFullYear()} VirtueNex Automation. All rights reserved.
      </Copyright>
    </FooterWrapper>
  );
}
