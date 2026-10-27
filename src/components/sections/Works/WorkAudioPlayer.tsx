import React, { useRef, useState, useEffect } from 'react';
import styles from './WorkAudioPlayer.module.css';

type WorkAudioPlayerProps = {
  src: string;
  title: string;
  subtitle?: string;
  category?: string;
};

export const WorkAudioPlayer: React.FC<WorkAudioPlayerProps> = ({
  src,
  title,
  subtitle = 'Оригинальная аранжировка, текст и вокал',
  category = 'Песня на заказ',
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.9);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime || 0);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    const newTime = Number(e.target.value);
    setCurrentTime(newTime);
    if (audio) {
      audio.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    const newVol = Number(e.target.value);
    setVolume(newVol);
    setIsMuted(newVol === 0);
    if (audio) {
      audio.volume = newVol;
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.volume = volume || 0.8;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className={styles.playerCard}>
      <audio ref={audioRef} src={src} preload="metadata" />

      {/* Верхняя виниловая/крафтовая панель */}
      <div className={styles.deckHeader}>
        <div className={styles.vinylIconWrapper}>
          <div className={`${styles.vinylRecord} ${isPlaying ? styles.spinning : ''}`}>
            <div className={styles.vinylCenter} />
          </div>
        </div>
        <div className={styles.metaInfo}>
          <span className={styles.categoryBadge}>{category}</span>
          <h4 className={styles.trackTitle}>{title}</h4>
          <p className={styles.trackSubtitle}>{subtitle}</p>
        </div>
      </div>

      {/* Шкала таймлайна */}
      <div className={styles.timelineWrapper}>
        <div className={styles.timeLabels}>
          <span className={styles.timeCurrent}>{formatTime(currentTime)}</span>
          <span className={styles.timeDuration}>{formatTime(duration)}</span>
        </div>
        <div className={styles.progressBarBg}>
          <div
            className={styles.progressBarFill}
            style={{ width: `${progressPercent}%` }}
          />
          <input
            type="range"
            min="0"
            max={duration || 100}
            step="0.1"
            value={currentTime}
            onChange={handleSeek}
            className={styles.seekInput}
            aria-label="Перемотка трека"
          />
        </div>
      </div>

      {/* Панель управления: воспроизведение и громкость */}
      <div className={styles.controlsRow}>
        <button
          type="button"
          onClick={togglePlay}
          className={styles.playButton}
          aria-label={isPlaying ? 'Пауза' : 'Слушать песню'}
        >
          {isPlaying ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <rect x="5" y="4" width="4" height="16" rx="1" />
              <rect x="15" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 4.5V19.5L19 12L7 4.5Z" />
            </svg>
          )}
          <span>{isPlaying ? 'Пауза' : 'Включить трек'}</span>
        </button>

        <div className={styles.volumeBox}>
          <button
            type="button"
            onClick={toggleMute}
            className={styles.muteButton}
            aria-label={isMuted ? 'Включить звук' : 'Выключить звук'}
          >
            {isMuted || volume === 0 ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="1" y1="1" x2="23" y2="23" />
                <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4l-6 5H4v6h4" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className={styles.volumeInput}
            aria-label="Громкость"
          />
        </div>
      </div>
    </div>
  );
};
