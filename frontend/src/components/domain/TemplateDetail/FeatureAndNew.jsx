import React from 'react'

const FeatureAndNew = ({ template }) => {
    return (
        <>
            {template?.features && template?.features.length > 0 && (
                <div className="bg-surface-container-low p-6 md:p-8 rounded-2xl border border-dashed border-primary/40" data-purpose="feature-list">
                    <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-on-surface">Tính năng nổi bật:</h3>
                    <ul className="space-y-4">
                        {template.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <span className="material-symbols-outlined text-primary mr-3 mt-0.5 text-[20px]">check_circle</span>
                                <span className="text-on-surface-variant leading-relaxed">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    {template?.whatsNew && template?.whatsNew?.length > 0 && (
                        <div className='mt-10'>
                            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-on-surface">Những cải tiến so với phiên bản trước:</h3>
                            <ul className="space-y-4">
                                {template.whatsNew.map((news, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="material-symbols-outlined text-primary mr-3 mt-0.5 text-[20px]">auto_awesome</span>
                                        <span className="text-on-surface-variant leading-relaxed">{news}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default FeatureAndNew
