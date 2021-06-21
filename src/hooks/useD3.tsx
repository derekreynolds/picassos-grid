import React, { useRef } from 'react';
import * as d3 from 'd3';

export const useD3 = (renderChartFn: (arg0: any) => void, dependencies: React.DependencyList | undefined) => {
    const ref = useRef<any>();

    React.useEffect(() => {
        renderChartFn(d3.select(ref.current));
        return () => {};
      }, dependencies);
    return ref;
}