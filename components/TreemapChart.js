"use client";

import React, { useState, useEffect } from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { TreemapChart as EChartsTreemap } from "echarts/charts";
import { TooltipComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import COPStory from "@/components/Stories/COPStory";
import OilStory from "@/components/Stories/OilStory";
import CarbonStory from "@/components/Stories/CarbonStory";

echarts.use([EChartsTreemap, TooltipComponent, CanvasRenderer]);

const TreemapChart = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const [chartHeight, setChartHeight] = useState("75vh");
  const [fontSize, setFontSize] = useState(20);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const updateSize = () => {
      const screenWidth = window.innerWidth;
      setChartHeight(screenWidth < 768 ? "50vh" : "70vh");
      setFontSize(screenWidth < 768 ? 14 : 20);
      setIsDesktop(screenWidth >= 768);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const colors = ["#3496D3", "#2B85C3", "#2474B2", "#1D63A2", "#165392"];

  const option = {
    tooltip: { show: false },
    series: [
      {
        type: "treemap",
        animationDuration: 1000,
        animationEasing: "cubicOut",
        roam: false,
        nodeClick: false,
        animationDurationUpdate: 500,
        breadcrumb: { show: false },
        label: {
          show: true,
          position: "insideTopLeft", // Aligns text to top-left
          fontSize: fontSize,
          fontWeight: "bold",
          color: "#fff",
          overflow: "break", // Ensures proper word wrapping
          wordBreak: "break-word", // Prevents cutting words in half
          width: "100%", // Allows full-width wrapping
          lineHeight: isDesktop ? 24 : 18, // Adjusts spacing
          rich: {
            title: {
              fontSize: fontSize,
              fontWeight: "bold",
              color: "#fff",
              lineHeight: 24,
            },
            subheading: {
              fontSize: isDesktop ? fontSize - 4 : 0, // Only visible on desktop
              fontWeight: "normal",
              color: "rgba(255, 255, 255, 0.8)",
              lineHeight: 20,
            },
          },
          formatter: (params) => {
            const { name, subheading } = params.data;
            return isDesktop
              ? `{title|${name}}\n\n{subheading|${subheading}}` // Forces a clean line break between title & subheading
              : `{title|${name}}`; // Mobile: Only title, no subheading
          },
        },
        itemStyle: {
          borderColor: "none",
          borderWidth: 0,
          gapWidth: 5,
          borderRadius: 5,
        },
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        data: [
          {
            name: "COP presidents and going 'Back to caves'",
            value: 40,
            storyId: "cop-story",
            subheading: "Political influence on climate action",
            itemStyle: { color: colors[0] },
          },
          {
            name: "Oil Companies and Their Global Influence",
            value: 30,
            storyId: "oil-story",
            subheading: "Their role in global emissions",
            itemStyle: { color: colors[1] },
          },
          {
            name: "Carbon Emissions and the Future of Global Energy Policies",
            value: 20,
            storyId: "carbon-story",
            subheading: "The impact on future generations",
            itemStyle: { color: colors[2] },
          },
          
        ],
      },
    ],
  };

  return (
    <div className="relative w-full" style={{ height: chartHeight }}>
      <ReactEChartsCore
        echarts={echarts}
        option={option}
        style={{ width: "100%", height: "100%" }}
        onEvents={{
          click: (params) => {
            if (params.data?.storyId) {
              setSelectedStory(params.data.storyId);
            }
          },
        }}
      />

      {/* Open Correct Story Component Based on ID */}
      {selectedStory === "cop-story" && <COPStory onClose={() => setSelectedStory(null)} />}
      {selectedStory === "oil-story" && <OilStory onClose={() => setSelectedStory(null)} />}
      {selectedStory === "carbon-story" && <CarbonStory onClose={() => setSelectedStory(null)} />}
    </div>
  );
};

export default TreemapChart;