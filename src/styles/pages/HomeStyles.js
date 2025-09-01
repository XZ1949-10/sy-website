import styled from 'styled-components'

export const StyledHome = styled.div`
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
  }
  
  .section-title {
    font-size: var(--font-size-4xl);
    font-weight: 700;
    text-align: center;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-md);
  }
  
  .section-subtitle {
    font-size: var(--font-size-lg);
    text-align: center;
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-2xl);
  }
`