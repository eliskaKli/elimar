import styled from "styled-components";
import { Section } from "../preComponents";
import rem from 'polished/lib/helpers/rem';

export const StyledTableMap = styled.tbody`
  align-items: flex-start;
  align-self: stretch;
  background: ${({ theme }) => theme.color.darkGreen};
  border-radius: ${({ theme }) => theme.border.radiusSm};
  display: block;
  
  padding: ${rem(8)} ${rem(16)};
  margin-bottom: ${rem(8)};
/*   width: 100%; */

  td:first-child {
    padding-right: ${rem(16)};
    max-width: 100%;
    width: ${rem(80-16)}; 
  }
`

export const StyledProgram = styled(Section)`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeights.sm};
`

export const StyledTextPart = styled.div`
  margin-top: ${rem(32)};
  padding-right: ${rem(16)};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px){
    padding-right: ${rem(56)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px){
    padding-right: ${rem(96)};
  }
`

export const StyledTablePart = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.lgMax}px){
    gap: ${rem(32)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px){
    display: grid;
    grid-template-columns: 1fr 1fr; 
  }

`

export const StyledTableSaturday = styled.div`
  order: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.lgMax}px){
    order: 0;
  }
`

export const StyledSubHeadline = styled.caption`
  font-family: ${({ theme }) => theme.fontFamilies.primary};
  font-size: ${({ theme }) => theme.fontSizes.headingMd};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: ${rem(16)};
  margin-top: ${rem(24)};  

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px){
    margin-top: ${rem(0)};  
  }
`
/* 
export const StyledTableFrSu = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px){
    
  }
` */

export const StyledTableFriday = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  order: 0;

  table {
    display: block;
  }
  

  @media (min-width: ${({ theme }) => theme.breakpoints.lgMax}px){
    order: 1;
  }

`

export const StyledTableSunday = styled.div`
  order: 3;
  max-width: 100%;

`

export const StyledTable = styled.table`
  
  display: flex;
  padding: 0;
  width: ${rem(297)};

`

/* import styled from "styled-components"
import { Section } from "../preComponents"
import rem from 'polished/lib/helpers/rem'

export const StyledTableMap = styled.tbody`
  align-items: flex-start;
  align-self: stretch;
  background: ${({ theme }) => theme.color.darkGreen};
  border-radius: ${({ theme }) => theme.border.radiusSm};
  display: flex;
  gap: ${rem(16)};
  margin-bottom: ${rem(8)};
  padding: ${rem(8)} ${rem(16)};

  tr:first-child {
    width: ${rem(80)};
  }

  tr {
    align-self: stretch;
    display: flex;
    gap: ${rem(16)};
  }

  tr:last-child {
    flex: 1 0 0;
    margin: 0 auto;
  }
`

export const StyledProgram = styled(Section)`
 margin: auto; 
`

export const StyledTextPart = styled.div`

`

export const StyledTablePart = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  
  flex-direction: column;
  gap: ${rem(32)};
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px){
    flex: 1 0 0; 
    flex-direction: row;
  }

`

export const StyledTablesFrSu = styled.div`

`

export const StyledTableSaturday = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px){
    width: ${rem(297)};
  }
`

export const StyledSubHeadline = styled.h2`
  font-family: ${({ theme }) => theme.fontFamilies.primary};
  font-size: ${({ theme }) => theme.fontSizes.headingMd};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: ${rem(16)};
`

export const StyledTableFriday = styled.div`

`

export const StyledTableSunday = styled.div`
  margin-top: ${rem(16)};

`

export const StyledTable = styled.table`

` */