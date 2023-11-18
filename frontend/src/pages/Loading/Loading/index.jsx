const Loading = () => {
    return (
        <section className="h-screen w-screen fixed z-10 top-0 left-0">
            <div className="h-full w-full flex justify-center place-items-center">
                <div className="h-18 w-18 rounded-full border border-rose-500 border-t-transparent animate-spin"></div>
            </div>
        </section>
    )
};

export default Loading;