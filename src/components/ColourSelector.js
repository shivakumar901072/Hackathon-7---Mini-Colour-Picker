import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  return (
    <button
      className={btn-{config,key}}
      onClick={() => {
        selectNextBackground({ background: background });
      }}
    >
      ColourSelector
    </button>
  )
}
export default ColourSelector;
