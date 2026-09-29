import React from 'react';
import { profileData } from '../../data/profile';

export default function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950 py-8 text-slate-400">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Copyright */}
                <p className="text-sm text-center">
                    © {new Date().getFullYear()} <span className="text-white font-medium">{profileData.name}</span>. All rights reserved.
                </p>

                <div className='group text-sm text-center'>
                    <h1>
                        <span className='group-hover:text-purple-800'>#</span>
                        <span className='group-hover:text-green-300'>angkasaa</span>
                        <span className='group-hover:text-pink-400'>semestaa</span>
                    </h1>
                </div>

            </div>
        </footer>
    );
}