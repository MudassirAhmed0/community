export interface IArrayItem {
  name: string;
  value: string;
}

export function enumToArray(values: {}): IArrayItem[] {
  return Object.keys(values).map(name => {
    return {
      name,
      value: values[name as keyof typeof values],
    };
  });
}
