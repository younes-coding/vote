import React from 'react';
import type { AxisContent } from '../data/content';
import {
  GroupedBarChart,
  DonutPieChart,
  MultiLineChart,
} from './ChartComponents';
import {
  axis1PcdBudgetComparison,
  axis1ProvincialBudgetDistribution,
  axis2InfrastructureCoverage,
  axis2AgriculturalProductivityGrowth,
  axis3YouthSupportDistribution,
  axis3SportsFacilities,
  axis4TourismVsEcology,
  axis5SchoolsModernization,
  axis5SocialFundDistribution,
} from '../data/charts';
import {
  BarChart3,
  ListOrdered,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

interface AxisPageProps {
  axis: AxisContent;
}

export const AxisPage: React.FC<AxisPageProps> = ({ axis }) => {
  // Render charts based on axis id
  const renderCharts = () => {
    switch (axis.id) {
      case 1:
        return (
          <>
            <GroupedBarChart
              title={axis1PcdBudgetComparison.title}
              subtitle={axis1PcdBudgetComparison.subtitle}
              yAxisLabel={axis1PcdBudgetComparison.yAxisLabel}
              currentLabel={axis1PcdBudgetComparison.currentLabel}
              targetLabel={axis1PcdBudgetComparison.targetLabel}
              data={axis1PcdBudgetComparison.data}
              height={290}
            />
            <DonutPieChart
              title={axis1ProvincialBudgetDistribution.title}
              subtitle={axis1ProvincialBudgetDistribution.subtitle}
              totalAmount={axis1ProvincialBudgetDistribution.totalAmount}
              data={axis1ProvincialBudgetDistribution.data}
              height={280}
            />
          </>
        );

      case 2:
        return (
          <>
            <GroupedBarChart
              title={axis2InfrastructureCoverage.title}
              subtitle={axis2InfrastructureCoverage.subtitle}
              yAxisLabel={axis2InfrastructureCoverage.yAxisLabel}
              currentLabel={axis2InfrastructureCoverage.currentLabel}
              targetLabel={axis2InfrastructureCoverage.targetLabel}
              data={axis2InfrastructureCoverage.data}
              height={290}
            />
            <MultiLineChart
              title={axis2AgriculturalProductivityGrowth.title}
              subtitle={axis2AgriculturalProductivityGrowth.subtitle}
              yAxisLabel={axis2AgriculturalProductivityGrowth.yAxisLabel}
              line1Key="modernIrrigation"
              line1Label={axis2AgriculturalProductivityGrowth.line1Label}
              line1Color="#ea580c"
              line2Key="traditional"
              line2Label={axis2AgriculturalProductivityGrowth.line2Label}
              line2Color="#2563eb"
              data={axis2AgriculturalProductivityGrowth.data}
              height={280}
            />
          </>
        );

      case 3:
        return (
          <>
            <DonutPieChart
              title={axis3YouthSupportDistribution.title}
              subtitle={axis3YouthSupportDistribution.subtitle}
              data={axis3YouthSupportDistribution.data}
              height={270}
            />
            <GroupedBarChart
              title={axis3SportsFacilities.title}
              subtitle={axis3SportsFacilities.subtitle}
              yAxisLabel={axis3SportsFacilities.yAxisLabel}
              currentLabel={axis3SportsFacilities.currentLabel}
              targetLabel={axis3SportsFacilities.targetLabel}
              data={axis3SportsFacilities.data}
              height={280}
            />
          </>
        );

      case 4:
        return (
          <>
            <MultiLineChart
              title={axis4TourismVsEcology.title}
              subtitle={axis4TourismVsEcology.subtitle}
              yAxisLabel={axis4TourismVsEcology.yAxisLabel}
              line1Key="financialReturn"
              line1Label={axis4TourismVsEcology.line1Label}
              line1Color="#2563eb"
              line2Key="degradationIndex"
              line2Label={axis4TourismVsEcology.line2Label}
              line2Color="#ea580c"
              data={axis4TourismVsEcology.data}
              height={320}
            />
          </>
        );

      case 5:
        return (
          <>
            <GroupedBarChart
              title={axis5SchoolsModernization.title}
              subtitle={axis5SchoolsModernization.subtitle}
              yAxisLabel={axis5SchoolsModernization.yAxisLabel}
              currentLabel={axis5SchoolsModernization.currentLabel}
              targetLabel={axis5SchoolsModernization.targetLabel}
              data={axis5SchoolsModernization.data}
              height={290}
            />
            <DonutPieChart
              title={axis5SocialFundDistribution.title}
              subtitle={axis5SocialFundDistribution.subtitle}
              data={axis5SocialFundDistribution.data}
              height={280}
            />
          </>
        );

      default:
        return null;
    }
  };

  const hasCharts = axis.chartIds && axis.chartIds.length > 0;

  return (
    <section className="booklet-page py-6 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* رأس المحور */}
      <div className="mb-6 border-b border-slate-200 pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>المجلس الشعبي الولائي - ولاية تلمسان</span>
          <span>•</span>
          <span>القائمة 03</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
          {axis.title}
        </h2>
      </div>

      {/* تخطيط الصفحة:
          إذا كان فيه رسوم: شبكة CSS Grid بعمودين (النص في اليمين = الأول في DOM، والرسوم في اليسار = الثاني في DOM)
          على الشاشات الضيقة < 768px أو < 1024px: يتحول تلقائياً لعمود واحد (النص أولاً ثم الرسوم)
      */}
      <div
        className={
          hasCharts
            ? 'grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'
            : 'max-w-4xl mx-auto'
        }
      >
        {/* عمود النص (الأول في الـ DOM -> يمين في RTL) */}
        <div className={hasCharts ? 'lg:col-span-7 space-y-6 text-right' : 'space-y-6 text-right'}>
          {/* الواقع الإحصائي الحي إن وُجد */}
          {axis.statisticalFact && (
            <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-white rounded-2xl p-5 border border-emerald-200/90 shadow-xs">
              <div className="flex items-center gap-2 text-emerald-800 font-extrabold text-sm sm:text-base mb-2">
                <TrendingUp className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>الواقع الإحصائي الحي:</span>
              </div>
              <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-semibold">
                {axis.statisticalFact}
              </p>
              {axis.statisticalSource && (
                <div className="mt-2 text-xs text-slate-500 font-medium">
                  المصدر: {axis.statisticalSource}
                </div>
              )}
            </div>
          )}

          {/* النقاط الاستراتيجية في المحور */}
          <div className="space-y-4">
            {axis.points.map((point, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:border-emerald-300 transition-colors"
              >
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-start gap-2.5">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{point.title}</span>
                </h4>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-justify pe-2">
                  {point.description}
                </p>

                {/* النقاط الفرعية إن وُجدت (كما في المحور الخامس PDAU والصحة والمرأة) */}
                {point.subPoints && point.subPoints.length > 0 && (
                  <div className="mt-4 space-y-3 pt-3 border-t border-slate-100 ps-3">
                    {point.subPoints.map((sub, sIdx) => {
                      const [titlePart, ...descParts] = sub.split(':');
                      const desc = descParts.join(':');
                      return (
                        <div
                          key={sIdx}
                          className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/70 text-sm text-slate-700"
                        >
                          <span className="font-extrabold text-emerald-900 block mb-1">
                            • {titlePart}
                          </span>
                          <span className="leading-relaxed block text-justify">{desc}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* الخطة الإجرائية للمحور */}
          <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-md border border-slate-800">
            <div className="flex items-center gap-2 mb-4 text-amber-400 font-black text-base sm:text-lg border-b border-slate-800 pb-2">
              <ListOrdered className="w-5 h-5 shrink-0" />
              <span>{axis.actionPlanTitle}</span>
            </div>

            <div className="space-y-4">
              {axis.actionPlan.map((step) => (
                <div
                  key={step.id}
                  className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/60"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                      {step.id}
                    </span>
                    <h5 className="font-bold text-emerald-300 text-sm sm:text-base">
                      {step.title}
                    </h5>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed text-justify pe-1">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* عمود الرسوم البيانية (الثاني في الـ DOM -> يسار في RTL، وترتيب عمودي إن وُجد أكثر من رسم) */}
        {hasCharts && (
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 px-1 border-b border-slate-200 pb-1">
              <span className="flex items-center gap-1.5 text-emerald-700">
                <BarChart3 className="w-4 h-4" />
                <span>الرسوم البيانية والمؤشرات التفاعلية</span>
              </span>
              <span className="text-[11px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                بيانات رقمية مدققة
              </span>
            </div>

            {renderCharts()}
          </div>
        )}
      </div>
    </section>
  );
};
