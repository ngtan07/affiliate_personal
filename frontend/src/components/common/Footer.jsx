
const Footer = ({ message }) => {
    return (
        <footer className="bg-on-primary border-t border-primary-container w-full py-6 mt-auto">
            <div className="flex flex-col items-center justify-center gap-6 w-full px-6">
                <p className="text-primary font-['Montserrat'] text-sm text-center leading-relaxed">
                    {message || "Chờ mình cập nhật thêm nhiều sản phẩm xịn xò nhé! ✨"}
                </p>
            </div>
        </footer>
    )
}

export default Footer
