interface ISpacerProps {
  height?: number;
}

export const Spacer = ({ height = 0 }: ISpacerProps) => {
  return <div style={{ height }} />;
};
