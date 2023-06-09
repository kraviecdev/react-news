import styled from "styled-components";

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 85vh;
  color: ${({ theme }) => theme.colors.secondaryColor};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 32px 0;
  }
`;

export const InfoTitle = styled.h3`
  margin: 22px 0 0 0;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const InfoParagraph = styled.p`
  margin: 32px 0;
  font-size: 20px;
  line-height: 28px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
