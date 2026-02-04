import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CTAWrapper = styled.section`
  padding: ${({ theme }) => `${theme.spacing[10]} ${theme.spacing[6]}`};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing[8]} ${theme.spacing[5]}`};
  }
`;

const CTAContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.reading};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[6]};
`;

const CTATitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const CTADescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
`;

const CTAButton = styled(Link)`
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[8]}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  transition: all ${({ theme }) => theme.transitions.base};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  display: inline-block;
  border: none;
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
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 40px rgba(255, 255, 255, 0.3);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

interface CTASectionProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
}

export const CTASection = ({
  title,
  description,
  buttonText,
  buttonLink,
}: CTASectionProps) => {
  return (
    <CTAWrapper>
      <CTAContainer>
        <CTATitle>{title}</CTATitle>
        {description && <CTADescription>{description}</CTADescription>}
        <CTAButton to={buttonLink}>{buttonText}</CTAButton>
      </CTAContainer>
    </CTAWrapper>
  );
};
