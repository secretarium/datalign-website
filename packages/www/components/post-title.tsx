import React from 'react';

const PostTitle: React.FC = ({ children }) => {
    return (
        <section className=" flex-col md:flex-row flex md:mt-20 mb-8 md:mb-12">
            <h1 className="z-10 sm:text-3xl  md:text-5xl tracking-tighter leading-tight font-bold">
                {children}
            </h1>
        </section>
    );
};

export default PostTitle;
