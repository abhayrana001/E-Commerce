import React from 'react'

type ContainerProps = {
    className?: string;
    children: React.ReactNode;
  }
  
  const Container = ({ className , children }: ContainerProps) => {
    return (
        <div className={`max-w-[1200px] mx-auto ${className}`}>
            {children}
        </div>
    )
}
export default Container