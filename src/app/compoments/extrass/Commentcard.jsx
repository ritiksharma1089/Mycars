import React from 'react';

const Commentcard = ({item}) => {
    return (
        <div className="card shadow-sm" style={{ maxWidth: '350px' }}>
            <div className="card-body p-3">
                <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold fs-6">{item.name}</span>
                    <div>
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-warning fs-5">★</span>
                        ))}
                    </div>
                </div>
                <div className="mt-3 text-secondary">{item.comment.slice(0, 100)}
                </div>
            </div>
        </div>
    );
};

export default Commentcard;
