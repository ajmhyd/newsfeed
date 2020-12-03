import React, { ReactElement, ReactNode } from 'react'
import { render } from '@testing-library/react'

type AllTheProvidersProps = {
  children: ReactNode,
}

const AllTheProviders = ({ children }: AllTheProvidersProps) => {
  return <>{children}</>
}

const customRender = (ui: ReactElement, options?: OptionalType) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
