import React from 'react';
import Graph from "react-graph-vis";
import { data } from '../../data';

const Network = () => {    
      const options = {
        nodes: {
            shape: "circle",
            color: {
                border: "gold",
                background: "white"
            }
        },
        edges: {
          color: "gold",
          arrows: {
            to: {
                enabled: false,
                scaleFactor: 0
              }
          },
        },
        physics: {
            enabled: false,
            solver: 'forceAtlas2Based'
        },
        height: "1000px"
      };

      return (
        <Graph
          graph={data.network}
          options={options}
        />
      );
}

export default Network