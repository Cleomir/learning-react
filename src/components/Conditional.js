const Conditional = ({ age }) => {
  return <h1>{age < 18 ? `You're underage` : `Have a beer`}</h1>;
};

export default Conditional;
