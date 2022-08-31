export const ChildComponent = ({name, handleChangeCount}) => {
  const handleClick = () => {
    handleChangeCount(prevCount => prevCount + 1)
  }
  return <>
    <p>Name: {name}</p>
    <button onClick={handleClick} type="button">click for parent</button>
  </>
}
