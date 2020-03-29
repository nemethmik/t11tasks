export type SquareValueType = "X" | "O" | null
export type SquareProps = {
  value: SquareValueType,
  onClick():void,
}
export type BoardProps = {
  onClick(i:number):void,
  squares: SquareValueType[],
}
export type StepType = {squares:SquareValueType[]}
