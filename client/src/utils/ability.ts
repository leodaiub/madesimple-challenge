import {
  AbilityBuilder,
  Ability,
  detectSubjectType,
  AbilityClass,
} from '@casl/ability';

type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete';
type Subjects = 'Album' | 'all';

export type AppAbility = Ability<[Actions, Subjects]>;
export const AppAbility = Ability as AbilityClass<AppAbility>;

export default function defineRulesFor(role: string) {
  const { can, rules } = new AbilityBuilder<AppAbility>();

  if (role === 'admin') {
    can('manage', 'all');
  } else {
    can(['read', 'create'], 'Album');
    can(['update'], 'Album');
  }

  return rules;
}

/**
 * Read for details: https://stalniy.github.io/casl/v4/en/guide/subject-type-detection
 */
function detectAppSubjectType(subject?: Subjects) {
  return detectSubjectType(subject);
}

export function buildAbilityFor(role: string): AppAbility {
  return new AppAbility(defineRulesFor(role), {
    detectSubjectType: detectAppSubjectType,
  });
}
