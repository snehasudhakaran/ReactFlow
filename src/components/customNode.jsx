import React from 'react';
import { BiMessageRoundedDetail } from "react-icons/bi"; // Importing an icon
import { Handle } from 'reactflow'; // Importing Handle from React Flow

const CustomNode = ({ data }) => {
    return (
        // Node container with custom styles
        <div style={nodeStyle}>
            {/* Node header with icon and title */}
            <div className='whatsapp d-flex justify-content-between align-items-center'>
                <div className='sendingmsg d-flex align-items-center gap-1'>
                    <BiMessageRoundedDetail style={{ fontSize: '8px' }} />
                    <span>Send Message</span>
                </div>
                {/* SVG for additional design/decoration */}
                <svg width="12" height="12" preserveAspectRatio="xMidYMid" viewBox="0 0 256 257">
                    <filter id="a" height="200%" width="200%" x="-50%" y="-50%">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="3"/>
                    </filter>
                    <linearGradient id="b" x1="49.998491%" x2="49.998491%" y1="99.992935%" y2="-.005588%">
                        <stop offset="0" stopColor="#20b038"/>
                        <stop offset="1" stopColor="#60d66a"/>
                    </linearGradient>
                    <g transform="translate(6 7)">
                        <path d="m.29672013 244 17.15549617-62.594378c-10.54831183-18.314651-16.17021429-39.121486-16.11225654-60.391983 0-66.651421 54.24846084-120.8419241 120.89988224-120.8419241 32.340428 0 62.710293 12.5768333 85.487692 35.4121897 22.835356 22.8353564 35.412189 53.2052213 35.354232 85.4876924 0 66.651421-54.248461 120.841924-120.899882 120.841924h-.057958c-20.227257 0-40.106768-5.100283-57.783884-14.721271zm67.05712527-38.715782 3.6513387 2.202395c15.4167634 9.157326 33.0938799 13.967819 51.1187419 14.025777h.057958c55.349658 0 100.440793-45.033177 100.440793-100.440793 0-26.834442-10.432396-52.0460664-29.384583-71.0562108-18.952186-19.0101444-44.221769-29.4425407-71.05621-29.4425407-55.4076162 0-100.4987514 45.0331774-100.4987514 100.4407935 0 18.952187 5.2741559 37.440711 15.3588057 53.437052l2.376268 3.825212-10.1426075 37.035007z" fillOpacity=".24" filter="url(#a)"/>
                        <path d="m5.7810682 237.538941 16.3701535-59.699546c-10.0739406-17.457681-15.39710242-37.319371-15.39710242-57.581729 0-63.5345117 51.74342232-115.22069569 115.22069572-115.22069569 30.851443 0 59.756784 12.02004279 81.507338 33.77059639s33.713358 50.7131329 33.713358 81.5073373c0 63.534512-51.743422 115.220696-115.220696 115.220696h-.057238c-19.289307 0-38.2351839-4.865255-55.0632438-14.023383z" fill="url(#b)"/>
                        <g fill="#fff">
                            <path d="m1.60267237 241.717337 16.94253653-61.817363c-10.41737044-18.087303-15.96948545-38.635852-15.91224715-59.642308 0-65.8240437 53.57504785-119.34185322 119.39909125-119.34185322 31.938971 0 61.93184 12.42071092 84.426491 34.97260072 22.55189 22.5518898 34.972601 52.5447584 34.915363 84.4264905 0 65.824044-53.575048 119.341854-119.399092 119.341854h-.057238c-19.976166 0-39.6089031-5.03697-57.0665842-14.538528zm66.22471193-38.235184 3.6060128 2.175055c15.2253876 9.043652 32.6830689 13.79443 50.4841799 13.851669h.057238c54.662576 0 99.193972-44.474159 99.193972-99.193973 0-26.501332-10.302894-51.399992-29.019817-70.1741541-18.716924-18.7741621-43.672822-29.0770559-70.174155-29.0770559-54.7198137 0-99.2512103 44.4741583-99.2512103 99.193972 0 18.716924 5.2086852 36.975941 15.1681492 52.773712l2.3467703 3.777728-10.0167023 36.575273z"/>
                            <path d="m92.1536614 70.2886312c-2.2322937-4.9797321-4.5790639-5.0942086-6.696881-5.1514469-1.717149-.0572383-3.7204894-.0572383-5.7238299-.0572383s-5.2086852.7440978-7.9561236 3.7204894c-2.7474383 2.9763915-10.4173704 10.1884172-10.4173704 24.89866 0 14.6530046 10.7035619 28.8481026 12.1917577 30.8514436 1.4881958 2.00334 20.6630259 33.083736 50.9420858 45.046541 25.184852 9.959464 30.336299 7.956123 35.773937 7.440979 5.494877-.515145 17.629396-7.212026 20.147881-14.195098 2.461247-6.983073 2.461247-12.935856 1.717149-14.195099-.744097-1.259242-2.747438-2.00334-5.72383-3.491536-2.976391-1.488196-17.629396-8.700221-20.376834-9.730511-2.747438-1.030289-4.750779-1.488195-6.696881 1.488196-2.00334 2.976392-7.72717 9.673273-9.444319 11.676613-1.717149 2.003341-3.491537 2.232294-6.467928.744098-2.976392-1.488196-12.592426-4.636302-23.982847-14.824719-8.871937-7.898886-14.8819581-17.686635-16.599107-20.663026-1.717149-2.976392-.1717149-4.579064 1.3164808-6.06726 1.3164809-1.316481 2.9763916-3.491536 4.4645874-5.208685s2.0033408-2.9763918 2.9763918-4.9797322c.973051-2.0033405.515144-3.7204895-.228953-5.2086852-.744098-1.4881958-6.5824049-16.1984386-9.2153666-22.0939834z"/>
                        </g>
                    </g>
                </svg>
            </div>

            {/* Node label */}
            <div style={labelStyle}>
                {data.label}
            </div>
            
            {/* Handles for connecting nodes */}
            <Handle type="target" position="left" id="target" style={{ top: '50%', transform: 'translateY(-50%)', ...handleStyle }} />
            <Handle type="source" position="right" id="source" style={{ top: '50%', transform: 'translateY(-50%)', ...handleStyle }} />
        </div>
    );
};

// Styles for the node container
const nodeStyle = {
    border: '1px solid #ddd',
    borderRadius: '5px',
    background: 'transparent',
    width: '170px',
    boxShadow: '0 1px 4px 2px rgba(0, 0, 0, 0.08)',
    cursor: 'grab',
};

// Styles for the node label
const labelStyle = {
    fontSize: '10px',
    textAlign: 'left',
    padding: '10px 10px',
    borderRadius: '5px',
};

// Styles for the handles
const handleStyle = {
    width: '5px',
    height: '5px',
    background: '#555',
    borderRadius: '50%',
};

export default CustomNode; // Exporting the CustomNode component
