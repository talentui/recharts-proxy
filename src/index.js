import React from "react";
const generateChart = type => {
    class Chart extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
            this.load();
        }
        load() {
            System.import(
                "https://cdnjs.cloudflare.com/ajax/libs/recharts/1.3.5/Recharts.min.js"
            ).then(rechart => {
                this.setState({
                    rechart: rechart.default
                });
            });
        }    
        render() {
            const { rechart } = this.state;
            if (!rechart) return null;
            const CurChart = rechart[type];
            const newChildren = loopChildren(this, rechart);
            return (
                <CurChart {...this.props}>
                    {newChildren.length == 1
                        ? React.Children.only(newChildren[0])
                        : newChildren}
                </CurChart>
            );
        }
    }
    Chart.displayName = type;
    return Chart;
};

//遍历children
const loopChildren = function(ele, rechart) {
    const { children } = ele.props;
    if (!children) return null;
    return React.Children.map(children, child => {
        const { type: Type } = child;
        const name = Type.displayName || Type.name;
        if (rechart[name]) {
            const CompClass = rechart[name];
            return (
                <CompClass {...child.props}>
                    {loopChildren(child, rechart)}
                </CompClass>
            );
        }
        return <Type {...ele.props}>{loopChildren(child, rechart)}</Type>;
    });
};
//所有的chart模块
export const BarChart = generateChart("BarChart");
export const LineChart = generateChart("LineChart");
export const AreaChart = generateChart("AreaChart");
export const ComposedChart = generateChart("ComposedChart");
export const PieChart = generateChart("PieChart");
export const RadarChart = generateChart("RadarChart");
export const RadialBarChart = generateChart("RadialBarChart");
export const ScatterChart = generateChart("ScatterChart");
export const Treemap = generateChart("Treemap");
export const ResponsiveContainer = generateChart("ResponsiveContainer");
export const Sector = generateChart("Sector");

export const Layer = () => {};
export const Legend = () => {};
export const Tooltip = () => {};
export const Cell = () => {};
export const Text = () => {};
export const Label = () => {};
export const LabelList = () => {};
export const Curve = () => {};
export const Rectangle = () => {};
export const Polygon = () => {};
export const Dot = () => {};
export const Cross = () => {};
export const Symbols = () => {};
export const PolarGrid = () => {};
export const PolarRadiusAxis = () => {};
export const PolarAngleAxis = () => {};
export const Pie = () => {};
export const Radar = () => {};
export const RadialBar = () => {};
export const Brush = () => {};
export const ReferenceLine = () => {};
export const ReferenceDot = () => {};
export const ReferenceArea = () => {};
export const CartesianAxis = () => {};
export const CartesianGrid = () => {};
export const Line = () => {};
export const Area = () => {};
export const Bar = () => {};
export const Scatter = () => {};
export const XAxis = () => {};
export const YAxis = () => {};
export const ZAxis = () => {};
export const ErrorBar = () => {};