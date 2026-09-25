import React from 'react';
import { profileData } from '../../data/Profile';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../common/Icons';

export default function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950 py-8 text-slate-400">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Copyright */}
                <p className="text-sm">
                    © {new Date().getFullYear()} <span className="text-white font-medium">{profileData.name}</span>. All rights reserved.
                </p>

                {/* Tautan Sosial Media */}
                <div className="flex items-center gap-4">
                    {profileData.instagram && (
                        <a
                            href={profileData.instagram}
                            target='_blank'
                            rel='noreferrer'
                            className='p-2 hover:text-white transition-colors'
                            aria-label='Instagram'
                        >
                            <InstagramIcon className="w-5 h-5" />
                        </a>
                    )}
                    {profileData.github && (
                        <a
                            href={profileData.github}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <GithubIcon className="w-5 h-5" />
                        </a>
                    )}
                    {profileData.linkedin && (
                        <a
                            href={profileData.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <LinkedinIcon className="w-5 h-5" />
                        </a>
                    )}
                </div>

            </div>
        </footer>
    );
}