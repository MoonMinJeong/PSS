const useCreateElement = () => {
    const createElement = (str: string, tag: string) => {
        const Ele = document.createElement(tag);
        Ele.innerHTML = str;
        return Ele;
    };
    return createElement;
};

export default useCreateElement;
