import styled from 'styled-components';
import { ArrowRight, LucideIcon } from 'lucide-react';

const Card = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing[8]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  transition: all ${({ theme }) => theme.transitions.base};
  height: 100%;
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

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  flex: 1;
`;

const PreviewList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[2]};
`;

const PreviewItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.muted};
  padding-left: ${({ theme }) => theme.spacing[4]};
  position: relative;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const CardLink = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-top: ${({ theme }) => theme.spacing[2]};
  transition: gap ${({ theme }) => theme.transitions.fast};

  ${Card}:hover & {
    gap: ${({ theme }) => theme.spacing[3]};
  }
`;

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  preview?: string[];
  linkText?: string;
}

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  preview,
  linkText = 'Learn More',
}: ServiceCardProps) => {
  return (
    <Card>
      <IconWrapper>
        <Icon size={48} strokeWidth={1.5} />
      </IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {preview && preview.length > 0 && (
        <PreviewList>
          {preview.map((item, index) => (
            <PreviewItem key={index}>{item}</PreviewItem>
          ))}
        </PreviewList>
      )}
      <CardLink>
        {linkText}
        <ArrowRight size={18} />
      </CardLink>
    </Card>
  );
};
