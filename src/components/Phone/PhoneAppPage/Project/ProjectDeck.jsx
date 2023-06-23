import React, { useState } from 'react';
import { useSprings, animated, to as interpolate } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';
import { useTranslation } from 'react-i18next';

import { cards } from '../../../../config/cards';

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({
	x: 0,
	y: i * -4,
	scale: 1,
	rot: -10 + Math.random() * 20,
	delay: i * 100,
});

const from = _i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
	`perspective(1500px) rotateX(30deg) rotateY(${
		r / 10
	}deg) rotateZ(${r}deg) scale(${s})`;

const ProjectDeck = ({ toggleWatchingProject }) => {
	const { t } = useTranslation();
	// The set flags all the cards that are flicked out
	const [gone] = useState(() => new Set());

	// Create a bunch of springs using the helpers above
	const [props, api] = useSprings(cards.length, i => ({
		...to(i),
		from: from(i),
	}));

	// Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
	const bind = useDrag(
		({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
			// If you flick hard enough it should trigger the card to fly out
			const trigger = velocity > 0.2;

			// Direction should either point left or right
			const dir = xDir < 0 ? -1 : 1;

			// If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
			if (!down && trigger) gone.add(index);

			api.start(i => {
				// We're only interested in changing spring-data for the current spring
				if (index !== i) return;
				const isGone = gone.has(index);

				// When a card is gone it flys out left or right, otherwise goes back to zero
				const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;

				// How much the card tilts, flicking it harder makes it rotate faster
				const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);

				// Active cards lift up a bit
				const scale = down ? 1.1 : 1;
				return {
					x,
					rot,
					scale,
					delay: undefined,
					config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
				};
			});
			if (!down && gone.size === cards.length)
				setTimeout(() => {
					gone.clear();
					api.start(i => to(i));
				}, 600);
		}
	);
	// Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
	return (
		<>
			{props.map(({ x, y, rot, scale }, i) => {
				return (
					<animated.div className="deck" key={i} style={{ x, y }}>
						{/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
						<animated.div
							{...bind(i)}
							style={{
								transform: interpolate([rot, scale], trans),
								overflow: 'hidden',
							}}
							onDoubleClick={() => toggleWatchingProject(cards[i])}
						>
							<div
								className="h-[80%] cardImage"
								style={{ backgroundImage: `url(${cards[i].image})` }}
							/>
							<div className="py-2 px-3">
								<p className="text-sm text-zinc-700 mb-2 highlight1">
									{t(`projectDetail.${cards[i].category}`)}
								</p>
								<p className="font-bold">
									{t(`projectDetail.${cards[i].title}`)}
								</p>
							</div>
						</animated.div>
					</animated.div>
				);
			})}
		</>
	);
};

export default ProjectDeck;
