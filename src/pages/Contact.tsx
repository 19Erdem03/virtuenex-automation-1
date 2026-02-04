import { useState, FormEvent } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Clock, CheckCircle } from 'lucide-react';

const PageWrapper = styled.div`
  padding-top: 80px;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing[12]} ${theme.spacing[6]}`};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing[8]} ${theme.spacing[5]}`};
  }
`;

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 700px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.lineHeights.relaxed};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const FormSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing[8]} ${theme.spacing[6]} ${theme.spacing[16]}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing[6]} ${theme.spacing[5]} ${theme.spacing[12]}`};
  }
`;

const FormContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.content};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${({ theme }) => theme.spacing[10]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[8]};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Required = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-left: ${({ theme }) => theme.spacing[1]};
`;

const Input = styled.input<{ $hasError?: boolean }>`
  padding: ${({ theme }) => theme.spacing[4]};
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${({ theme, $hasError }) =>
    $hasError ? '#ff4444' : theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all ${({ theme }) => theme.transitions.base};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.muted};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme, $hasError }) =>
      $hasError ? '#ff4444' : theme.colors.border.focus};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.glow};
  }
`;

const Textarea = styled.textarea<{ $hasError?: boolean }>`
  padding: ${({ theme }) => theme.spacing[4]};
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${({ theme, $hasError }) =>
    $hasError ? '#ff4444' : theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.text.primary};
  min-height: 150px;
  resize: vertical;
  font-family: inherit;
  transition: all ${({ theme }) => theme.transitions.base};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.muted};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme, $hasError }) =>
      $hasError ? '#ff4444' : theme.colors.border.focus};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.glow};
  }
`;

const ErrorMessage = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: #ff4444;
`;

const SubmitButton = styled.button<{ $loading?: boolean }>`
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[8]}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  transition: all ${({ theme }) => theme.transitions.base};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  cursor: ${({ $loading }) => ($loading ? 'not-allowed' : 'pointer')};
  opacity: ${({ $loading }) => ($loading ? 0.6 : 1)};
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

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 40px rgba(255, 255, 255, 0.3);

    &::before {
      opacity: 1;
    }
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
`;

const SidebarCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing[6]};
`;

const SidebarTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const SidebarText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

const ProcessList = styled.ol`
  list-style: none;
  counter-reset: step-counter;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const ProcessItem = styled.li`
  counter-increment: step-counter;
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.text.secondary};

  &::before {
    content: counter(step-counter);
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.text.primary};
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.colors.border.default};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    flex-shrink: 0;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

const SuccessMessage = styled(motion.div)`
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[6]};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  text-align: center;
`;

const SuccessTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: #22c55e;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const SuccessText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
`;

interface FormData {
  name: string;
  email: string;
  company: string;
  website: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    website: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Project details are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Send to webhook
      const response = await fetch('https://n8n.zaquor.com/webhook/submitted-from', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      console.log('Form submitted successfully:', formData);
      setSuccess(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        website: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <PageWrapper>
      <HeroSection>
        <HeroTitle>Let's Build Your AI-Powered Future</HeroTitle>
        <HeroSubtitle>
          Tell us about your business and we'll show you exactly how AI automation can help you scale.
        </HeroSubtitle>
      </HeroSection>

      <FormSection>
        <FormContainer>
          <div>
            {success ? (
              <SuccessMessage
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <SuccessTitle>
                  <CheckCircle size={32} />
                  Thank You!
                </SuccessTitle>
                <SuccessText>
                  We've received your message and will get back to you within 24 hours with a custom strategy for your business.
                </SuccessText>
              </SuccessMessage>
            ) : (
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>
                    Name <Required>*</Required>
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    $hasError={!!errors.name}
                  />
                  {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label>
                    Email <Required>*</Required>
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    $hasError={!!errors.email}
                  />
                  {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label>
                    Company Name <Required>*</Required>
                  </Label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    $hasError={!!errors.company}
                  />
                  {errors.company && <ErrorMessage>{errors.company}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label>Website</Label>
                  <Input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://yourcompany.com"
                  />
                </FormGroup>

                <FormGroup>
                  <Label>
                    Project Details <Required>*</Required>
                  </Label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business, challenges, and what you're looking to achieve with AI automation..."
                    $hasError={!!errors.message}
                  />
                  {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
                </FormGroup>

                <SubmitButton type="submit" $loading={loading} disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </SubmitButton>
              </Form>
            )}
          </div>

          <Sidebar>
            <SidebarCard>
              <SidebarTitle>What Happens Next?</SidebarTitle>
              <ProcessList>
                <ProcessItem>You fill out the form with details about your business and goals</ProcessItem>
                <ProcessItem>We review your submission and prepare a custom strategy</ProcessItem>
                <ProcessItem>We schedule a call to walk you through exactly how we can help</ProcessItem>
              </ProcessList>
            </SidebarCard>

            <SidebarCard>
              <SidebarTitle>Contact Information</SidebarTitle>
              <SidebarText>
                Fill out the form and we'll get back to you within 24 hours with a custom strategy for your business.
              </SidebarText>
              <ContactInfo>
                <Clock size={20} />
                Response within 24 hours
              </ContactInfo>
            </SidebarCard>
          </Sidebar>
        </FormContainer>
      </FormSection>
    </PageWrapper>
  );
};
