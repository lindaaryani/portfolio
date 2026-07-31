type Props = {
    children: React.ReactNode;
};

export default function Badge({
    children
}:Props){

    return(

        <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-500 backdrop-blur">

            {children}

        </span>

    );

}