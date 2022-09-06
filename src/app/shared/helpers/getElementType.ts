interface IProps {
  as?: string;
  href?: string;
}
const getElementType = (Component: any, props: IProps) => {
  const { defaultProps = {} } = Component;

  switch (true) {
    case props.as && props.as !== defaultProps.as:
      return props.as;
    case !!props.href:
      return 'a';
    default:
      return defaultProps.as || 'div';
  }
};

export default getElementType;
