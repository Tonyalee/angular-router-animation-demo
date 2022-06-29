import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
  animateChild,
} from '@angular/animations';

// Routable animations
export const slideInAnimation = trigger('routeAnimations', [
  transition('tab1 => tab2', slideTo('left')),
  transition('tab2 => tab1', slideTo('right')),
]);

function slideTo(direction: string) {
  const optional = { optional: true };
  return [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          // top: 0,
          [direction]: 0,
          width: '100%',
        }),
      ],
      optional
    ),
    query(':enter', [style({ [direction]: '-100%' })], optional),
    group([
      query(
        ':leave',
        [animate('600ms linear', style({ [direction]: '-100%' }))],
        optional
      ),
      query(
        ':enter',
        [animate('600ms linear', style({ [direction]: '0%' }))],
        optional
      ),
    ]),
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    // query(':leave', animateChild()),
    // query(':enter', animateChild()),
  ];
}
