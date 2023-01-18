import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <li className='md:ml-8 ml-5 text-xl md:my-0 my-7'>
              <span className= 'duration-500'>
            <Link
                style={{ color: match ? '#F80': 'black', textDecoration:"none" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
            </span>
            </li>
        </div>
    );
}

export default CustomLink;