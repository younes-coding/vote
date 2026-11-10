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
  height = 320,
}) => {
  return (
    <div className="chart-card bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/80 transition-all hover:shadow-md">
      <div className="mb-4">
        <h4 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-600" />
          {title}
        </h4>
        {subtitle && <p className="text-xs sm:text-sm text-slate-500 mt-1">{subtitle}</p>}
      </div>

      <div style={{ width: '100%', height }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 15, right: 10, left: 10, bottom: 25 }}
            barGap={4}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis
              dataKey="category"
              tick={{ fill: '#475569', fontSize: 11, fontFamily: 'Cairo' }}
              interval={0}
              angle={-15}
              textAnchor="end"
              height={45}
            />
            <YAxis
              tick={{ fill: '#475569', fontSize: 11, fontFamily: 'Cairo' }}
              label={
                yAxisLabel
                  ? { value: yAxisLabel, angle: -90, position: 'insideLeft', style: { fill: '#64748b', fontSize: 11 } }
                  : undefined
              }
            />
            <Tooltip content={<CustomBarTooltip />} />
            <Legend
              verticalAlign="top"
              align="center"
              wrapperStyle={{ paddingBottom: '12px', fontSize: '12px', fontFamily: 'Cairo' }}
            />
            <Bar
              name={currentLabel}
              dataKey="current"
              fill={CHART_COLORS.blueCurrent}
              radius={[4, 4, 0, 0]}
              animationDuration={1200}
            />
            <Bar
              name={targetLabel}
              dataKey="target"
              fill={CHART_COLORS.orangeTarget}
              radius={[4, 4, 0, 0]}
              animationDuration={1500}
            />
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

export const DonutPieChart: React.FC<DonutPieChartProps> = ({
  title,
  subtitle,
  totalAmount,
  data,
  height = 320,
}) => {
  return (
    <div className="chart-card bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/80 transition-all hover:shadow-md">
      <div className="mb-3">
        <h4 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-600" />
          {title}
        </h4>
        {subtitle && <p className="text-xs sm:text-sm text-slate-500 mt-1">{subtitle}</p>}
      </div>

      <div style={{ width: '100%', height }} className="relative flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={85}
              paddingAngle={3}
              dataKey="value"
              animationDuration={1200}
              label={({ shortName, value }: any) => `${shortName || ''}: ${value}%`}
              labelLine={false}
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
            <span className="text-[11px] font-semibold text-slate-400">الإجمالي</span>
            <span className="text-xs sm:text-sm font-extrabold text-slate-800 font-mono text-center">
              {totalAmount}
            </span>
          </div>
        )}
      </div>

      {/* تفاصيل المفتاح أسفل الدائرة */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-100 text-xs">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between p-1.5 rounded-lg bg-slate-50 border border-slate-100">
            <div className="flex items-center gap-1.5 overflow-hidden">
              <span
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-slate-700 truncate" title={item.name}>
                {item.shortName}
              </span>
            </div>
            <div className="font-bold text-slate-900 font-mono shrink-0">
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
  height = 320,
}) => {
  return (
    <div className="chart-card bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/80 transition-all hover:shadow-md">
      <div className="mb-4">
        <h4 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-600" />
          {title}
        </h4>
        {subtitle && <p className="text-xs sm:text-sm text-slate-500 mt-1">{subtitle}</p>}
      </div>

      <div style={{ width: '100%', height }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 15, right: 15, left: 10, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis
              dataKey="year"
              tick={{ fill: '#475569', fontSize: 11, fontFamily: 'Cairo' }}
            />
            <YAxis
              tick={{ fill: '#475569', fontSize: 11, fontFamily: 'Cairo' }}
              label={
                yAxisLabel
                  ? { value: yAxisLabel, angle: -90, position: 'insideLeft', style: { fill: '#64748b', fontSize: 11 } }
                  : undefined
              }
            />
            <Tooltip content={<CustomLineTooltip />} />
            <Legend
              verticalAlign="top"
              align="center"
              wrapperStyle={{ paddingBottom: '12px', fontSize: '12px', fontFamily: 'Cairo' }}
            />
            <Line
              type="monotone"
              dataKey={line1Key}
              name={line1Label}
              stroke={line1Color}
              strokeWidth={3}
              dot={{ r: 5, fill: line1Color, strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 7 }}
              animationDuration={1500}
            />
            <Line
              type="monotone"
              dataKey={line2Key}
              name={line2Label}
              stroke={line2Color}
              strokeWidth={3}
              dot={{ r: 5, fill: line2Color, strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 7 }}
              animationDuration={1200}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
