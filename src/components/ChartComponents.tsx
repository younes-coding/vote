import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  LabelList,
} from 'recharts';
import type {
  BarChartItem,
  PieChartItem,
  LineChartItem,
} from '../data/charts';
import { CHART_COLORS } from '../data/charts';

// Custom Tooltip for Bar Charts
const CustomBarTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/95 text-white p-3 rounded-xl shadow-xl text-xs sm:text-sm border border-slate-700/60 backdrop-blur-md text-right dir-rtl">
        <p className="font-bold text-emerald-400 mb-1 border-b border-slate-700 pb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={`item-${index}`} className="flex items-center justify-between gap-4 py-0.5">
            <span className="flex items-center gap-1.5">
              <span
                className="inline-block w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-slate-300">{entry.name}:</span>
            </span>
            <span className="font-extrabold text-white font-mono">
              {entry.value} {entry.payload.unit || ''}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// Custom Tooltip for Line Charts
const CustomLineTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/95 text-white p-3 rounded-xl shadow-xl text-xs sm:text-sm border border-slate-700/60 backdrop-blur-md text-right dir-rtl">
        <p className="font-bold text-amber-400 mb-1 border-b border-slate-700 pb-1">سنة {label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={`item-${index}`} className="flex items-center justify-between gap-4 py-0.5">
            <span className="flex items-center gap-1.5">
              <span
                className="inline-block w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: entry.stroke }}
              />
              <span className="text-slate-300">{entry.name}:</span>
            </span>
            <span className="font-extrabold text-white font-mono">
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// Custom Tooltip for Pie Charts
const CustomPieTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div className="bg-slate-900/95 text-white p-3 rounded-xl shadow-xl text-xs sm:text-sm border border-slate-700/60 backdrop-blur-md text-right dir-rtl">
        <p className="font-bold text-white mb-1">{data.name}</p>
        <div className="flex items-center justify-between gap-4 py-0.5">
          <span className="text-emerald-400">النسبة المئوية:</span>
          <span className="font-extrabold font-mono text-white">{data.value}%</span>
        </div>
        {data.payload.amount && (
          <div className="flex items-center justify-between gap-4 py-0.5 text-slate-300">
            <span>القيمة المقدرة:</span>
            <span className="font-bold text-amber-400">{data.payload.amount}</span>
          </div>
        )}
      </div>
    );
  }
  return null;
};

// Custom X-Axis Tick that splits text into two lines nicely without overlapping
const CustomXAxisTick = ({ x, y, payload }: any) => {
  const value = payload.value || '';
  const words = value.split(' ');

  let line1 = value;
  let line2 = '';

  if (words.length > 2) {
    const mid = Math.ceil(words.length / 2);
    line1 = words.slice(0, mid).join(' ');
    line2 = words.slice(mid).join(' ');
  }

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={10}
        textAnchor="middle"
        fill="#1e293b"
        fontSize={11}
        fontWeight={700}
        fontFamily="Cairo"
      >
        {line2 ? (
          <>
            <tspan x={0} dy={10}>
              {line1}
            </tspan>
            <tspan x={0} dy={15}>
              {line2}
            </tspan>
          </>
        ) : (
          <tspan x={0} dy={14}>
            {line1}
          </tspan>
        )}
      </text>
    </g>
  );
};

// =====================================
// مكون الرسم البياني بالأعمدة المزدوجة
// =====================================
interface GroupedBarChartProps {
  title: string;
  subtitle?: string;
  yAxisLabel?: string;
  currentLabel: string;
  targetLabel: string;
  data: BarChartItem[];
  height?: number;
}

export const GroupedBarChart: React.FC<GroupedBarChartProps> = ({
  title,
  subtitle,
  yAxisLabel,
  currentLabel,
  targetLabel,
  data,
  height = 360,
}) => {
  // Find maximum value to set a comfortable domain for labels on top of bars
  const maxValue = Math.max(
    ...data.flatMap((d) => [d.current, d.target]),
    10
  );
  const yDomainMax = Math.ceil(maxValue * 1.25);

  return (
    <div className="chart-card bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/90 transition-all hover:shadow-md">
      <div className="mb-3 text-right">
        <h4 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-600" />
          {title}
        </h4>
        {subtitle && <p className="text-xs sm:text-sm text-slate-500 mt-1">{subtitle}</p>}
      </div>

      <div style={{ width: '100%', height, direction: 'ltr' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 25, right: 15, left: 10, bottom: 45 }}
            barGap={4}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis
              dataKey="category"
              interval={0}
              height={50}
              tick={<CustomXAxisTick />}
            />
            <YAxis
              tick={{ fill: '#475569', fontSize: 11, fontFamily: 'Cairo', fontWeight: 600 }}
              domain={[0, yDomainMax]}
              label={
                yAxisLabel
                  ? { value: yAxisLabel, angle: -90, position: 'insideLeft', style: { fill: '#475569', fontSize: 11, fontWeight: 'bold' } }
                  : undefined
              }
            />
            <Tooltip content={<CustomBarTooltip />} />
            <Legend
              verticalAlign="top"
              align="center"
              wrapperStyle={{ paddingBottom: '16px', fontSize: '12px', fontWeight: 'bold', fontFamily: 'Cairo' }}
            />
            <Bar
              name={currentLabel}
              dataKey="current"
              fill={CHART_COLORS.blueCurrent}
              radius={[6, 6, 0, 0]}
              animationDuration={1200}
            >
              <LabelList
                dataKey="current"
                position="top"
                fill="#1e293b"
                fontSize={11}
                fontWeight="800"
                fontFamily="Cairo"
                formatter={(val: any) => `${val}${data[0]?.unit === '%' ? '%' : ''}`}
              />
            </Bar>
            <Bar
              name={targetLabel}
              dataKey="target"
              fill={CHART_COLORS.orangeTarget}
              radius={[6, 6, 0, 0]}
              animationDuration={1500}
            >
              <LabelList
                dataKey="target"
                position="top"
                fill="#c2410c"
                fontSize={11}
                fontWeight="800"
                fontFamily="Cairo"
                formatter={(val: any) => `${val}${data[0]?.unit === '%' ? '%' : ''}`}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// =====================================
// مكون الرسم البياني الدائري (Donut/Pie)
// =====================================
interface DonutPieChartProps {
  title: string;
  subtitle?: string;
  totalAmount?: string;
  data: PieChartItem[];
  height?: number;
}

const RADIAN = Math.PI / 180;
// Render bold, highly legible labels inside each pie slice so they never clip
const renderCustomizedPieLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  shortName,
  value,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.55;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#ffffff"
      textAnchor="middle"
      dominantBaseline="central"
      fontFamily="Cairo"
      fontWeight={800}
    >
      <tspan x={x} dy="-0.6em" fontSize="11" fontWeight={700}>
        {shortName}
      </tspan>
      <tspan x={x} dy="1.4em" fontSize="13" fontWeight={900}>
        {value}%
      </tspan>
    </text>
  );
};

export const DonutPieChart: React.FC<DonutPieChartProps> = ({
  title,
  subtitle,
  totalAmount,
  data,
  height = 320,
}) => {
  return (
    <div className="chart-card bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/90 transition-all hover:shadow-md">
      <div className="mb-2 text-right">
        <h4 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-600" />
          {title}
        </h4>
        {subtitle && <p className="text-xs sm:text-sm text-slate-500 mt-1">{subtitle}</p>}
      </div>

      <div style={{ width: '100%', height, direction: 'ltr' }} className="relative flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={38}
              outerRadius={95}
              paddingAngle={3}
              dataKey="value"
              animationDuration={1200}
              labelLine={false}
              label={renderCustomizedPieLabel}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomPieTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        {totalAmount && (
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-[10px] font-bold text-slate-400">الإجمالي</span>
            <span className="text-xs sm:text-sm font-extrabold text-slate-800 font-mono text-center">
              {totalAmount}
            </span>
          </div>
        )}
      </div>

      {/* تفاصيل المفتاح أسفل الدائرة بخط واضح ومقروء */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 pt-3 border-t border-slate-100 text-xs">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
            <div className="flex items-center gap-2 overflow-hidden">
              <span
                className="w-3.5 h-3.5 rounded-full shrink-0 shadow-xs"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-slate-800 font-bold truncate" title={item.name}>
                {item.shortName}
              </span>
            </div>
            <div className="font-extrabold text-emerald-800 font-mono shrink-0 text-sm">
              {item.value}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// =====================================
// مكون الرسم البياني الخطي (Line Chart)
// =====================================
interface MultiLineChartProps {
  title: string;
  subtitle?: string;
  yAxisLabel?: string;
  line1Key: string;
  line1Label: string;
  line1Color?: string;
  line2Key: string;
  line2Label: string;
  line2Color?: string;
  data: LineChartItem[];
  height?: number;
}

export const MultiLineChart: React.FC<MultiLineChartProps> = ({
  title,
  subtitle,
  yAxisLabel,
  line1Key,
  line1Label,
  line1Color = CHART_COLORS.orangeTarget,
  line2Key,
  line2Label,
  line2Color = CHART_COLORS.blueCurrent,
  data,
  height = 340,
}) => {
  return (
    <div className="chart-card bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/90 transition-all hover:shadow-md">
      <div className="mb-3 text-right">
        <h4 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-600" />
          {title}
        </h4>
        {subtitle && <p className="text-xs sm:text-sm text-slate-500 mt-1">{subtitle}</p>}
      </div>

      <div style={{ width: '100%', height, direction: 'ltr' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 25, right: 25, left: 10, bottom: 25 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis
              dataKey="year"
              tick={{ fill: '#1e293b', fontSize: 12, fontFamily: 'Cairo', fontWeight: 700 }}
              dy={5}
            />
            <YAxis
              tick={{ fill: '#475569', fontSize: 11, fontFamily: 'Cairo', fontWeight: 600 }}
              label={
                yAxisLabel
                  ? { value: yAxisLabel, angle: -90, position: 'insideLeft', style: { fill: '#475569', fontSize: 11, fontWeight: 'bold' } }
                  : undefined
              }
            />
            <Tooltip content={<CustomLineTooltip />} />
            <Legend
              verticalAlign="top"
              align="center"
              wrapperStyle={{ paddingBottom: '16px', fontSize: '12px', fontWeight: 'bold', fontFamily: 'Cairo' }}
            />
            <Line
              type="monotone"
              dataKey={line1Key}
              name={line1Label}
              stroke={line1Color}
              strokeWidth={3.5}
              dot={{ r: 5, fill: line1Color, strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 7 }}
              animationDuration={1500}
            >
              <LabelList
                dataKey={line1Key}
                position="top"
                fill={line1Color}
                fontSize={11}
                fontWeight="800"
                fontFamily="Cairo"
                offset={8}
              />
            </Line>
            <Line
              type="monotone"
              dataKey={line2Key}
              name={line2Label}
              stroke={line2Color}
              strokeWidth={3.5}
              dot={{ r: 5, fill: line2Color, strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 7 }}
              animationDuration={1200}
            >
              <LabelList
                dataKey={line2Key}
                position="bottom"
                fill={line2Color}
                fontSize={11}
                fontWeight="800"
                fontFamily="Cairo"
                offset={8}
              />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
