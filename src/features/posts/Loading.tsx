const Loading = () => {
  return (
    <article className="min-w-[300px] w-full max-w-[740px] max-h-[230px] bg-background p-4 rounded-2xl">
      <div className="flex pb-5 items-center gap-3">
        <div className="w-8 h-8 bg-bgButton rounded-full animate-pulse"></div>
        <div className="w-80 h-5 rounded-md bg-bgButton animate-pulse"></div>
      </div>

      <div className="h-24 w-full bg-bgButton animate-pulse rounded-md"></div>

      <div className="flex flex-wrap justify-center sm:justify-start pt-5 gap-4">
        <div className="w-24 h-6 bg-bgButton rounded-md animate-pulse"></div>
        <div className="w-24 h-6 bg-bgButton rounded-md animate-pulse"></div>
        <div className="w-24 h-6 bg-bgButton rounded-md animate-pulse"></div>
        <div className="w-24 h-6 bg-bgButton rounded-md animate-pulse"></div>
      </div>
    </article>
  );
};
export default Loading;
