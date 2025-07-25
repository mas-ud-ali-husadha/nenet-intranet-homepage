'use client';

import React from 'react';
import {
  Bar,
  BarChart,
  XAxis,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
} from 'recharts';
import {
  ValueType,
  NameType,
} from 'recharts/types/component/DefaultTooltipContent';

export interface ChartEntry {
  label: string;
  value: number;
}

interface PerformanceChartProps {
  title: string;
  icon: React.ReactNode;
  stat: number | string;
  chartData: ChartEntry[];
  barColor?: string;
}

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const value = payload.find((p) => p.dataKey === 'value')?.value ?? 0;

    return (
      <div className="bg-gray-800 text-white p-3 rounded-lg shadow-lg text-sm">
        {label} : <span className="font-medium">{value}</span>
      </div>
    );
  }
  return null;
};

const CardStats = ({
  title,
  icon,
  stat,
  chartData,
  barColor = 'var(--color-chart-this-month)',
}: PerformanceChartProps) => {
  return (
    <div className="w-full mx-auto">
      <div className="bg-card pt-4 px-5 w-full rounded-lg shadow-md border-l-4 border-card-border hover:shadow-lg transition-shadow duration-200">
        <div className="flex gap-2">
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold mb-2 leading-tight h-9">
              {title}
            </h3>
            <div className="flex gap-2 items-center">
              <div className="h-10 w-10 rounded-full flex items-center justify-center bg-sidebar">
                {icon}
              </div>
              <div className="text-xl font-bold">{stat}</div>
            </div>
          </div>
          <div className="w-full h-24">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                barGap={1}
              >
                <XAxis
                  dataKey="label"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fontSize: 12,
                    fill: '#64748b',
                    fontWeight: 600,
                  }}
                />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: 'transparent' }}
                />
                <Bar dataKey="value" fill={barColor} radius={[5, 5, 5, 5]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStats;
