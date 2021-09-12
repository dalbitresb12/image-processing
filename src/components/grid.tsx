import { useReducer } from 'react';
import { GridMatrix, isValidGrid } from '../utils/grid';

export type Props = {
  onChange?: (value: GridMatrix) => void,
};

export const Grid = (props: Props): React.ReactElement | null => {
  const [state, dispatch] = useReducer();

  return (
    <div>
      <div className="flex flex-col">
        <span className="text-center text-3xl font-medium">Grid size</span>
        <div className="mt-4 flex">
          <input />
          <input />
        </div>
        {/* {isValidGrid(state.size) &&
          <div className="grid" style={{ gridTemplateColumns: `repeat(${size[0]}, minmax(0, 1fr))`, gridTemplateRows: `repeat(${size[1]}, minmax(0, 1fr))` }}>

          </div>
        } */}

      </div>
    </div>
  );
};
