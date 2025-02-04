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

  useEffect(() => {
    const updateSize = () => {
      const screenWidth = window.innerWidth;
      setChartHeight(screenWidth < 768 ? "50vh" : "70vh");
      setFontSize(screenWidth < 768 ? 14 : 20);
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
          fontSize: fontSize,
          fontWeight: "bold",
          color: "#fff",
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
          { name: "COP Presidents", value: 40, storyId: "cop-story", itemStyle: { color: colors[0] } },
          { name: "Oil Companies", value: 30, storyId: "oil-story", itemStyle: { color: colors[1] } },
          { name: "Carbon Emissions", value: 20, storyId: "carbon-story", itemStyle: { color: colors[2] } },
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