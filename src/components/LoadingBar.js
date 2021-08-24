import RawLoadingBard from 'react-redux-loading-bar';

const LoadingBar = props => {
  // I styled `LoadingBar` using `style` prop rather than `className` prop because
  // `className` doesn't works with this package
  // see https://github.com/mironov/react-redux-loading-bar/issues/40

  return (
    <RawLoadingBard
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 257,
        backgroundColor: '#3f51b5'
      }}
    />
  );
};

export default LoadingBar;
