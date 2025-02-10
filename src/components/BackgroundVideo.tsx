import React from 'react';

interface BackgroundVideoProps {
  isLoginPage?: boolean;
}

export function BackgroundVideo({ isLoginPage = false }: BackgroundVideoProps) {
  const videoUrl = isLoginPage
    ? 'https://assets.mixkit.co/videos/preview/mixkit-white-clouds-on-blue-sky-9959-large.mp4'
    : 'https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-2408-large.mp4';

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute min-w-full min-h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-40" />
    </div>
  );
}