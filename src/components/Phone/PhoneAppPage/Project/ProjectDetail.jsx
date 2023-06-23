import React from 'react';
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper';
import { FiGithub } from 'react-icons/fi';
import { RiGlobalLine } from 'react-icons/ri';

import 'swiper/css';
import 'swiper/css/effect-creative';

const ProjectDetail = ({ project }) => {
	const { t } = useTranslation();

	return (
		<div className="mt-16">
			{/* title */}
			<span className="text-slate-700 block mb-4">
				{t(`projectDetail.${project.category}`)}
			</span>
			<h1 className="highlight1 text-2xl font-bold">
				{t(`projectDetail.${project.title}`)}
			</h1>
			{/* Image */}
			<Swiper
				grabCursor={true}
				effect={'creative'}
				creativeEffect={{
					prev: {
						shadow: true,
						translate: ['-125%', 0, -800],
						rotate: [0, 0, -90],
					},
					next: {
						shadow: true,
						translate: ['125%', 0, -800],
						rotate: [0, 0, 90],
					},
				}}
				modules={[EffectCreative]}
				className="mySwiper5"
			>
				{project.detailImages.map((image, index) => (
					<SwiperSlide key={index}>
						<img src={image} alt="project image" />
					</SwiperSlide>
				))}
			</Swiper>
			{project.detailImages.length > 1 && (
				<p className="text-center">{t('utils.左右滑動查看更多圖片')}</p>
			)}
			{/* description */}
			<p className="font-bold text-lg mt-6">
				{t(`projectDetail.${project.description}`)}
			</p>
			{/* links */}
			<div className="flex items-center mt-6">
				<span className="highlight1">{t('projects.點擊前往')}</span>
				<span>：</span>
				<div className="ml-2 flex gap-2 items-center">
					<a href={project.github} target="_blank">
						<FiGithub size={28} />
					</a>
					<a href={project.site} target="_blank">
						<RiGlobalLine size={28} />
					</a>
				</div>
			</div>
			{/* tools */}
			<div className="flex gap-2 mt-6 items-center">
				{project.tools.map((tool, index) => (
					<p
						key={index}
						className={`py-1 px-2 rounded-full border-2 border-slate-700 ${tool}`}
					>
						{tool}
					</p>
				))}
			</div>
		</div>
	);
};

export default ProjectDetail;
