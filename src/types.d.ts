interface BasePoint {
  index: number;
  name: string;
  x: number;
  y: number;
}

type Point = BasePoint &
  (
    | {
        heading: "linear";
        startDeg: number;
        endDeg: number;
        degrees?: never;
        reverse?: never;
      }
    | {
        heading: "constant";
        degrees: number;
        startDeg?: never;
        endDeg?: never;
        reverse?: never;
      }
    | {
        heading: "tangential";
        degrees?: never;
        startDeg?: never;
        endDeg?: never;
        reverse: boolean;
      }
  );

type ControlPoint = BasePoint;

interface Line {
  endPoint: Point;
  controlPoints: ControlPoint[];
  color: string;
}
