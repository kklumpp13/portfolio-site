import React, { useState } from 'react';
import { css } from 'styled-components';

const Wave = () => {
  const [waves, setWaves] = useState(0);
  const label = `Wave ${waves} ${waves === 1 ? 'wave' : 'waves'}`;
  return (
    <button
      cass={css`
        background: rebeccapurple;
        border: none;
      `}
      onClick={() => setWaves(waves + 1)}
    >
      {label}
    </button>
  );
};

export default Wave;
