'use client';

import React from 'react';
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
} from 'recharts';
import {
  ValueType,
  NameType,
} from 'recharts/types/component/DefaultTooltipContent';

interface ChartEntry {
  time: string;
  thisMonth: number;
  lastMonth: number;
}

const chartData: ChartEntry[] = [
  { time: '01', thisMonth: 8, lastMonth: 6 },
  { time: '02', thisMonth: 6, lastMonth: 7 },
  { time: '03', thisMonth: 7, lastMonth: 6 },
  { time: '04', thisMonth: 4, lastMonth: 8 },
  { time: '05', thisMonth: 9, lastMonth: 5 },
  { time: '06', thisMonth: 5, lastMonth: 7 },
  { time: '07', thisMonth: 8, lastMonth: 6 },
];

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const thisMonth =
      payload.find((p) => p.dataKey === 'thisMonth')?.value ?? 0;
    const lastMonth =
      payload.find((p) => p.dataKey === 'lastMonth')?.value ?? 0;

    return (
      <div className="bg-gray-800 text-white p-3 rounded-lg shadow-lg text-sm">
        <div className="font-medium mb-1">{label} July 2025</div>
        <div className="space-y-1">
          <div>
            This month: <span className="font-medium">{thisMonth}h</span>
          </div>
          <div>
            Last month: <span className="font-medium">{lastMonth}h</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default function PerformanceChart() {
  return (
    <div className="w-full  mx-auto">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-base font-medium ">Your Performance</h2>
        </div>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 0, right: 20, left: 10, bottom: 10 }}
          >
            <defs>
              <linearGradient
                id="thisMonthGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="40%" stopColor="#6366f1" stopOpacity={0.1} />
                <stop
                  offset="60%"
                  stopColor="var(--color-chart)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient
                id="lastMonthGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              ></linearGradient>
            </defs>
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#64748b', fontWeight: 600, dy: 20 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#64748b', fontWeight: 600, dx: -10 }}
              tickFormatter={(value: number) => `${value}h`}
              width={30}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="thisMonth"
              stroke="var(--color-chart-this-month)"
              strokeWidth={2}
              fill="url(#thisMonthGradient)"
              dot={{
                fill: 'var(--color-chart-this-month)',
                strokeWidth: 2,
                r: 3,
              }}
              activeDot={{ r: 5, fill: 'var(--color-chart-this-month)' }}
            />
            <Area
              type="monotone"
              dataKey="lastMonth"
              stroke="var(--color-chart-last-month)"
              strokeWidth={2}
              fill="url(#lastMonthGradient)"
              dot={{
                fill: 'var(--color-chart-last-month)',
                strokeWidth: 2,
                r: 3,
              }}
              activeDot={{ r: 5, fill: 'var(--color-chart-last-month)' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex items-center justify-center space-x-4 text-sm">
        <div className="flex justify-center items-center space-x-2">
          <div className="w-3 h-3 bg-chart-this-month rounded-full"></div>
          <span>This month</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-chart-last-month rounded-full"></div>
          <span>Last month</span>
        </div>
      </div>
    </div>
  );
}
