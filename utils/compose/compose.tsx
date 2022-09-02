type Props = {
  providers: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>;
  children: React.ReactNode;
};

const Compose: React.FC<Props> = ({ providers, children }) => {
  return (
    <>
      {providers.reduceRight((acc, Component) => {
        return <Component>{acc}</Component>;
      }, children)}
    </>
  );
};

export default Compose;
