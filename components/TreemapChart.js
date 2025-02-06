"use client";

import React, { useState, useEffect } from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { TreemapChart as EChartsTreemap } from "echarts/charts";
import { TooltipComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { cn } from "@/lib/utils"; // ShadCN helper
import { Card } from "@/components/ui/card"; // ShadCN component

// Import Story Components
import COPPresidents from "./Stories/COPPresidents/COPPresidents";
import COPStory from "@/components/Stories/COPStory/COPStory";
import GenocideStory from "@/components/Stories/GenocideStory/GenocideStory";
import LongWay from "@/components/Stories/LongWay/LongWay";
import Test from "@/components/Stories/SocialWar/SocialWar";

echarts.use([EChartsTreemap, TooltipComponent, CanvasRenderer]);

const TreemapChart = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const [isDesktop, setIsDesktop] = useState(true);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const updateSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const colors = ["#3496D3", "#2B85C3", "#2474B2", "#1D63A2", "#165392"];

  const data = [
    {
      name: "When words mean more than actions'",
      value: 40,
      storyId: "cop-story",
      subheading: "Political influence on climate action",
      itemStyle: { color: colors[0] },
    },
    {
      name: "COP presidents and going 'Back to caves'",
      value: 30,
      storyId: "oil-presidents",
      subheading: "Their role in global emissions",
      itemStyle: { color: colors[1] },
    },
    {
      name: "The Emissions of a Genocide",
      value: 20,
      storyId: "genocide-story",
      subheading: "The impact on future generations",
      itemStyle: { color: colors[2] },
    },
    {
      name: "The Long Way Round",
      value: 20,
      storyId: "long-way",
      subheading: "The impact on future generations",
      itemStyle: { color: colors[2] },
    },
  ];

  // Sort nodes by value (largest to smallest) to maintain visual scaling
  useEffect(() => {
    setSortedData([...data].sort((a, b) => b.value - a.value));
  }, []);

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
          position: "insideTopLeft",
          fontSize: 20,
          fontWeight: "bold",
          color: "#fff",
          overflow: "break",
          wordBreak: "break-word",
          width: "100%",
          lineHeight: 24,
          rich: {
            title: {
              fontSize: 20,
              fontWeight: "bold",
              color: "#fff",
              lineHeight: 24,
            },
            subheading: {
              fontSize: 16,
              fontWeight: "normal",
              color: "rgba(255, 255, 255, 0.8)",
              lineHeight: 20,
            },
          },
          formatter: (params) => {
            const { name, subheading } = params.data;
            return `{title|${name}}\n\n{subheading|${subheading}}`;
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
        data,
      },
    ],
  };

  return (
    <div className="relative w-full">
      {/* Desktop: ECharts Treemap */}
      {isDesktop ? (
        <ReactEChartsCore
          echarts={echarts}
          option={option}
          style={{ width: "100%", height: "70vh" }}
          onEvents={{
            click: (params) => {
              if (params.data?.storyId) {
                setSelectedStory(params.data.storyId);
              }
            },
          }}
        />
      ) : (
        /* Mobile: Stacked ShadCN Blocks */
        <div className="flex flex-col gap-2">
          {sortedData.map((item, index) => (
            <Card
              key={index}
              className="w-full p-4 rounded-lg text-white"
              style={{
                backgroundColor: item.itemStyle.color,
                height: `${50 + item.value}px`, // Scales height based on node value
              }}
              onClick={() => setSelectedStory(item.storyId)}
            >
              <p className="text-lg font-bold leading-tight">{item.name}</p>
            </Card>
          ))}
        </div>
      )}

      {/* Open Correct Story Component Based on ID */}
      {selectedStory === "cop-story" && <COPStory onClose={() => setSelectedStory(null)} />}
      {selectedStory === "oil-presidents" && <COPPresidents onClose={() => setSelectedStory(null)} />}
      {selectedStory === "genocide-story" && <GenocideStory onClose={() => setSelectedStory(null)} />}
      {selectedStory === "long-way" && <LongWay onClose={() => setSelectedStory(null)} />}

    </div>
  );
};

export default TreemapChart;