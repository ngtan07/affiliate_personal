import { Modal } from 'antd';

const CheckoutModal = ({ isOpen, onClose, template }) => {
    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            footer={null}
            centered
            width={980}
            styles={{
                body: { padding: 0 },
                content: { padding: 0, borderRadius: '1.5rem', overflow: 'hidden' },
            }}
        >
            <div className="flex flex-col md:flex-row bg-surface relative h-[85vh] md:h-auto">

                <aside className="hidden md:flex w-[35%] bg-surface-container-lowest pe-3 ps-0 flex-col justify-between border-r border-outline-variant/50 min-h-[480px]">

                    <div>
                        <h2 className="font-headline font-bold text-xl text-primary flex items-center gap-2 mb-5">
                            <span className="material-symbols-outlined text-[26px]">receipt_long</span>
                            Đơn hàng
                        </h2>
                        <div className="flex gap-4 items-center">
                            <img
                                src={template?.thumbnailUrl}
                                alt={template?.templateName}
                                className="w-20 h-20 object-cover rounded-2xl shadow-sm border border-outline-variant/50 shrink-0 bg-white"
                            />
                            <div>
                                <h3 className="font-bold text-on-surface line-clamp-2 text-base leading-snug">{template?.templateName}</h3>
                                <p className="text-primary font-black mt-1.5 text-lg">{template?.price ? `${template.price.toLocaleString('vi-VN')} đ` : 'Miễn phí'}</p>
                            </div>
                        </div>

                        <div>
                            <label className="text-xs font-bold uppercase tracking-wider text-outline px-1 mt-15 mb-2 block">Mã giảm giá</label>
                            <div className="flex gap-2">
                                {/* FIX LỖI ZOOM: text-base md:text-sm */}
                                <input
                                    type="text"
                                    placeholder="Nhập mã giảm giá"
                                    className="w-full bg-surface border border-outline-variant rounded-xl px-3 py-2.5 text-base md:text-sm focus:border-primary outline-none uppercase placeholder:normal-case transition-all"
                                />
                                <button className="bg-primary/10 text-primary hover:bg-primary hover:cursor-pointer hover:text-white font-bold px-4 py-2.5 rounded-xl text-sm transition-all whitespace-nowrap">
                                    Áp dụng
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 mt-6">

                        <div className="bg-surface-container-highest/20 p-4 rounded-2xl border border-primary/10">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-on-surface-variant font-medium">Tạm tính</span>
                                <span className="text-sm font-bold">{template?.price ? `${template.price.toLocaleString('vi-VN')} đ` : '0 đ'}</span>
                            </div>
                            <div className="flex justify-between items-center pt-2.5 border-t border-outline-variant/40">
                                <span className="text-sm font-bold uppercase tracking-wide text-on-surface">Tổng cộng</span>
                                <span className="text-xl font-black text-primary">{template?.price ? `${template.price.toLocaleString('vi-VN')} đ` : '0 đ'}</span>
                            </div>
                        </div>

                        <button className="w-full bg-primary hover:bg-primary/90 hover:cursor-pointer text-white font-bold px-6 py-3.5 rounded-xl shadow-[0_4px_14px_rgba(39,94,84,0.25)] flex items-center justify-center gap-2 transition-all active:scale-95">
                            Hoàn tất thanh toán
                            <span className="material-symbols-outlined text-[20px]">check_circle</span>
                        </button>

                        <div className="text-center">
                            <a href="https://tiktok.com/@alice.corner" target="_blank" rel="noreferrer" className="text-xs font-medium text-on-surface-variant hover:text-primary transition-colors inline-flex items-center gap-1">
                                <span className="material-symbols-outlined text-[15px]">support_agent</span>
                                Cần hỗ trợ? Nhắn tin qua TikTok
                            </a>
                        </div>
                    </div>
                </aside>

                <main className="w-full md:w-[65%] flex flex-col h-full">
                    {/* FIX LỖI SCROLL BLEED: Thêm overscroll-contain */}
                    {/* FIX LỖI CHE NỘI DUNG: Thêm pb-28 trên mobile để chừa khoảng trống cho Sticky Footer, md:pb-4 cho PC */}
                    <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 pb-28 md:pb-4 flex flex-col gap-8">
                        <section>
                            <h4 className="font-headline font-bold text-on-surface text-lg mb-5 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-[22px]">account_circle</span>
                                Thông tin nhận hàng
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold uppercase tracking-wider text-outline px-1">Họ và tên</label>
                                    {/* FIX LỖI ZOOM: text-base md:text-sm */}
                                    <input className="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 text-base md:text-sm focus:border-primary outline-none transition-all" placeholder="Nguyễn Văn A" type="text" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold uppercase tracking-wider text-outline px-1">SĐT</label>
                                    <input className="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 text-base md:text-sm focus:border-primary outline-none transition-all" placeholder="0123456789" type="tel" />
                                </div>
                                <div className="md:col-span-2 space-y-1.5">
                                    <label className="text-xs font-bold uppercase tracking-wider text-outline px-1">Địa chỉ Email <span className="text-error">*</span></label>
                                    <input className="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 text-base md:text-sm focus:border-primary outline-none transition-all" placeholder="nguyenvana@gmail.com" type="email" />
                                    <p className="text-xs text-primary/80 flex items-center gap-1.5 font-medium mt-2 px-1">
                                        <span className="material-symbols-outlined text-[15px]">info</span>
                                        Vui lòng nhập đúng email để nhận link template.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {template?.price > 0 && (
                            <section>
                                <h4 className="font-headline font-bold text-on-surface text-lg mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-[22px]">payments</span>
                                    Thanh toán chuyển khoản
                                </h4>

                                <div className="grid grid-cols-11 gap-4 items-stretch">
                                    <div className="col-span-11 xl:col-span-4 flex flex-col items-center justify-center bg-surface-container-lowest border border-outline-variant/60 rounded-2xl p-3 shadow-sm">
                                        <img
                                            className="w-full max-w-[200px] aspect-square object-contain rounded-xl"
                                            src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAADPz8/c3Nw9PT1tbW339/ewsLDz8/OOjo6zs7NXV1eYmJj8/PykpKQsLCzs7OxKSkozMzNRUVEmJibb29sbGxsTExNlZWXBwcHm5uZaWlrQ0NCAgIDJycl0dHSlpaWHh4dFRUV5eXkVFRVoaGicnJwwMDCKioo4ODjwh6EbAAAMn0lEQVR4nO2d6WKyOhCGRVRcKyhYWd213P8NnkzCyBDB0q9CsCfvj8oSQp4GskwmodfT0tLS0tLS0tLS0tLS0tLS0tLS0tLS+r/K68saNXav0cO9vMbuhUo2xoOWi4Zutlg+3myTNHSzTNHjLZmaysRR6d2ihu4mtDaM9eSrqENz/9XkIN1rAglo7HY9/k9dNhl/DS2be2RAjDBsMPo6ChsnnDUYfR3NNOHvlBMm06eybBEsssRukEWQWA9BULZVFZkInrRLGJSW40RDccE82/WzCIYkiFR5D8uioQpaJfT+kXD3C0KvVUJTAaHZPuGyXLdzTphM5nOWJuOLvUlBRniaz69pOeH5VhGnIsKq5ug8J8RdzMddRrYtJ5xXxLhQRDiuCDV5TgjtygrCSUWM4/chHP4pQtPnSiDftl+HGIis+BDD+4iEfRHGH3WX0A+3VENCeCXloNz9QEInO28TwmEhxtBXTEgxsPTJCD/IYV+KCAlnj4QLKcarYsIPKT01CcOMcP094Uf3CbeH+IT9ci9JEn5ZHJ/gfZzHXKdxhwjXPyak+QcY/fK4axKumyXsTc4ivf9KiPVhiWoS+ueqAve1UkfYlv6F0Oz3IyhDraifYFUaCStoMvoThCcSDPOxpD58Y8K4hLBGffimhNgmfW/C6SwEzSzPi8Amc52FW+joOeyY70VMnvneTylqbhTfRci/ULrs7xDS/uGbED5peb+IUGp5t044dWZEa95qzQjtIAggyH49c6D3BPuH2cxBKwZqHc4c2ntisRA5U8WEZSL9Q4scPhl5LUEJM8twzR5wW6pD+CERQm2BrW5KmNnDNaEKwqpejEQ4Zu8fBEVC9j7aJ8dZw3j50XEGETuweE44UkToVGhZJJxkZSkSogUjzN7BY16WLquiVET4TIQQawskRItimD2h65zwqdolrDMyA4TTFxI272hCVWd0DQj3Y3s8Twc3qA8n7Ncf26NLRjhMB8vItsfbdODWIQy+S9RrNZ0/l11tpzGMYv8wqw/tb2KctgtYR1VWDEo4az9vXqi/Q7gY54J6b5T9yoTs+IJXCavbJoGdXpFwXKGmfMrqKyGlAVTZliG6PFV2Gjp+SAndbpQwJeqT1MAQJxDue9VWDDq6RglXb0M4/ROEi1GmXpFwshgtLHfl7tnxvbsCuc8It8vVGQggJiC8rYQooclOtv8uesYniHflKaHxKTrlZSojRA1YfHDOvu+TKNmpdtszIGyXPhAa/0ooVEbI87FRmjL9Twg3m89dDwg3VJyw7L0BwjM7X0UI1yLh8VyMU81TeukJr+iTdA7rQ9SE5IXcx8e8AcJnw4Jro+2+xXeEe7I/f0KINUEdwvZ7wK8mrDL7gNQR9o2C8ZfLkkqbawkhjshgqpedJaTy2bEv6Rh9BylhHWF5inaAbhDKrnfzXxAelRNupWNlhPKwxvsQgiVKnpfwakKHEM5aJ+wtmHpQlrqgDbx/SDj9dO86Z6n0WRsAbW2nDT+VjwNvXKpPqPUd1+Vesx67Lty4xIO2beE8qAMhtIxHydZEkXqhtRQWCLGUASq53P17hCHZVk+IVowqwqQGIdSLRxJmLYVXRzgaj0fTZXq7joRRCkqZ/ahooVrUIFylaQqdRS+zVqm1SFFCEFgwsD2zN4RVX9Z3hCj19hnQM0J5/BD1noTYWgNC7DnJo9wotAp3m9B00xv0KZBwk6Y3tLO5abrkI6O2bcs9oviWDqCOTGx7fFml7r29Yj9oHLLzUH4Os992ha02Oi8Y8nGabe8rrqNWfWl07UFQnmJ9qLaP3zRhaKiy02D/sIywyhp1IoROlvJjBeHKUNXqBiHhKOCypxnhWOxzTyFrcJTlbAihnXkwwC8fpcnDpUAG8YZsO7IDe8t+1fYPE+Ox9yu7vFGVeULfyHlqoepGD/gVhNSUjzXFsVOEsjPM/glhWdlYRQjvaPv9QyT0nHAG9SAQrsKi0hKyKXu3wM7miCAOrdVlwt0sDKHuXLOAG2WEaE1MSmjKRHtPNK/KCI/StZqwGUKoD3c/IIT+YYnXHlcqHXeka9UQjj3PhCmIc9MzoWSJTQ9lyrbSPTsH9WQgzgfrjCQWEw0vnyQsi/IC755veoGjlBAE+UitGCi5LJVnWWKrTc4rOd/UWDHqEMr1YdkcRKzrukdI7aXwDsa93E6Dkm2lvyVst38xTvJFqdh2Aimx2S+k2L8ML0ATJIU1rBI+q+Qy3GJePCOc9vtRSgitfj4bTL3kEVIqOjvvGSG+n+p6T88kjx9S/YRQbf/wmb7LQ2qfMXvVhLh2hpr+4TMFSSLex1N8kmsIILzE8QlSHGWznoHAT+6KsMfUz86zcP1DNjO6WyqzJsrelyDZiuEYj3a29j0V6ujVhN16UkHoyU4lW4NBdQid1vNw4aCPXblcSxBuJ18HyC//8HWAFEa+n0BvdseOIwUSTr6+4nEvJ5yTZf2sxPfbrQ+/nY1wyVttkI9fxuNKSrRMBcJl9ouE1PNLnV9bpaR5wDhvBlQ2bgFkK4mQ9g//BqFLCIGoA3lYtYTctkh4mUwm1/3+A1NZRbj/2F9HvTwPrY89yBqoI6wxdw1VNqtEJkQ5EpE6q36d+Yf/Skhri/cjLCtLaVQdI1wEBfG8qCBMLK4pEB0+rnPMN9j/sO6aQpl6nfLtvZ0Rztl+2ehNC4Q/WCeKrvwht2mqRFcnaN+D9qfrRJWt/PEdoVpLVFuEanyi6hKud0PQBYj2w7sukFpf1J4+9HQvItzuLLZ3G0I1YcfdzhI+mxZJ8w7LUqCFahZbbEilZuypDmGZtwmKrm+C5SS2TalfG0jN+GFThBCtTNj9PAyi+3hGhE8kEG7Fe7kFQi/yTOhBJSzQSpzbBtnxY+cJDyQI+gmjNRElf5MA87XdkZlRlryfEtJxKNleipLnHwYkHCFs8GMToBsfofh5WfobwmJ9GBu3JgF/vDLkNTD5mOF1kPvTAGFgmvfxQx4f2wdvE/S7cY7HFZ7bsf3znbCLa1/SOhFX4cEnDynwUx1V3ZW8LO0iYdm6iWXznkBV/Ye8PuziGrSvIFSYh3ZSEC9qM0JrNQDd+ELAma/3AVYBYZvwlLLT3L8UXLjvNbxw6bapTzecV5iHZZJWMwNReylaMbB+KxvHp3XfunCsq4TfWROfEYbqCL+xtcmH3pAwiUrl7YqEsGDA4YeEAbm2OKOka19/AGF75jtCfOiprS015HGoLhJWfadEJsSEU8KBoYqwztgTqi5hWR4eDVWE5d8LIyKu7F8SIdb22ALHuhAJoQVOZ0CrIRRTLJ+IXCQfqrNfti2kv/f0S2nCFtQwYe8TCoEn79yr9XArVk19Nni/bAWWz6K4G3Qz2hnSvaCvHzd2O9DoZpSoKT+QcdnNbs1aolj97chfm3KrvtL0gpu58s2c5m72Io0GTWeBaoXKP4LZsKCf0c43RhTJLzRQ/6Bw5dru+cK+Sri6pas6IfU0vQ1+qHz5Tvenl95UrLFbtsBHc3o21KoJNaEm1ISa8G0IN6sz3ZEdK96ecBKAq6nwzdtY9oLtoDH/5JkXsRV7npfg1n3wOLkfNcDpxoIr0PWmO4Ro3D0YxMhgiqnL9t1Czjuv3AJ+xUa4kRkI+Bgit4ZEtPPRGUJIum2OeKr5aqYB28lWcuGrK65zQm7GnhNC+x4Zn+jW7yRhIPYgez4XDBaArOwp5ePePiFMHgnH3CLzCRsZYX+ZgjpDOM7dY4GCljIpy9BR1qtg57I19SXCKR8GZY+3hYQPKxgoJoR0fwiX0EgqgljiYz/zy2Bc0ym3oEmEQ77r9UYnJPRO8IlZsvqCYkJhB7evIr3UYx0eWngVRwY+mwtYikAiPJosAOs0TnfF95DkpOqydC3GAs2HT+JMOIotnmLOBWsTrCRCh5WtWxZ0e+osoWHcJnzKIBQ6dGVdm3+RJhIGjHn2MPb6X0XC9YDte+zxjZHQnF+ZyNOgntDgBqYEUmLnh8hIcIiER7bTLxLO2D9mAdVL3NWSxoihmOHVOKSfJz6G82TSQXIvX0Rii4R8yHjbXcKQ/f8nYEmJhSdicJ2z2ttcsYevt04HgxRaK6t7+TJ+JISQIyMnHHsmOGReOkK4wkPCy+YeAj7OGN0xrDshb50VCUWAnDDTqSOExk64FGaP1kHseekmT+Mcvr55L0H7vWK7dMYXYVhzwoguAdMZQlZdxIdTPvDmxId4wCrDpXs3IMLazp+uu8E9d5OfccUP+yNCnPN1obtD2Lg0oSbUhJpQE2rCbhIG/Tb1d4eNtbS0tLS0tLS0tLS0tLS0tLS0tLS0tOrqP/UWJUCQbRsRAAAAAElFTkSuQmCC`}
                                            alt="QR Bank"
                                        />
                                        <p className="text-[11px] font-bold text-primary mt-3 tracking-widest text-center">QUÉT ĐỂ THANH TOÁN</p>
                                    </div>

                                    <div className="col-span-11 xl:col-span-7 bg-gradient-to-br from-primary/5 to-surface-container-lowest border border-primary/20 rounded-2xl p-5 shadow-sm flex flex-col justify-center gap-3">
                                        <div className="flex justify-between items-center border-b border-outline-variant/50 pb-2.5">
                                            <span className="text-[11px] text-on-surface-variant font-bold uppercase tracking-wider shrink-0">Ngân hàng</span>
                                            <span className="text-xs font-bold text-on-surface bg-white px-3 py-1.5 rounded-lg border border-outline-variant/30">Techcombank</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-outline-variant/50 pb-2.5">
                                            <span className="text-[11px] text-on-surface-variant font-bold uppercase tracking-wider shrink-0">Số tài khoản</span>
                                            <span className="text-xs font-bold text-on-surface bg-white px-3 py-1.5 rounded-lg border border-outline-variant/30">19037880201019</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-outline-variant/50 pb-2.5">
                                            <span className="text-[11px] text-on-surface-variant font-bold uppercase tracking-wider shrink-0">Chủ tài khoản</span>
                                            <span className="text-xs font-bold text-on-surface bg-white px-3 py-1.5 rounded-lg border border-outline-variant/30">NGUYEN THI HUYEN NGOC</span>
                                        </div>
                                        <div className="flex flex-col gap-1 mt-1">
                                            <span className="text-[10px] text-primary font-bold uppercase tracking-wider">Nội dung <span className="text-error">*</span></span>
                                            <span className="text-xs font-black text-primary bg-surface-container-high px-3 py-2 rounded-2xl border border-primary/10 text-center">ALICE + SĐT của bạn</span>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}
                    </div>

                    {/* MOBILE STICKY FOOTER */}
                    <div className="md:hidden absolute bottom-0 left-0 right-0 bg-white border-t border-outline-variant/40 p-4 pb-safe flex justify-between items-center z-10 shadow-[0_-4px_15px_rgba(0,0,0,0.05)]">
                        <div className="flex flex-col">
                            <span className="text-[11px] text-on-surface-variant font-medium">Tổng thanh toán</span>
                            <span className="text-lg font-black text-primary leading-tight">
                                {template?.price ? `${template.price.toLocaleString('vi-VN')} đ` : '49.000 đ'}
                            </span>
                        </div>
                        <button className="bg-primary text-white font-bold px-6 py-3 rounded-xl shadow-md flex items-center gap-2 active:scale-95 transition-all">
                            Thanh toán <span className="material-symbols-outlined text-[18px]">check_circle</span>
                        </button>
                    </div>
                </main>
            </div>
        </Modal>
    );
};

export default CheckoutModal;