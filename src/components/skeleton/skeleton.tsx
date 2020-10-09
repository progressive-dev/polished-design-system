import React from 'react';
import { StyledSkeleton } from './styled';

export type SkeletonProps = {
    width?: number;
    height?: number;
    className?: string;
    borderRadius: string;
}

const Skeleton: React.ForwardRefRenderFunction<HTMLDivElement, SkeletonProps> = (props, ref) => {
    const {
        className,
        width = 100,
        height = 100,
        borderRadius = 'none',
    } = props;

    return (
        <StyledSkeleton 
            ref={ref}
            className={className}
            width={width}
            height={height}
            borderRadius={borderRadius}
        />
    );
}


export default React.forwardRef<HTMLDivElement, SkeletonProps>(Skeleton);