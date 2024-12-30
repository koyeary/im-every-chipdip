import { useEffect, useState } from "react";
import { Tree } from "@nivo/tree";
import { getOrgChart } from "../../utils/API";

import { data } from "./data";

const Org = () => {
  const [orgData, setOrgData] = useState([]);

  const finish = (d) => {
    setOrgData(d);
    console.log(orgData);
  };

  useEffect(() => {
    getOrgChart(finish);
  }, []);

  return (
    <div style={{ height: 800, width: 600 }}>
      <h1>Organization Component</h1>
      <Tree
        activeLinkThickness={20}
        activeNodeSize={20}
        data={data}
        fixNodeColorAtDepth={1}
        height={600}
        identity="name"
        layout="top-to-bottom"
        linkColor={{
          from: "target.color",
          modifiers: [["opacity", 0.4]],
        }}
        linkThickness={12}
        linkTooltip={function noRefCheck() {}}
        margin={{
          bottom: 70,
          left: 70,
          right: 70,
          top: 70,
        }}
        mode="dendogram"
        nodeColor={{
          scheme: "tableau10",
        }}
        onLinkClick={function noRefCheck() {}}
        onLinkMouseEnter={function noRefCheck() {}}
        onLinkMouseLeave={function noRefCheck() {}}
        onLinkMouseMove={function noRefCheck() {}}
        theme={{
          labels: {
            text: {
              outlineColor: "#ffffff",
              outlineWidth: 2,
            },
          },
        }}
        width={900}
      />
    </div>
  );
};

export default Org;
