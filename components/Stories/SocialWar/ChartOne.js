"use client";

import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  ResponsiveContainer
} from "recharts";

const ChartOne = () => {
  const [data, setData] = useState([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([
    "Facebook",
    "Instagram",
    "Linkedin",
    "Snapchat"
  ]);

  useEffect(() => {
    // Hard-coded data array
    const sampleData = [
      {
        SegmentType: "Segment A",
        Facebook: 25,
        Instagram: 15,
        Linkedin: 5,
        Snapchat: 10
      },
      {
        SegmentType: "Segment B",
        Facebook: 10,
        Instagram: 20,
        Linkedin: 15,
        Snapchat: 5
      },
      {
        SegmentType: "Segment C",
        Facebook: 30,
        Instagram: 10,
        Linkedin: 20,
        Snapchat: 25
      }
    ];

    setData(sampleData);
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  const platformColours = {
    Snapchat: "#ffe45e",
    Instagram: "#ff6b6b",
    Linkedin: "#7fc8f8",
    Facebook: "#5aa9e6",
  };

  const legendItemStyle = {
    display: "flex",
    alignItems: "centre",
    marginRight: "20px",
    marginBottom: "10px",
  };

  const legendColourStyle = {
    width: "20px",
    height: "20px",
    marginRight: "5px",
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "left"
      }}
    >
      <div style={{ marginBottom: "20px", display: "flex", flexWrap: "wrap" }}>
        {selectedPlatforms.map((platform) => (
          <div key={platform} style={legendItemStyle}>
            <div
              style={{
                ...legendColourStyle,
                backgroundColor: platformColours[platform]
              }}
            ></div>
            <span>{platform}</span>
          </div>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 0, left: 2, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="0 0" />
          <XAxis dataKey="SegmentType" />
          <YAxis>
            <Label
              value="Percentage"
              angle={-90}
              position="insideLeft"
              style={{ textAnchor: "middle" }}
            />
          </YAxis>
          <Tooltip />
          {selectedPlatforms.map((platform) => (
            <Bar
              key={platform}
              dataKey={platform}
              stackId="a"
              fill={platformColours[platform]}
              fillOpacity={0.7}
              isAnimationActive={true}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartOne;