import Footer from '../common/Footer'

const UserLayout = ({ children, message }) => {
    return (
        <div className="bg-background text-on-surface font-body selection:bg-secondary-fixed selection:text-on-secondary-fixed flex flex-col min-h-screen">
            <main className="max-w-5xl mx-auto px-6 md:px-4 py-8 grow w-full">
                {children}
            </main>

            <Footer message={message} />
        </div>
    )
}

export default UserLayout
