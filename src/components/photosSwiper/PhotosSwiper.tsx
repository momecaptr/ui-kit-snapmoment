import * as React from 'react';
import { useRef, useState } from 'react';

import ArrowIosBack from '../../../src/core/assets/svgComponents/ArrowIosBack';
import ArrowIosForward from '../../../src/core/assets/svgComponents/ArrowIosForward';
import { clsx } from 'clsx';
import { Swiper as SwiperProps } from 'swiper';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import 'swiper/scss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import 'swiper/scss/pagination';


import s from './PhotosSwiper.module.scss';

// Ниже экстенд от этого типа, что гарантирует, что передаваемый массив объектов будет принят без ошибок, если в нем есть свойство url
type HasUrl = { url: null | string | undefined };

type Props<T extends HasUrl> = {
  className?: string;
  classNameImage?: string;
  classNameSwiperSlide?: string;
  getIndex?: (val: number) => void;
  mockImg?: string;
  sliders: T[];
  styles?: string;
};

/**
 * Компонент `PhotosSwiper` — карусель изображений с поддержкой навигации и пагинации.
 * @template T - Тип, который расширяет интерфейс `HasUrl`. HasUrl - тип с параметром url: string. Короче, принимает массив любых объектов, но обязательно должен быть url
 * @param {string} className - Дополнительные классы для стилизации контейнера карусели.
 * @param {string} classNameImage - Дополнительные классы для стилизации изображений.
 * @param {string} classNameSwiperSlide - Дополнительные классы для стилизации слайдов карусели.
 * @param {function} getIndex - Функция, возвращает индекс текущего активного слайда.
 * @param {T[]} sliders - Массив объектов с изображениями, содержащими URL. Короче, принимает массив любых объектов, но обязательно должен быть url
 * @param {string} styles - Стиль фильтра, применяемый к изображению. ИНЛАЙНОВЫЙ
 * @param {string} mockImg - URL мокового изображения, если не будет фотографий в массиве sliders
 */
export const PhotosSwiper = <T extends HasUrl>({
  className,
  classNameImage,
  classNameSwiperSlide,
  getIndex,
  mockImg,
  sliders,
  styles
}: Props<T>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<SwiperProps | null>(null);

  // Уникальный идентификатор для `data-` атрибутов
  const uniqueId = useRef(`swiper-${Math.random().toString(36).substr(2, 9)}`);

  const handleSwiperInit = (swiper: SwiperProps) => {
    swiperRef.current = swiper;
  };

  const handleSlideChange = (swiper: SwiperProps) => {
    setCurrentIndex(swiper.realIndex);
    if (getIndex) {
      getIndex(swiper.realIndex);
    }
  };

  // Останавливаем распространение события при клике на кнопку (это чтобы модалка не открывалась, а просто клики next prev работали)
  const handleNavigationClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Останавливаем распространение события
  };

  // Используем `mockImg`, если нет фотографий
  const photos = sliders.length ? sliders : [{ url: mockImg }];

  return (
    <div className={clsx(s.container, className)}>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Keyboard,
          ...(sliders.length > 1 ? [Mousewheel] : []) // добавляем Mousewheel только если условие выполнено
        ]}
        navigation={{
          // Через data-атрибуты, чтобы был уникальный идентификатор для стилей, иначе при клике на кнопку next или prev,
          // будут слайдится не только эти фотки, но и фотки других постов с таким же стилем
          nextEl: `[data-next="${uniqueId.current}"]`,
          prevEl: `[data-prev="${uniqueId.current}"]`
        }}
        pagination={{
          bulletActiveClass: s.paginationBulletActive,
          bulletClass: s.paginationBullet,
          clickable: true,
          el: `[data-pagination="${uniqueId.current}"]`
        }}
        className={s.photosSwiper}
        mousewheel={sliders.length > 1} // также передаем условие для включения mousewheel
        onSlideChange={handleSlideChange}
        onSwiper={handleSwiperInit}
        keyboard
      >
        {photos.map((photo, i) => (
          <SwiperSlide className={clsx(s.swiperSlide, classNameSwiperSlide)} key={photo.url || i}>
            <img
              alt={`post photo ${i}`}
              className={classNameImage}
              height={100}
              src={photo.url || ''}
              style={styles ? { filter: styles } : {}}
              width={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {photos.length > 1 && (
        <>
          <button
            className={clsx(s.swiperButtonPrev, currentIndex === 0 && s.hidden)}
            data-prev={uniqueId.current}
            onClick={handleNavigationClick}
            type={'button'}
          >
            <ArrowIosBack />
          </button>
          <button
            className={clsx(s.swiperButtonNext, currentIndex === photos.length - 1 && s.hidden)}
            data-next={uniqueId.current}
            onClick={handleNavigationClick}
            type={'button'}
          >
            <ArrowIosForward />
          </button>
          <div className={s.swiperPagination} data-pagination={uniqueId.current}></div>
        </>
      )}
    </div>
  );
};
