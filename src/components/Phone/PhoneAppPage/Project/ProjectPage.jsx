import { React, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { fadeAnimation } from '../../../../config/motion';
import BackBtn from '../../PhoneGeneralUI/BackBtn';
import PhoneGeneralUIWrapper from '../../PhoneGeneralUI/PhoneGeneralUIWrapper';
import ProjectDeck from './ProjectDeck';
import ProjectDetail from './ProjectDetail';

const ProjectPage = () => {
	const [watchingProject, setWatchingProject] = useState(null);
	const { t } = useTranslation();

	const toggleWatchingProject = project => {
		if (project) {
			setWatchingProject(project);
		} else {
			setWatchingProject(null);
		}
	};

	return (
		<motion.div {...fadeAnimation}>
			<PhoneGeneralUIWrapper
				isLockScreen={false}
				textColor="black"
				bgDisabled={true}
			>
				<BackBtn
					onClick={watchingProject ? () => toggleWatchingProject(null) : null}
				/>
				{!watchingProject && (
					<>
						<ProjectDeck
							watchingProject={watchingProject}
							toggleWatchingProject={toggleWatchingProject}
						/>
						<div className="mt-20 flex flex-col items-center">
							<h1 className="highlight1 text-4xl">{t('projects.開發作品')}</h1>
							<p className="mt-4 text-lg text-center">
								{t('projects.點擊')}
								<span className="highlight2">{t('projects.兩下')}</span>
								{t('projects.後可以查看更詳細的內容')}
							</p>
						</div>
					</>
				)}
				{watchingProject ? (
					<ProjectDetail project={watchingProject} />
				) : (
					<div />
				)}
			</PhoneGeneralUIWrapper>
		</motion.div>
	);
};

export default ProjectPage;
