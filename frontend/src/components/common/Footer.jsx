import { Link } from "react-router-dom"

const Footer = ({ message }) => {

    const messageDefault =
        <>
            Xem thêm nhiều đồ xinh iu nữa 👉
            <span className="inline-grid text-center">
                <Link
                    to='/'
                    className="col-start-1 row-start-1 underline decoration-primary decoration-1 underline-offset-4 hover:font-bold transition-all"
                >
                    ở đây
                </Link>

                <span className="col-start-1 row-start-1 font-bold invisible pointer-events-none">
                    ở đây
                </span>
            </span>
            {' '}nè
        </>

    return (
        <footer className="bg-on-primary border-t border-primary-container w-full py-6 mt-auto">
            <div className="flex flex-col items-center justify-center gap-6 w-full px-6">
                <p className="text-primary font-['Montserrat'] text-sm text-center leading-relaxed">
                    {message || messageDefault}
                </p>
            </div>
        </footer>
    )
}

export default Footer
