import React from 'react'

const InfoBottom = ({ template }) => {
    return (
        <div className="bg-surface-container-high/80 p-5 md:p-6 rounded-2xl border-2 border-dashed border-primary/30 shadow-sm" data-purpose="technical-specs">

            {template.format && (
                <div className="grid grid-cols-[120px_1fr] gap-3 py-3 border-b border-outline-variant/30 last:border-b-0">
                    <span className="text-on-surface-variant font-medium">Định dạng:</span>
                    <span className="text-on-surface text-right">{template.format}</span>
                </div>
            )}
            {template.version && (
                <div className="grid grid-cols-[120px_1fr] gap-3 py-3 border-b border-outline-variant/30 last:border-b-0">
                    <span className="text-on-surface-variant font-medium">Phiên bản:</span>
                    <span className="text-on-surface text-right">{template.version}</span>
                </div>
            )}

            {template.tags && template.tags.length > 0 && (
                <div className="grid grid-cols-[120px_1fr] gap-3 py-3 border-b border-outline-variant/30 last:border-b-0">
                    <span className="text-on-surface-variant font-medium">Thẻ:</span>
                    <span className="text-primary cursor-pointer text-right">
                        {template.tags.map((tag, index) => (
                            <span key={index}>
                                <span className=" hover:underline">{tag}</span>
                                {index !== template.tags.length - 1 && ', '}
                            </span>

                        ))}
                    </span>
                </div>
            )}

            {template.deliveryIncludes && template.deliveryIncludes.length > 0 && (
                <div className="py-3 border-b border-outline-variant/30 last:border-b-0">
                    <span className="text-on-surface-variant font-medium">Bao gồm:</span>
                    <div className='pt-5'>
                        <span className="text-on-surface leading-relaxed">
                            {template.deliveryIncludes.map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <span className="material-symbols-outlined text-primary mr-3 mt-0.5 text-[20px]">check</span>
                                    <span className="text-on-surface-variant leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </span>
                    </div>

                </div>
            )}



        </div>
    )
}

export default InfoBottom
