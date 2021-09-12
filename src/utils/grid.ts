export type GridSize = [number, number];

export type GridCell = {
  x: number,
  y: number,
  value: number,
};

export type GridMatrix = GridCell[][];

export type Grid = {
  size: GridSize,
  matrix: GridMatrix,
};

export const isValidGrid = (grid: GridSize): boolean => {
  return grid.every(item => item > 0);
};

export type GridReducerActions = {
  type: "update-size-x" | "update-size-y",
  value: number,
} | {
  type: "update-grid-pos",
  x: number,
  y: number,
  value: number,
};

export const gridReducer = (state: Grid, action: GridReducerActions): Grid => {
  switch (action.type) {
    case 'update-size-x': {
      return { ...state, size: [action.value, state.size[1]] };
    }
    case 'update-size-y': {
      return { ...state, size: [state.size[0], action.value] };
    }
    case 'update-grid-pos': {
      const matrix = state.matrix;
      matrix[action.x][action.y].value = action.value;
      return { ...state, matrix };
    }
    default: {
      throw new Error(`Invalid action: ${action}`);
    }
  }
};
