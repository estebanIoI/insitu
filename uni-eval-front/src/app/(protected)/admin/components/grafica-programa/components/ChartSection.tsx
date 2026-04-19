"use client";
import React from "react";
import { ChartContainer, ChartTooltip, ChartConfig } from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  LabelList,
} from "recharts";
import { CustomChartTooltip } from "./CustomChartTooltip";
import type { ChartDataItem } from "../utils/chartDataHelper";

interface ChartSectionProps {
  chartData: ChartDataItem[];
  hasSelected: boolean;
  onBarClick: (programaCompleto: string, tipo: "completadas" | "pendientes") => void;
  onProgramaClick?: (programaCompleto: string) => void;
  programaSeleccionado?: string;
}

const chartConfig: ChartConfig = {
  completadas: {
    label: "Completadas",
    color: "hsl(221, 83%, 53%)",
  },
  pendientes: {
    label: "Pendientes",
    color: "hsl(220, 8%, 85%)",
  },
};

// Custom bar shape for completadas: minimum 6px when value > 0, nothing when 0
const CompletadasShape = (props: any) => {
  const { x, y, width, height, value, fill } = props;
  if (!value || value === 0) return null;
  const drawWidth = Math.max(width || 0, 6);
  return <rect x={x} y={y} width={drawWidth} height={height} fill={fill} rx={2} />;
};

export const ChartSection: React.FC<ChartSectionProps> = ({
  chartData,
  hasSelected,
  onBarClick,
  onProgramaClick,
  programaSeleccionado,
}) => {
  const CustomYAxisTick = (props: any) => {
    const { x, y, payload } = props;
    const programaData = chartData.find((d) => d.name === payload.value);
    const isSelected = programaData?.programaCompleto === programaSeleccionado;

    return (
      <g transform={`translate(${x},${y})`}>
        <rect
          x={-5}
          y={-12}
          width={270}
          height={24}
          fill={isSelected ? "hsl(221, 83%, 93%)" : "transparent"}
          rx={4}
        />
        <text
          x={0}
          y={0}
          dy={4}
          textAnchor="end"
          fill={isSelected ? "hsl(221, 83%, 53%)" : "#6b7280"}
          fontSize={13}
          fontWeight={isSelected ? "600" : "500"}
          className={onProgramaClick ? "cursor-pointer transition-colors" : ""}
          onClick={() => {
            if (onProgramaClick && programaData) {
              onProgramaClick(programaData.programaCompleto);
            }
          }}
        >
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <>
      <div className="w-full" style={{ height: `${Math.max(400, chartData.length * 50)}px` }}>
        <ChartContainer config={chartConfig} className="h-full w-full">
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 20, right: 50, left: 260, bottom: 20 }}
            barGap={0}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={true} stroke="#e5e7eb" />
            <XAxis
              type="number"
              tick={{ fill: "#6b7280", fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: "#e5e7eb" }}
            />
            <YAxis
              dataKey="name"
              type="category"
              tick={<CustomYAxisTick />}
              tickLine={false}
              axisLine={{ stroke: "#e5e7eb" }}
              width={280}
            />
            <ChartTooltip content={<CustomChartTooltip />} />

            {/* Barra de completadas: shape custom para mínimo visible solo cuando value > 0 */}
            <Bar
              dataKey="completadas"
              stackId="stack"
              fill="hsl(221, 83%, 53%)"
              maxBarSize={80}
              cursor="pointer"
              shape={<CompletadasShape />}
              onClick={(data) => onBarClick(data.programaCompleto, "completadas")}
            >
              {chartData.map((data, index) => {
                const isSelected = data.programaCompleto === programaSeleccionado;
                let fillColor = "hsl(221, 83%, 53%)";
                if (isSelected) fillColor = "hsl(221, 83%, 43%)";
                else if (programaSeleccionado && !isSelected) fillColor = "hsl(215, 16%, 85%)";
                return (
                  <Cell
                    key={`completadas-${index}`}
                    className={isSelected ? "drop-shadow-lg" : ""}
                    fill={fillColor}
                  />
                );
              })}
            </Bar>

            {/* Barra de pendientes: lleva el label de completadas para que quede encima de todo */}
            <Bar
              dataKey="pendientes"
              stackId="stack"
              fill="hsl(220, 8%, 85%)"
              radius={[4, 4, 4, 4]}
              maxBarSize={80}
              cursor="pointer"
              onClick={(data) => onBarClick(data.programaCompleto, "pendientes")}
            >
              {chartData.map((data, index) => {
                const isSelected = data.programaCompleto === programaSeleccionado;
                let fillColor = "hsl(220, 8%, 85%)";
                if (isSelected) fillColor = "hsl(220, 8%, 70%)";
                else if (programaSeleccionado && !isSelected) fillColor = "hsl(215, 16%, 85%)";
                return (
                  <Cell
                    key={`pendientes-${index}`}
                    className={isSelected ? "drop-shadow-lg" : ""}
                    fill={fillColor}
                  />
                );
              })}
              {/* Label de completadas renderizado aquí (después de pendientes) para quedar visible */}
              <LabelList
                dataKey="completadas"
                position="right"
                content={(props: any) => {
                  const { x, y, width, height, value } = props;
                  if (!value || value === 0) return null;
                  return (
                    <text
                      x={x + (width || 0) + 6}
                      y={y + (height || 0) / 2}
                      fill="hsl(221, 83%, 35%)"
                      fontSize={11}
                      fontWeight={700}
                      dominantBaseline="middle"
                    >
                      ✓{value}
                    </text>
                  );
                }}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </div>

      {/* Leyenda */}
      <div className="flex items-center justify-center gap-8 mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-blue-500"></div>
          <span className="text-sm font-medium text-gray-700">Evaluaciones Completadas</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gray-300"></div>
          <span className="text-sm font-medium text-gray-700">Evaluaciones Pendientes</span>
        </div>
      </div>
    </>
  );
};
