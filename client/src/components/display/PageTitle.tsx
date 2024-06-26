const PageTitle = ({ text }: { text: string }) => {
  return (
    <>
      <div className='h-[10vh] flex items-center justify-center'>{text}</div>
      <hr />
    </>
  );
};

export default PageTitle;
